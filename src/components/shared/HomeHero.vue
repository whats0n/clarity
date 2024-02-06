<template>
  <div :class="$style.hero">
    <div :class="['container', $style.container]">
      <div :class="$style.circle" />
      <div :class="$style.content">
        <div :class="['dots', $style.dotsBlue]" />
        <h1 :class="['title-lg', $style.title]">
          {{ title }}
        </h1>
        <div :class="$style.buttons">
          <div :class="['dots', $style.dotsLight]" />
          <UiButton
            v-for="button in buttons"
            :key="button.id"
            :arrow="button.arrow"
            :external="button.external"
            :ui="button.ui"
            :size="button.size"
            :to="button.to"
            :text="button.text"
          />
        </div>
        <ul :class="$style.list">
          <li v-for="item in list" :key="item.id" :class="$style.list__item">
            <UiFaIcon :icon="['fas', 'check']" :class="$style.list__icon" />
            {{ item.text }}
          </li>
        </ul>
      </div>
      <div :class="$style.figure">
        <div :class="['dots', $style.dotsWhite]" />
        <img :src="image" alt="Drink clear water" :class="$style.image" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { UiButtonLink } from '~/types'

defineProps<{
  title: string
  image: string
  list: Record<'id' | 'text', string>[]
  buttons: Array<UiButtonLink & { id: string }>
}>()
</script>

<style lang="scss" module>
.hero {
  position: relative;
  overflow: hidden;
  background: rgba(0, 184, 217, 0.1);
}

.container {
  position: relative;
  display: grid;
  padding-top: 40px;

  @include media($from: md) {
    grid-template-columns: 1fr 509px;
  }

  @include media($to: md) {
    gap: 60px;
  }
}

.content {
  @include media($from: md) {
    position: relative;
    z-index: 1;
    padding-top: 110px;
    padding-bottom: 70px;
  }
}

.title {
  margin-bottom: 84px;
  text-wrap: balance;

  @include media($from: md) {
    max-width: 400px;
  }

  @include media($to: md) {
    margin-bottom: 60px;
  }
}

.buttons {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 37px;
  margin-bottom: 53px;

  @include media($from: md) {
    margin-right: -509px;
  }

  @include media($to: md) {
    gap: 24px;
  }

  @include media($to: xs) {
    flex-direction: column;
  }
}

.list {
  display: grid;
  max-width: 560px;
  font-size: 16px;
  font-family: var(--font-secondary);
  line-height: 22px;

  @include media($from: sm) {
    gap: 26px 46px;
  }

  @include media($from: xs, $to: sm) {
    gap: 24px;
  }

  @include media($from: xs) {
    grid-template-columns: repeat(2, 1fr);
  }

  @include media($to: xs) {
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

.figure {
  position: relative;
  align-self: flex-end;
  height: 620px;

  &:before {
    position: absolute;
    right: 50%;
    bottom: 0;
    left: -100vw;
    height: 55px;
    background: #f9fbfe;
    content: '';
  }
}

.image {
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 30% top;
  border-radius: 0 28px 0 28px;
}

.circle {
  position: absolute;
  right: -340px;
  bottom: -125px;
  width: 567px;
  border: 115px solid rgb(255 255 255 / 0.4);
  border-radius: 50%;
  aspect-ratio: 1/1;
}

.dotsWhite {
  position: absolute;
  top: -7px;
  left: -99px;
  --dots-x: 4;
  --dots-y: 12;
  --dots-color: #fff;
  --dots-size: 8px;
  --dots-distance: 15px;
}

.dotsBlue {
  position: absolute;
  --dots-x: 4;
  --dots-y: 2;
  --dots-color: #00b8d9;
  --dots-size: 8px;
  --dots-distance: 15px;

  @include media($from: md) {
    top: 30px;
    left: -7px;
  }

  @include media($to: md) {
    top: -12px;
    left: 10px;
  }
}

.dotsLight {
  position: absolute;
  top: -23px;
  left: 137px;
  --dots-x: 6;
  --dots-y: 7;
  --dots-color: #c0d5fa;
  --dots-size: 6px;
  --dots-distance: 10px;
  z-index: -1;
}
</style>
