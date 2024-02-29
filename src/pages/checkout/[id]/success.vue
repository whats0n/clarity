<template>
  <div :class="$style.page">
    <div :class="$style.main">
      <div :class="['container', $style.container]">
        <div :class="$style.content">
          <h1 :class="['title-md', $style.title]">Congrats! Now what?</h1>
          <UiCalendarButton
            :text="
              isEventScheduled ? 'Appt was booked' : 'Add Appt to Calendar'
            "
            :disabled="isEventScheduled"
            :class="$style.calendar"
            @click="calendly.open({ a2: orderId })"
          />
          <div :class="$style.divider">
            <span>Want to add something?</span>
          </div>
          <SharedProductCard
            :service="oppositeService.service"
            :name="oppositeService.name"
            :image="oppositeService.image"
            :price="oppositeService.price"
            :installation="oppositeService.installation"
            :installation-accessories="oppositeService.installationAccessories"
            :class="$style.card"
            :processing="updating"
            :disabled="!oppositeService.addable || pending"
            @add="addService(oppositeService.id)"
          />
          <UiButton
            v-if="pricingPlan?.attributes?.how_to_href"
            external
            :text="pricingPlan.attributes.how_to_text || ''"
            :to="pricingPlan.attributes.how_to_href || ''"
            :class="$style.button"
          />
        </div>
        <div :class="$style.figure">
          <img src="/images/success@2x.jpeg" :class="$style.image" />
          <div :class="$style.figure__corner" />
          <div :class="$style.figure__circle" />
          <div :class="$style.figure__line" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import GET_SUCCESS_PAGE from '~/graphql/queries/GetSuccessPage.gql'
import UPDATE_ORDER from '~/graphql/mutations/UpdateOrder.gql'
import BOOK_ORDER from '~/graphql/mutations/BookOrder.gql'
import type { Mutation, PricingPlanEntity, Query } from '~/graphql/types'

definePageMeta({
  layout: 'contacts',
  title: 'Success',
})

const calendly = useCalendly()
const route = useRoute()
const toast = useToast()
const orderToken = useOrderToken()
const { $gtag } = useNuxtApp()

const token = orderToken.get()

if (!token) showError({ statusCode: 404 })

const orderId: string =
  typeof route.query.orderId === 'string'
    ? route.query.orderId
    : Array.isArray(route.query.orderId)
      ? `${route.query.orderId[0]}`
      : ''

if (!orderId) showError({ statusCode: 404 })

const { data, error, pending, refresh } = await useAsyncQuery<
  Pick<Query, 'order'>
>({
  query: GET_SUCCESS_PAGE,
  variables: { id: orderId },
  cache: false,
})

if (
  !data.value?.order ||
  data.value.order.data?.attributes?.token !== token ||
  error.value
)
  showError({ statusCode: 404 })

const imageSrc = useImageSrc()

const pricingPlans = computed<PricingPlanEntity[]>(
  () => data.value?.order?.data?.attributes?.pricing_plans?.data || [],
)

const pricingPlan = computed<PricingPlanEntity | null>(
  () => pricingPlans.value[0],
)

const oppositePricingPlan = computed<PricingPlanEntity | null>(
  () => pricingPlan.value?.attributes?.opposite_service?.data || null,
)

const oppositeService = computed(() => {
  const products = oppositePricingPlan.value?.attributes?.products?.data || []
  return {
    addable:
      pricingPlans.value.every(
        (plan) => plan.id !== oppositePricingPlan.value?.id,
      ) && pricingPlans.value.length < 2,
    id: oppositePricingPlan.value?.id || '',
    service: oppositePricingPlan.value?.attributes?.success_service_name || '',
    name: oppositePricingPlan.value?.attributes?.success_service_label || '',
    image: imageSrc(
      oppositePricingPlan.value?.attributes?.success_service_image,
    ),
    price: products.reduce<number>((result, item) => {
      const price = item.attributes?.price || 0
      const discount = item.attributes?.discount || 0

      return result + price - discount
    }, 0),
    installation: !!oppositePricingPlan.value?.attributes?.installation,
    installationAccessories:
      !!oppositePricingPlan.value?.attributes?.installation_accessories,
  }
})

const {
  mutate: updateOrder,
  loading: updating,
  error: updateError,
} = useMutation<Pick<Mutation, 'updateOrder'>>(UPDATE_ORDER)

watch(updateError, (error) => {
  if (error) toast.danger(error.message)
})

const addService = async (id: string): Promise<void> => {
  try {
    await updateOrder({
      id: orderId,
      pricing_plans: [...pricingPlans.value.map((item) => item.id), id],
    })

    await refresh()

    toast.success('Service was added')
  } catch (e) {
    error.value = e instanceof Error ? e : null
  }
}

const isEventScheduled = computed<boolean>(
  () => !!data.value?.order?.data?.attributes?.calendly_booked,
)

const { mutate: bookOrder, error: bookOrderError } =
  useMutation<Pick<Mutation, 'updateOrder'>>(BOOK_ORDER)

watch(bookOrderError, (error) => {
  if (error) toast.danger(error.message)
})

const onEventScheduled = async (): Promise<void> => {
  try {
    await bookOrder({
      id: orderId,
      calendly_booked: true,
    })

    await refresh()

    toast.success('Service was successfully booked')
  } catch (e) {
    error.value = e instanceof Error ? e : null
  }
}

onMounted(() => {
  calendly.addEventListener('calendly.event_scheduled', onEventScheduled)

  $gtag('event', 'conversion', {
    send_to: 'AW-16461428444/fgFVCPyJmpUZENzttak9',
  })
})

onBeforeUnmount(() => {
  calendly.removeEventListener('calendly.event_scheduled', onEventScheduled)
})
</script>

<style lang="scss" module>
.main {
  overflow: hidden;
}

.container {
  display: grid;

  @include media($from: md) {
    grid-template-columns: 360px 509px;
    align-items: flex-start;
    justify-content: space-between;
  }
}

.content {
  @include media($from: md) {
    max-width: 360px;
    padding-bottom: 58px;
  }

  @include media($to: md) {
    max-width: 500px;
    margin-inline: auto;
    text-align: center;
  }
}

.title {
  margin-bottom: 35px;
}

.calendar {
  margin-bottom: 30px;
}

.divider {
  margin-bottom: 36px;
  overflow: hidden;
  font-size: 16px;
  font-family: var(--font-secondary);
  line-height: 22px;
  text-align: center;

  span {
    position: relative;
    display: inline-block;
    vertical-align: top;
    padding-inline: 25px;

    &:before,
    &:after {
      position: absolute;
      top: 50%;
      width: 300px;
      border-top: 1px solid #e5eaf4;
      content: '';
    }

    &:before {
      right: 100%;
    }

    &:after {
      left: 100%;
    }
  }
}

.button {
  width: 100%;
}

.card {
  margin-bottom: 25px;
}

.figure {
  position: relative;

  @include media($from: md) {
    max-width: 509px;
    padding: 98px 27px 33px 57px;
  }

  @include media($to: md) {
    max-width: 580px;
    margin: 0 auto 60px;
    padding: 100px 40px 60px;
    text-align: center;
  }

  &__corner {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 40px;
    border: 15px solid #fff;
    border-top: 0;
    border-right: 0;
  }

  &__line {
    position: absolute;
    top: 37px;
    right: -44px;
    width: 64px;
    height: 16px;
    background: #fff;

    &:after {
      position: absolute;
      top: calc(100% + 16px);
      right: calc(100% + 10px);
      width: 16px;
      height: 16px;
      background: #00daf7;
      content: '';
    }
  }

  &__circle {
    position: absolute;
    right: -35px;
    bottom: 74px;
    width: 100px;
    height: 100px;

    &:before {
      position: absolute;
      border: 18px solid #fff;
      border-top-color: transparent;
      border-bottom-color: transparent;
      border-left-color: transparent;
      border-radius: 50%;
      transform: rotate(45deg);
      content: '';
      inset: 0;
    }

    &:after {
      position: absolute;
      bottom: 0;
      left: calc(100% + 14px);
      width: 16px;
      height: 16px;
      background: #00daf7;
      content: '';
    }
  }
}

.image {
  display: block;
  width: 100%;
  border-radius: 8px;
}
</style>
