<template>
  <div :class="$style.hero">
    <div :class="['container', $style.container]">
      <div :class="$style.figures">
        <SharedInnerHeroPictures
          :primary="primaryImage"
          :secondary="secondaryImage"
          :class="$style.pictures"
        />
      </div>
      <div :class="$style.content">
        <h1 :class="['title-lg', $style.title]">
          {{ title }}
        </h1>
        <p v-if="description" :class="$style.description">
          {{ description }}
        </p>
        <ul :class="$style.list">
          <li v-for="item in items" :key="item.id" :class="$style.item">
            <UiIcon :name="item.icon" :class="$style.item__icon" />
            <div :class="$style.item__content">
              <div :class="$style.item__title">{{ item.title }}</div>
              <div :class="$style.item__text">{{ item.description }}</div>
            </div>
          </li>
        </ul>
        <UiButton
          v-if="button"
          :arrow="button.arrow"
          :external="button.external"
          :ui="button.ui"
          :size="button.size"
          :to="button.to"
          :text="button.text"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { SharedInnerHero } from '~/types'

defineProps<SharedInnerHero>()
</script>

<style lang="scss" module>
.hero {
  position: relative;
  overflow: hidden;
}

.container {
  position: relative;
  display: grid;

  @include media($from: md) {
    grid-template-columns: 43% 57%;
  }

  @include media($to: md) {
    gap: 40px;
  }
}

.pictures {
  @include media($from: md) {
    margin-left: -67%;
  }
}

.content {
  @include media($from: md) {
    padding-top: 43px;
    padding-left: calc(95 / 650 * 100%);
  }

  @include media($to: md) {
    order: -1;
  }
}

.title {
  margin-bottom: 24px;
  text-wrap: balance;
}

.description {
  margin-bottom: 32px;
  font-size: 20px;
  font-family: var(--font-secondary);
  line-height: 36px;
}

.list {
  display: grid;
  gap: 32px 16px;
  align-items: flex-start;
  max-width: 500px;
  margin-bottom: 48px;

  @include media($from: sm) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.item {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 16px;
  align-items: flex-start;

  &__icon {
    width: 32px;
    color: var(--accent-color);
  }

  &__content {
    font-size: 16px;
    font-family: var(--font-secondary);
    line-height: 22px;
  }

  &__title {
    margin-bottom: 8px;
  }

  &__text {
    color: var(--primary-light-color);
  }
}
</style>
