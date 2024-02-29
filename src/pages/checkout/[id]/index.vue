<template>
  <div :class="$style.page">
    <div :class="$style.main">
      <div :class="['container', $style.container]">
        <div :class="$style.content">
          <h1 :class="$style.title">Your Cart</h1>
          <div :class="$style.items">
            <div
              v-for="(item, index) in items"
              :key="item.id"
              :class="$style.item"
            >
              <div
                :class="[$style.item__checkbox, $style.item__checkbox_checked]"
              >
                <UiFaIcon :icon="['fas', 'check']" :class="$style.item__icon" />
              </div>
              <div :class="$style.item__label">{{ item.label }}</div>
              <div :class="$style.item__counter">
                {{ index + 1 }}/{{ steps }}
              </div>
              <SharedCheckoutItem
                :title="item.name"
                :meta="item.meta"
                :image="item.preview"
                :image-fit="item.imageFit"
                :badge="item.discount ? `Save $${item.discount}` : ''"
              >
                <div :class="$style.price">
                  <span
                    :class="[item.priceWithDiscount && $style.price__invalid]"
                  >
                    ${{ item.price }}
                  </span>
                  <span v-if="item.priceWithDiscount">
                    ${{ item.priceWithDiscount }}
                  </span>
                </div>
              </SharedCheckoutItem>
            </div>
            <div :class="$style.item">
              <div
                :class="[
                  $style.item__checkbox,
                  !!address.data.details && $style.item__checkbox_checked,
                ]"
              >
                <UiFaIcon :icon="['fas', 'check']" :class="$style.item__icon" />
              </div>
              <div :class="$style.item__label">Add Address</div>
              <div :class="$style.item__counter">{{ steps }}/{{ steps }}</div>
              <SharedCheckoutItem
                v-if="address.data.details"
                :title="address.data.verifiedAddress.main"
                :meta="address.data.verifiedAddress.meta"
                :image="address.data.details.image"
                no-gradient
              >
                <div :class="$style.item__verified">ADDRESS VERIFIED</div>
              </SharedCheckoutItem>
              <div v-else :class="$style.address">
                <div :class="$style.search">
                  <UiFaIcon
                    :icon="['fas', 'search']"
                    :class="$style.search__icon"
                  />
                  <input
                    v-model="address.data.search"
                    type="text"
                    placeholder="Start typing your address"
                    :class="$style.search__input"
                    @input="address.actions.load"
                    @focus="address.actions.open"
                    @blur="address.actions.close"
                  />
                </div>
                <div v-if="address.state.opened" :class="$style.autocomplete">
                  <button
                    v-for="item in address.data.items"
                    :key="item.id"
                    type="button"
                    :class="$style.autocomplete__button"
                    @focus="address.actions.open"
                    @blur="address.actions.close"
                    @click.prevent="address.actions.select(item)"
                  >
                    {{ item.text }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <aside :class="$style.sidebar">
          <ClientOnly v-if="address.data.details">
            <SharedPaymentForm
              :address="address.data.details.formattedAddress"
              :plan-id="details.id"
              :amount="deposit"
            />
          </ClientOnly>
          <template v-else>
            <div :class="$style.details">
              <div
                :class="[
                  $style.details__title,
                  $style[`details__title_${details.type}`],
                ]"
              >
                {{ details.title }}
              </div>
              <div :class="$style.details__items">
                <div
                  v-for="item in items"
                  :key="item.id"
                  :class="$style.details__item"
                >
                  <div :class="$style.details__row">
                    <div :class="$style.details__key">
                      {{ item.name }}
                    </div>
                    <div :class="$style.details__value">${{ item.price }}</div>
                  </div>
                  <template v-if="item.discount">
                    <div :class="$style.details__row">
                      <div :class="$style.details__key">Discount</div>
                      <div :class="$style.details__value">
                        -${{ item.discount.toFixed(2) }}
                      </div>
                    </div>
                    <div :class="$style.details__total">
                      ${{ item.priceWithDiscount }}
                    </div>
                  </template>
                </div>
                <div :class="$style.details__item">
                  <div :class="$style.details__row">
                    <div :class="$style.details__key">Due After Install</div>
                    <div :class="$style.details__value">${{ total }}</div>
                  </div>
                </div>
              </div>
            </div>
            <div :class="$style.deposit">
              <div :class="$style.deposit__price">${{ deposit }}</div>
              <div :class="$style.deposit__label">Due Today</div>
              <SharedCheckoutButton
                :disabled="!address.data.placeId"
                :processing="address.state.submitting"
                @click="address.actions.submit"
              >
                Add address
              </SharedCheckoutButton>
            </div>
          </template>
        </aside>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import GET_CHECKOUT_PAGE from '~/graphql/queries/GetCheckoutPage.gql'
import type { Query } from '~/graphql/types'

definePageMeta({
  layout: 'contacts',
  title: 'Checkout',
})

const route = useRoute()

const id: string =
  typeof route.params.id === 'string' ? route.params.id : route.params.id[0]

const { data, error } = await useAsyncQuery<Pick<Query, 'pricingPlan'>>(
  GET_CHECKOUT_PAGE,
  { id: +id },
)

if (!data.value || error.value) showError({ statusCode: 404 })

const imageSrc = useImageSrc()

const items = computed(() =>
  (data.value.pricingPlan?.data?.attributes?.products?.data || []).reduce<
    Array<{
      id: string
      name: string
      label: string
      meta: string
      price: string
      priceWithDiscount: string
      discount: number
      preview: string
      imageFit: 'cover' | 'contain'
    }>
  >((result, product) => {
    if (product.id && product.attributes) {
      const price = product.attributes.price || 0
      const discount = product.attributes.discount || 0
      const priceWithDiscount = discount ? price - discount : 0

      result.push({
        id: product.id,
        name: product.attributes.name || '',
        label: product.attributes.label || '',
        meta: product.attributes.meta || '',
        price: price.toFixed(2),
        priceWithDiscount: discount ? priceWithDiscount.toFixed(2) : '',
        discount,
        preview: imageSrc(product.attributes.preview),
        imageFit: product.attributes.preview_object_fit,
      })
    }

    return result
  }, []),
)

const details = computed<{
  title: string
  type: string
  id: string
}>(() => {
  return {
    title: data.value.pricingPlan?.data?.attributes?.name || '',
    type: data.value.pricingPlan?.data?.attributes?.type || '',
    id: data.value.pricingPlan?.data?.id || '',
  }
})

const deposit = computed<number>(
  () => data.value.pricingPlan?.data?.attributes?.deposit || 0,
)

const total = computed<string>(() => {
  const price = (
    data.value.pricingPlan?.data?.attributes?.products?.data || []
  ).reduce<number>((result, item) => {
    const price = item.attributes?.price || 0
    const discount = item.attributes?.discount || 0

    return result + price - discount
  }, 0)

  return (price - deposit.value).toFixed(2)
})

const steps = computed<number>(() => items.value.length + 1)

const address = await useAddress()
</script>

<style lang="scss" module>
.container {
  display: grid;
  gap: 100px;
  align-items: flex-start;

  @include media($from: md) {
    grid-template-columns: 1fr 370px;
  }
}

.title {
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 38px;
  line-height: 68px;
  letter-spacing: 0.14px;
}

.price {
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 0.83px;

  &__invalid {
    color: var(--danger-color);
    text-decoration: line-through;
  }
}

.item {
  position: relative;
  padding-left: 40px;

  &:not(:last-child) {
    padding-bottom: 32px;

    &:before {
      position: absolute;
      left: 10px;
      border-left: 1px dashed #d5e4f5;
      content: '';
      inset-block: 28px 4px;
    }

    &:after {
      position: absolute;
      top: calc(50% + 4px);
      left: 6px;
      width: 9px;
      height: 9px;
      background: #36b37e;
      border: 1px solid #eff5fc;
      border-radius: 50%;
      content: '';
    }
  }

  &__checkbox {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 23px;
    height: 23px;
    color: #c7d7e9;
    font-size: 12px;
    border: 1px solid #eff5fc;
    border-radius: 50%;
    transition:
      border-color 0.3s,
      color 0.3s,
      background-color 0.3s;

    &_checked {
      color: #fff;
      background: var(--success-color);
    }
  }

  &__label {
    color: #1d1b84;
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;
    letter-spacing: 0.36px;
  }

  &__counter {
    margin-bottom: 20px;
    color: #204f60;
    font-weight: 700;
    font-size: 10px;
    line-height: 1;
    letter-spacing: -0.11px;
  }

  &__verified {
    color: var(--success-color);
    font-weight: 600;
    font-size: 15px;
    line-height: 20px;
    letter-spacing: 0.83px;
  }
}

.search {
  position: relative;

  &__icon {
    position: absolute;
    top: calc(50% - 0.5em);
    left: 24px;
    color: var(--primary-light-color);
    font-size: 18px;

    @include media($to: sm) {
      left: 16px;
      font-size: 16px;
    }
  }

  &__input {
    width: 100%;
    height: 80px;
    color: var(--primary-color);
    font-size: 18px;
    font-family: var(--font-secondary);
    line-height: normal;
    background: #ffffff;
    border: 1px solid #e5eaf4;
    border-radius: 8px;
    box-shadow: 0 -10px 35px 0 rgba(0, 0, 0, 0.03);
    padding-inline: 58px 24px;

    @include media($to: sm) {
      height: 60px;
      font-size: 16px;
      padding-inline: 40px 16px;
    }

    &::placeholder {
      color: var(--primary-light-color);
      opacity: 1;
    }
  }
}

.sidebar {
  padding: 11px;
  background: #f6fafe;
  border: 1px solid #e9f2fa;
  border-radius: 11px;
}

.details {
  padding: 15px 22px 21px 13px;

  &__title {
    margin-bottom: 52px;
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;
    letter-spacing: 0.36px;
    text-align: center;
    text-transform: uppercase;

    &_primary {
      color: #1565d8;
    }

    &_secondary {
      color: #40b784;
    }

    &_tertiary {
      color: #ac57f5;
    }
  }

  &__items {
    display: grid;
    gap: 14px;
  }

  &__item {
    display: grid;
    gap: 3px;
    color: #204f60;
    font-weight: 500;
    font-size: 15px;
    line-height: 21px;
    letter-spacing: -0.17px;

    &:last-child {
      margin-top: 18px;
    }
  }

  &__row {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 16px;
  }

  &__total {
    color: #1d1b84;
    font-weight: 700;
    text-align: right;
  }
}

.deposit {
  padding: 32px 23px 52px;
  text-align: center;
  background: #ffffff;
  border: 1px solid #e9f2fa;
  border-radius: 12px;

  &__price {
    margin-bottom: 11px;
    color: #1d1b84;
    font-weight: 700;
    font-size: 46px;
    line-height: 60px;
    letter-spacing: 1.02px;
  }

  &__label {
    margin-bottom: 41px;
    color: #344b80;
    font-size: 15px;
    line-height: 20px;
    letter-spacing: -0.37px;
  }
}

.address {
  position: relative;
}

.autocomplete {
  position: absolute;
  top: calc(100% + 8px);
  max-height: 200px;
  overflow: auto;
  background: #fff;
  box-shadow: 0 -3px 10px 0 rgba(0, 0, 0, 0.1);
  inset-inline: 0;

  &__button {
    width: 100%;
    padding: 8px 16px;
    overflow: hidden;
    font-size: 16px;
    line-height: 20px;
    text-align: left;
    text-overflow: ellipsis;

    @include hover {
      color: #fff;
      background: var(--accent-color);
    }
  }
}
</style>
