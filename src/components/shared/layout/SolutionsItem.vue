<template>
  <NuxtLink :to="href" :class="$style.item">
    <div :class="$style.figure">
      <img :src="image" alt="Illustration" :class="$style.image" />
    </div>
    <div :class="$style.content">
      <div :class="$style.title">{{ title }}</div>
      <div :class="$style.text">{{ text }}</div>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
defineProps<{
  href: string
  image: string
  title: string
  text: string
}>()
</script>

<style lang="scss" module>
.item {
  display: grid;
  align-items: center;

  @include media($from: md) {
    grid-template-columns: auto 1fr;
    gap: 28px;
  }

  @include hover {
    .title {
      text-decoration: underline;
    }
  }
}

.figure {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 107px;
  padding: 8px;
  background: #e0f4fa;
  border: 1px solid #c0edfa;
  border-radius: 17px;
  aspect-ratio: 1/1;

  @include media($to: md) {
    display: none;
  }
}

.image {
  max-width: 100%;
  max-height: 100%;
}

.title {
  margin-bottom: 6px;
  color: var(--accent-color);
  font-weight: 600;
  font-size: 19px;
  line-height: 25px;

  @include media($to: md) {
    font-size: 16px;
    line-height: 20px;
  }
}

.text {
  color: var(--primary-light-color);
  font-size: 14px;
  font-family: var(--font-secondary);
  line-height: 20px;
}
</style>
