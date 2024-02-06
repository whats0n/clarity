<template>
  <div :class="$style.steps">
    <div :class="['container', $style.container]">
      <div :class="$style.header">
        <h2 :class="['title-md', $style.title]">
          {{ title }}
        </h2>
        <p :class="['text', $style.description]">
          {{ description }}
        </p>
      </div>
      <div :class="$style.items">
        <div v-for="(item, index) in items" :key="item.id" :class="$style.item">
          <div :class="$style.index">
            {{ index + 1 }}
          </div>
          <img :src="item.image" alt="Illustration" :class="$style.image" />
          <div :class="$style.content">
            <h4 :class="$style.subtitle">{{ item.title }}</h4>
            <p :class="$style.text">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { SharedSteps } from '~/types'

defineOptions({ name: 'TheSteps' })

defineProps<SharedSteps>()
</script>

<style lang="scss" module>
.steps {
  overflow: hidden;
}

.header {
  display: grid;
  gap: 30px;
  margin-bottom: 50px;

  @include media($from: sm) {
    grid-template-columns: calc(457 / 1140 * 100%) 1fr;
  }
}

.title {
  text-wrap: balance;
}

.description {
  max-width: 585px;
  color: var(--primary-light-color);
}

.items {
  position: relative;
  display: grid;
  grid-template-columns: repeat(var(--column), 1fr);
  gap: 60px 30px;
  padding-bottom: 66px;

  @include media($from: md) {
    --column: 3;
  }

  @include media($from: xs, $to: md) {
    --column: 2;
  }

  @include media($to: xs) {
    --column: 1;
  }

  &:before {
    position: absolute;
    top: 130px;
    right: -50vw;
    bottom: 0;
    left: -70px;
    background: #f9fbfe;
    border-radius: 8px 0 0 8px;
    content: '';
  }
}

.item {
  position: relative;
}

.index {
  position: absolute;
  top: -24px;
  right: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  color: #fff;
  font-weight: 700;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: 0.2px;
  text-align: center;
  background: var(--accent-color);
  border-radius: 8px;
}

.image {
  display: block;
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
  aspect-ratio: 360/260;
}

.content {
  padding: 26px 2px 0 30px;
}

.subtitle {
  position: relative;
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.2px;

  &:before {
    position: absolute;
    left: -20px;
    width: 4px;
    background: var(--success-color);
    border-radius: 1px;
    content: '';
    inset-block: 2px;
  }
}

.text {
  color: var(--primary-light-color);
  font-size: 14px;
  font-family: var(--font-secondary);
  line-height: 24px;
}
</style>
