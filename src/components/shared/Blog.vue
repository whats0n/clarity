<template>
  <div :class="$style.blog">
    <div class="container">
      <div :class="$style.header">
        <p class="label">{{ label }}</p>
        <h2 class="title-md">{{ title }}</h2>
        <p :class="['text', $style.description]">
          {{ description }}
        </p>
      </div>
      <div :class="$style.items">
        <NuxtLink
          v-for="(item, index) in items"
          :key="item.id"
          external
          :to="item.href"
          :class="$style.item"
          target="_blank"
        >
          <img
            :src="item.image"
            alt="Illustration"
            :style="{ objectPosition: index % 2 ? '0% top' : '83% top' }"
          />
          <div :class="$style.item__content">
            <h2 :class="['title-md', $style.item__title]">
              {{ item.title }}
            </h2>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { SharedBlog } from '~/types'

defineOptions({ name: 'TheBlog' })

defineProps<SharedBlog>()
</script>

<style lang="scss" module>
.blog {
  position: relative;
}

.header {
  display: grid;
  gap: 16px;
  margin-bottom: 64px;
  text-align: center;

  @include media($to: sm) {
    margin-bottom: 42px;
  }
}

.description {
  max-width: 600px;
  margin-inline: auto;
  color: var(--primary-light-color);
}

.items {
  display: grid;
  gap: 30px;

  @include media($from: sm) {
    grid-template-columns: repeat(2, 1fr);
  }

  @include media($to: sm) {
    max-width: 500px;
    margin-inline: auto;
  }
}

.item {
  position: relative;
  overflow: hidden;
  color: #ffffff;
  border-radius: 8px;
  aspect-ratio: 0.925/1;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    inset: 0;
  }

  &__content {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 62px 48px;
    overflow: auto;
    background-image: linear-gradient(
      180deg,
      rgba(24, 59, 86, 0) 0%,
      rgba(22, 49, 70, 0.45) 45%,
      #152532 100%
    );
    inset: 0;

    @include media($to: md) {
      padding: 32px;
    }
  }
}
</style>
