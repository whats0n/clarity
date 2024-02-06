<template>
  <div :class="$style.benefits">
    <div :class="['container', $style.container]">
      <div :class="$style.header">
        <div class="badge badge_success-light">Whole Home Benefits</div>
        <h2 class="title-md">
          See what else happens when you filter your homes water
        </h2>
      </div>
      <div :class="$style.items">
        <div v-for="item in items" :key="item.id" :class="$style.item">
          <div :class="$style.figure">
            <UiIcon :name="item.icon" :class="$style.icon" />
          </div>
          <div :class="$style.content">
            <h3 :class="$style.subtitle">{{ item.title }}</h3>
            <p :class="['text', $style.text]">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { BenefitsItem } from '~/types'

defineOptions({ name: 'TheBenefits' })

const items: BenefitsItem[] = [
  {
    id: 1,
    icon: 'washer',
    title: 'Prolong Appliance Life',
    text: 'This product also protects your water-related appliances and improves lifespan',
  },
  {
    id: 2,
    icon: 'toilet',
    title: 'Plumbing Health',
    text: 'Say goodbye to corroded and blocked pipes caused by contaminated water',
  },
  {
    id: 3,
    icon: 'bath',
    title: 'Enhanced Showers & Bath',
    text: 'Enjoy improved showers & Baths with smooth, cleaner water at all locations',
  },
  {
    id: 4,
    icon: 'water_mixer',
    title: 'Improved RO System',
    text: 'A RO drinking system will function greater and last longer with less filter changes',
  },
]
</script>

<style lang="scss" module>
.container {
  &:after {
    display: block;
    margin-top: 135px;
    border-top: 1px solid #e5eaf4;
    content: '';
  }
}

.header {
  display: grid;
  place-items: center;
  gap: 16px;
  max-width: 555px;
  margin: 0 auto 64px;
  text-align: center;
  text-wrap: balance;
}

.items {
  display: grid;
  gap: 57px 62px;

  @include media($from: sm) {
    grid-template-columns: repeat(2, 1fr);
  }

  @include media($from: md) {
    padding-inline: 16px;
  }
}

.item {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 24px;
}

.figure {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  aspect-ratio: 1/1;

  &:before {
    position: absolute;
    z-index: -1;
    background: var(--accent-color);
    border-radius: 16px;
    opacity: 0.06;
    content: '';
    inset: 0;
  }
}

.icon {
  width: 48px;
  color: #3d42df;
}

.subtitle {
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 22px;
  line-height: 32px;
  letter-spacing: 0.2px;
}

.text {
  color: var(--primary-light-color);
}
</style>
