<template>
  <form :class="$style.container" @submit.prevent="onSubmit">
    <div ref="elementRef"></div>
    <div
      v-if="errorMessage || creationError || publishError"
      :class="$style.error"
    >
      {{ errorMessage || creationError?.message || publishError?.message }}
    </div>
    <SharedCheckoutButton
      type="submit"
      :processing="processing"
      :class="$style.button"
    >
      Deposit ${{ amount.toFixed(2) }}
    </SharedCheckoutButton>
  </form>
</template>

<script lang="ts" setup>
import { loadStripe } from '@stripe/stripe-js'
import { useOrderToken } from '~/composables/useOrderToken'
import CREATE_ORDER from '~/graphql/mutations/CreateOrder.gql'
import PUBLISH_ORDER from '~/graphql/mutations/PublishOrder.gql'
import type { Mutation } from '~/graphql/types'

const props = defineProps<{ address: string; planId: string; amount: number }>()

const router = useRouter()

const runtimeConfig = useRuntimeConfig()

const stripe = await loadStripe(runtimeConfig.public.stripePk)

const { data } = await useFetch('/api/payment', {
  params: { amount: props.amount },
})

const elementRef = ref<HTMLElement | null>(null)

const elements = computed(() => {
  if (!stripe || !data.value?.clientSecret) return

  return stripe.elements({
    clientSecret: data.value.clientSecret,
    locale: 'en',
  })
})

watchEffect(() => {
  if (!elements.value || !elementRef.value) return
  elements.value
    .create('payment', {
      layout: 'tabs',
    })
    .mount(elementRef.value)
})

const processing = ref<boolean>(false)

const errorMessage = ref<string>('')

const { mutate: createOrder, error: creationError } =
  useMutation<Pick<Mutation, 'createOrder'>>(CREATE_ORDER)

const { mutate: updateOrder, error: publishError } =
  useMutation<Pick<Mutation, 'updateOrder'>>(PUBLISH_ORDER)

const orderId = ref<string>('')

const orderToken = useOrderToken()

const onSubmit = async () => {
  if (
    !stripe ||
    !elements.value ||
    processing.value ||
    !data.value?.clientSecret
  )
    return

  processing.value = true

  errorMessage.value = ''

  try {
    if (!orderId.value) {
      const token = orderToken.generate()

      const creationResponse = await createOrder({
        address: props.address,
        payment_id: data.value.clientSecret.split('_secret_')[0] || '',
        pricing_plans: [props.planId],
        token,
      })

      orderToken.set(token)

      const id = creationResponse?.data?.createOrder?.data?.id || ''

      if (!id) {
        processing.value = false
        return
      }

      orderId.value = id
    }

    const { paymentIntent, error } = await stripe.confirmPayment({
      elements: elements.value,
      redirect: 'if_required',
    })

    if (error?.type === 'card_error' || error?.type === 'validation_error') {
      errorMessage.value = error.message || 'Something went wrong'
    } else if (paymentIntent?.status === 'succeeded') {
      await updateOrder({
        id: orderId.value,
        publishedAt: new Date().toISOString(),
      })
      await router.push(
        `/checkout/${props.planId}/success?orderId=${orderId.value}`,
      )
    } else if (paymentIntent?.status === 'canceled') {
      errorMessage.value = 'Payment was canceled'
    }
  } catch (error) {
    errorMessage.value =
      error instanceof Error ? error.message : 'Something went wrong'
  }

  processing.value = false
}
</script>

<style lang="scss" module>
.container {
  padding: 16px 40px 50px;
}

.button {
  width: 100%;
  margin-top: 40px;
}

.error {
  margin-top: 4px;
  color: var(--danger-color);
  font-size: 14px;
  font-family: var(--font-secondary);
  line-height: 16px;
}
</style>
