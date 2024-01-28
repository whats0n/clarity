<template>
  <div :class="$style.features">
    <div :class="['container', $style.container]">
      <div :class="$style.items">
        <div :class="$style.header">
          <p class="label">{{ label }}</p>
          <h2 class="title-md">{{ title }}</h2>
        </div>

        <div v-for="item in items" :key="item.id" :class="$style.item">
          <div :class="$style.figure">
            <UiIcon :name="item.icon" :class="$style.icon" />
          </div>
          <h4 :class="$style.subtitle">{{ item.title }}</h4>
          <p :class="['text', $style.description]">{{ item.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { FeaturesItem } from '~/types'

defineOptions({ name: 'TheFeatures' })

defineProps<{
  label: string
  title: string
  items: FeaturesItem[]
}>()
</script>

<style lang="scss" module>
.features {
  background: #f9fbfe;
  padding-block: 64px;
}

.container {
  &:after {
    display: block;
    border: 1px solid #e5eaf4;
    content: '';
  }
}

.header {
  display: grid;
  gap: 16px;
}

.items {
  display: grid;
  gap: 40px;
  align-items: flex-start;
  padding-bottom: 140px;

  @include media($from: xs, $to: md) {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px 30px;
  }

  @include media($from: md) {
    grid-template-columns: repeat(3, 1fr);
    gap: 64px 46px;
  }
}

.figure {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  margin-bottom: 24px;

  &:before {
    position: absolute;
    border: 1px solid var(--accent-color);
    border-radius: 16px;
    opacity: 0.2;
    content: '';
    inset: 0;
  }
}

.icon {
  width: 28px;
  color: var(--accent-color);
}

.subtitle {
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 22px;
  line-height: 32px;
  letter-spacing: 0.2px;
}

.description {
  color: var(--primary-light-color);
}
</style>
