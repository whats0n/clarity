<template>
  <div :class="$style.content">
    <div :class="['container', $style.container]">
      <div :class="$style.header">
        <p class="label">{{ label }}</p>
        <h2 class="title-md">{{ title }}</h2>
      </div>
      <div :class="$style.items">
        <div v-for="item in items" :key="item.id" :class="$style.item">
          <div :class="$style.figure">
            <img :src="item.image" alt="Illustration" :class="$style.image" />
          </div>
          <div :class="$style.content">
            <h3 :class="['title-sm', $style.subtitle]">
              {{ item.title }}
            </h3>
            <div v-if="item.text" :class="['text', $style.description]">
              {{ item.text }}
            </div>
            <ul v-if="item.list?.length" :class="$style.list">
              <li
                v-for="node in item.list"
                :key="node.id"
                :class="$style.list__item"
              >
                <UiFaIcon :icon="['fas', 'check']" :class="$style.list__icon" />
                {{ node.text }}
              </li>
            </ul>
            <UiButton
              v-if="item.button"
              :arrow="item.button.arrow"
              :external="item.button.external"
              :ui="item.button.ui"
              :size="item.button.size"
              :to="item.button.to"
              :text="item.button.text"
              :class="$style.button"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { SharedContent } from '~/types'

defineOptions({ name: 'TheContent' })

defineProps<SharedContent>()
</script>

<style lang="scss" module>
.content {
  position: relative;
  padding-bottom: 62px;
}

.header {
  display: grid;
  gap: 16px;
  margin-bottom: 128px;
  text-align: center;

  @include media($to: md) {
    margin-bottom: 80px;
  }
}

.items {
  display: grid;
  gap: 133px;
}

.figure {
  overflow: hidden;
  border-radius: 8px;
  aspect-ratio: 458/520;
}

.image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.subtitle {
  margin-bottom: 28px;
}

.description {
  color: var(--primary-light-color);
  white-space: pre-wrap;

  > p:not(:last-child) {
    margin-bottom: 32px;
  }
}

.button {
  margin-top: 64px;

  @include media($to: md) {
    margin-top: 32px;
  }
}

.list {
  display: grid;
  margin-top: 26px;
  font-size: 16px;
  font-family: var(--font-secondary);
  line-height: 22px;

  @include media($from: sm) {
    grid-template-columns: repeat(2, 1fr);
    gap: 26px;
  }

  @include media($to: md) {
    margin-top: 32px;
  }

  @include media($to: sm) {
    gap: 16px;
  }

  &__item {
    position: relative;
    padding-left: 30px;
  }

  &__icon {
    position: absolute;
    top: 4px;
    left: 3px;
    width: 10px;
    color: var(--success-color);
  }
}

.item {
  display: grid;
  gap: calc(97px);
  align-items: center;
  --image: calc(458 / 1045 * 100%);

  @include media($from: lg) {
    padding-left: 95px;
  }

  @include media($to: md) {
    gap: 60px;
    max-width: 600px;
    margin-inline: auto;
  }

  &:nth-child(odd) {
    @include media($from: md) {
      grid-template-columns: 1fr var(--image);

      .figure {
        order: 1;
      }
    }

    .image {
      object-position: 67% 50%;
    }
  }

  &:nth-child(even) {
    @include media($from: md) {
      grid-template-columns: var(--image) 1fr;
    }

    .image {
      object-position: 37% 50%;
    }
  }
}
</style>
