<template>
  <div :class="$style.item">
    <div
      v-if="image"
      :class="[
        $style.figure,
        $style[`figure_${imageFit}`],
        !noGradient && $style.figure_gradient,
      ]"
    >
      <img
        :src="image"
        :class="$style.image"
        :style="{ objectFit: imageFit }"
      />
    </div>
    <div v-else :class="$style.figure">
      <slot name="figure" />
    </div>
    <div :class="$style.content">
      <div v-if="badge" :class="$style.badge">
        {{ badge }}
      </div>
      <div :class="$style.title">
        {{ title }}
      </div>
      <div :class="$style.meta">
        {{ meta }}
      </div>
    </div>
    <div :class="$style.info">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    image?: string
    imageFit?: 'contain' | 'cover'
    badge?: string
    title: string
    meta: string
    noGradient?: boolean
  }>(),
  { image: '', imageFit: 'cover', badge: '', noGradient: false },
)
</script>

<style lang="scss" module>
.item {
  display: grid;
  grid-template-columns: 85px 1fr auto;
  gap: 30px;
  align-items: center;
  color: #204f60;

  @include media($to: sm) {
    grid-template-columns: 85px 1fr;
  }
}

.figure {
  position: relative;
  overflow: hidden;
  border-radius: 16px;

  &_cover.figure_gradient:before {
    position: absolute;
    background-image: linear-gradient(
      180deg,
      rgba(24, 59, 86, 0) 0%,
      #152532 100%
    );
    content: '';
    inset: 0;
  }
}

.image {
  display: block;
  width: 100%;
  aspect-ratio: 1/1;
}

.title {
  font-weight: 700;
  font-size: 15px;
  line-height: 16px;
  letter-spacing: -0.17px;
}

.meta {
  color: #a2a2a2;
  font-size: 13px;
  font-family: var(--font-secondary);
  letter-spacing: -0.14px;
}

.badge {
  display: inline-block;
  margin-bottom: 9px;
  margin-left: -10px;
  padding: 3px 10px;
  font-weight: 600;
  font-size: 10px;
  line-height: 13px;
  letter-spacing: 0.49px;
  text-transform: uppercase;
  vertical-align: top;
  background: #cbeeec;
  border-radius: 9px;
}

.info {
  @include media($to: sm) {
    grid-column: 1/3;
  }
}
</style>
