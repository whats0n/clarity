<template>
  <div :class="$style.tips">
    <div :class="['container', $style.container]">
      <div :class="$style.inner">
        <h2 :class="['title-md', $style.title]">{{ title }}</h2>
        <div :class="$style.items">
          <div v-for="item in items" :key="item.id" :class="$style.item">
            <div :class="$style.figure">
              <UiIcon :name="item.icon" :class="$style.icon" />
            </div>
            <div :class="$style.subtitle">{{ item.title }}</div>
            <p :class="$style.description">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="button" :class="$style.button">
      <UiButton
        :arrow="button.arrow"
        :external="button.external"
        :ui="button.ui"
        :size="button.size"
        :to="button.to"
        :text="button.text"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { SharedTips } from '~/types'

defineOptions({ name: 'TheTips' })

defineProps<SharedTips>()
</script>

<style lang="scss" module>
.inner {
  padding-block: 100px 80px;
  border-top: 1px solid #e3e7ed;
}

.title {
  text-align: center;
}

.items {
  display: grid;
  gap: 46px 30px;
  max-width: 910px;
  margin-top: 120px;
  margin-inline: auto;

  @include media($from: sm) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.item {
  @include media($from: md) {
    padding-inline: 24px;
  }
}

.figure {
  max-width: 146px;
  margin-inline: auto;
  margin-bottom: 30px;
}

.subtitle {
  margin-bottom: 18px;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.2px;
}

.description {
  color: var(--primary-light-color);
  font-size: 14px;
  font-family: var(--font-secondary);
  line-height: 24px;

  @include media($from: sm) {
    max-width: 346px;
  }
}

.button {
  padding: 58px 0;
  text-align: center;
  border-top: 1px solid #e3e7ed;
}
</style>
