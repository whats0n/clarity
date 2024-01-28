<template>
  <div :class="$style.figures">
    <img
      src="/images/inner-hero-figure.svg"
      alt="Decoration figures"
      :class="$style.decoration"
    />
    <img :src="primary" alt="Illustration" :class="$style.primary" />
    <img :src="secondary" alt="Illustration" :class="$style.secondary" />
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  primary: string
  secondary: string
}>()
</script>

<style lang="scss" module>
.figures {
  position: relative;
  aspect-ratio: var(--width) / var(--height);
  --width: 822;
  --height: 770;
}

.primary {
  position: absolute;
  top: calc(20 / var(--height) * 100%);
  right: 0;
  width: calc(359 / var(--width) * 100%);
  aspect-ratio: 359/434;
  border-radius: 8px;
}

.secondary {
  position: absolute;
  bottom: calc(126 / var(--height) * 100%);
  left: calc(80 / var(--width) * 100%);
  width: calc(343 / var(--width) * 100%);
  aspect-ratio: 343/434;
  border-radius: 8px;
}

.decoration {
  position: absolute;
  inset-block: 0;
  left: 0;
  height: 100%;
}
</style>
