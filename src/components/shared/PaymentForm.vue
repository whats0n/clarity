<template>
  <form :class="$style.container" @submit.prevent="onSubmit">
    <div ref="elementRef"></div>
    <div v-if="errorMessage" :class="$style.error">{{ errorMessage }}</div>
    <SharedCheckoutButton type="submit" :class="$style.button">
      Deposit ${{ amount.toFixed(2) }}
    </SharedCheckoutButton>
  </form>
</template>

<script lang="ts" setup>
import { loadStripe } from '@stripe/stripe-js'

const props = defineProps<{ amount: number }>()

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

const onSubmit = async () => {
  if (!stripe || !elements.value || processing.value) return

  processing.value = true

  const { error } = await stripe.confirmPayment({
    elements: elements.value,
    // confirmParams: {
    //   return_url: '',
    // },
    redirect: 'if_required',
  })

  if (error?.type === 'card_error' || error?.type === 'validation_error') {
    errorMessage.value = error.message || 'Something went wrong.'
  } else {
    errorMessage.value = 'Something went wrong.'
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
