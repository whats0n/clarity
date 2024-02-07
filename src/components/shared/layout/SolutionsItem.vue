<template>
  <NuxtLink :to="href" :class="$style.item">
    <div :class="$style.figure">
      <UiIcon v-if="wifi" name="wifi" :class="$style.wifi" />
      <img :src="image" alt="Illustration" :class="$style.image" />
    </div>
    <div :class="$style.content">
      <div v-if="soon" :class="$style.meta">Coming soon</div>
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
  wifi?: boolean
  soon?: boolean
}>()
</script>

<style lang="scss" module>
.item {
  display: grid;
  align-items: center;

  @include media($from: md) {
    grid-template-columns: auto 1fr;
    gap: 42px;
  }

  @include hover {
    .title {
      color: var(--accent-color);
    }
  }
}

.figure {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 76px;
  background: #f8fdff;
  border: 1px solid #c7b7ff;
  border-radius: 17px;
  aspect-ratio: 1/1;

  @include media($to: md) {
    display: none;
  }
}

.image {
  max-width: calc(44 / 76 * 100%);
  max-height: calc(44 / 76 * 100%);
}

.wifi {
  position: absolute;
  top: 17px;
  right: 13px;
  width: 14px;
  color: var(--success-color);
}

.title {
  margin-bottom: 6px;
  color: #32324d;
  font-weight: 600;
  font-size: 19px;
  line-height: 25px;
  transition: color 0.3s;

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

.meta {
  color: #ac57f5;
  font-weight: 700;
  font-size: 10px;
  line-height: 13px;
  text-transform: uppercase;
}
</style>
