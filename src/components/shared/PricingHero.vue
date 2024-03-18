<template>
  <div :class="$style.hero">
    <div :class="['container', $style.container]">
      <div :class="$style.header">
        <h1 class="title-lg">{{ title }}</h1>
        <p v-if="description.trim().length" :class="$style.description">
          {{ description }}
        </p>
      </div>

      <div :class="$style.toggles">
        <button
          v-for="item in variants"
          :key="item.id"
          type="button"
          :disabled="variants.length < 2"
          :class="[
            $style.toggle,
            selectedVariant === item.id && $style.toggle_selected,
          ]"
          @click="selectedVariant = item.id"
        >
          <UiIcon :name="item.icon" :class="$style.toggle__icon" />
          <span :class="$style.toggle__content">
            <span :class="$style.toggle__title">
              {{ item.title }}
            </span>
            <span :class="$style.toggle__description">
              {{ item.description }}
            </span>
          </span>
        </button>
      </div>

      <div v-if="selectedPlans.length" :class="$style.plans">
        <div v-for="item in selectedPlans" :key="item.id" :class="$style.plan">
          <div :class="[$style.plan__name, $style.plan__name_primary]">
            {{ item.name }}
          </div>
          <div :class="$style.plan__container">
            <img
              v-if="item.image"
              :src="item.image"
              :class="$style.plan__image"
            />
            <div :class="$style.plan__price">${{ item.price }}</div>
            <div :class="$style.plan__label">
              {{ item.meta }}
            </div>
            <NuxtLink
              v-if="item.button"
              :to="item.button.href"
              :external="item.button.external"
              :target="item.button.external ? '_blank' : undefined"
              :class="[
                $style.plan__button,
                $style[`plan__button_${item.button.color}`],
              ]"
            >
              Get Started Now
            </NuxtLink>
          </div>
          <div v-if="item.list?.length" :class="$style.plan__details">
            <div :class="$style.plan__name">
              {{ item.name }}
            </div>
            <ul :class="[$style.list, $style.plan__list]">
              <li
                v-for="listItem in item.list"
                :key="listItem.id"
                :class="$style.list__item"
              >
                <div :class="$style.list__figure">
                  <UiFaIcon
                    :icon="['fas', 'check']"
                    :class="$style.list__icon"
                  />
                </div>
                <div :class="$style.list__text">
                  {{ listItem.text }}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { SharedPricingHero, SharedPricingPlan } from '~/types'

const { variants } = defineProps<SharedPricingHero>()

const selectedVariant = ref<string | number>(variants[0]?.id || '')

const selectedPlans = computed<SharedPricingPlan[]>(
  () =>
    variants.find((variant) => variant.id === selectedVariant.value)?.plans ||
    [],
)
</script>

<style lang="scss" module>
.hero {
  --primary: #1d1b84;
  --secondary: #344b80;
}

.header {
  display: grid;
  gap: 24px;
  max-width: 680px;
  margin-bottom: 45px;
  text-align: center;
  margin-inline: auto;
}

.description {
  color: var(--secondary);
  font-size: 20px;
  font-family: var(--font-secondary);
  line-height: calc(36 / 20);
  text-wrap: balance;

  @include media($to: sm) {
    font-size: 16px;
  }
}

.toggles {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  max-width: 865px;
  margin: 0 auto 50px;
}

.toggle {
  display: grid;
  flex: 0 0 auto;
  grid-template-columns: auto 1fr;
  gap: 50px;
  width: 100%;
  padding: 33px 36px;
  text-align: left;
  background: #f6fafe;
  border: 2px solid #e9f2fa;
  border-radius: 10px;
  transition:
    background-color 0.3s,
    border-color 0.3s;

  @include media($from: sm) {
    width: calc(50% - 8px);
  }

  @include media($to: md) {
    gap: 16px;
    padding: 16px;
  }

  &__icon {
    width: 48px;
    color: #bdbec1;
    transition: color 0.3s;
  }

  &__content {
    display: grid;
    color: var(--primary);
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.2px;
  }

  &__title {
    font-weight: 700;
  }

  &__description {
    font-weight: 500;
  }

  &_selected {
    background: none;
    border-color: #ac57f5;

    .toggle {
      &__icon {
        color: #8c4bff;
      }
    }
  }
}

.plans {
  display: flex;
  flex-wrap: wrap;
  gap: var(--gap);
  margin-inline: -10px;
  justify-content: center;
  --gap: 23px;
  --columns: 1;

  @include media($from: sm, $to: md) {
    --columns: 2;
  }

  @include media($from: md) {
    --columns: 3;
  }
}

.plan {
  width: calc((100% - var(--gap) * (var(--columns) - 1)) / var(--columns));
  padding: 25px 10px 36px;
  background: #f6fafe;
  border: 1px solid #e9f2fa;
  border-radius: 11px;

  &__container {
    padding: 32px 36px 52px;
    text-align: center;
    background: #ffffff;
    border: 1px solid #e9f2fa;
    border-radius: 12px;

    &:not(:last-child) {
      margin-bottom: 32px;
    }
  }

  &__image {
    width: 100px;
    height: 100px;
    margin-bottom: 8px;
    object-fit: contain;
  }

  &__name {
    color: #635cff;
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;
    letter-spacing: 0.36px;
    text-transform: uppercase;

    &_primary {
      margin-bottom: 17px;
      text-align: center;
    }
  }

  &__price {
    margin-bottom: 11px;
    color: var(--primary);
    font-weight: 700;
    font-size: 46px;
    line-height: 60px;
    letter-spacing: 1.02px;
  }

  &__label {
    margin-bottom: 40px;
    color: var(--secondary);
    font-size: 15px;
    line-height: 20px;
    letter-spacing: -0.37px;
  }

  &__button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 300px;
    margin-inline: auto;
    height: 56px;
    color: #ffffff;
    font-size: 18px;
    font-family: var(--font-secondary);
    line-height: normal;
    text-align: center;
    background: var(--color);
    border: 1px solid var(--color);
    border-radius: 8px;
    transition:
      color 0.3s,
      background-color 0.3s;
    padding-inline: 24px;

    @include hover {
      color: var(--color);
      background: #fff;
    }

    &_primary {
      --color: #1565d8;
    }

    &_secondary {
      --color: #40b784;
    }

    &_tertiary {
      --color: #ac57f5;
    }
  }

  &__details {
    padding-inline: 15px;
    padding-bottom: 20px;
  }

  &__list {
    margin-top: 19px;
  }
}

.list {
  display: grid;
  gap: 17px;

  &__figure {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 23px;
    height: 23px;
    color: #635cff;
    background: #ffffff;
    border: 1px solid #eff5fc;
    border-radius: 50%;
  }

  &__icon {
    width: 10px;
  }

  &__text {
    color: var(--primary);
    font-weight: 700;
    font-size: 16px;
    line-height: calc(21 / 16);
    letter-spacing: 0.36px;
  }

  &__item {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 16px;
    align-items: flex-start;

    &:not(:first-child) {
      .list__text {
        text-decoration: underline;
        text-decoration-color: #b6b4fe;
        text-decoration-style: dashed;
      }
    }
  }
}
</style>
