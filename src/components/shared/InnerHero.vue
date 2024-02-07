<template>
  <div :class="[$style.hero, ui && $style[`hero_${ui}`]]">
    <div :class="$style.inner">
      <div :class="['container', $style.container]">
        <div :class="$style.figures">
          <SharedInnerHeroPictures
            :dark="ui === 'yellow'"
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
  </div>
</template>

<script lang="ts" setup>
import type { SharedInnerHero } from '~/types'

defineProps<
  SharedInnerHero & {
    ui?: 'yellow'
  }
>()
</script>

<style lang="scss" module>
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
    padding-bottom: 70px;
    padding-left: calc(95 / 650 * 100%);
  }

  @include media($to: md) {
    order: -1;
  }
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

.description {
  font-size: 20px;
  font-family: var(--font-secondary);
  line-height: 36px;

  + .list {
    margin-top: 32px;
  }
}

.title {
  text-wrap: balance;

  + .description {
    margin-top: 24px;
  }

  + .list {
    margin-top: 60px;
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

.figures {
  @include media($from: md) {
    margin-bottom: -170px;
  }
}

.hero {
  position: relative;
  overflow: hidden;
  --background-color: rgb(0 184 217 / 0.1);

  @include media($from: md) {
    padding-bottom: 170px;
  }

  @include media($to: md) {
    margin-bottom: 60px;
    padding-bottom: 60px;
  }

  &:before {
    position: absolute;
    background: var(--background-color);
    content: '';
    inset: 0;

    @include media($from: md) {
      bottom: 170px;
    }
  }

  &_yellow {
    --background-color: rgb(217, 168, 0, 0.1);

    .item__icon {
      color: #3f598a;
    }
  }
}
</style>
