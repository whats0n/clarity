<template>
  <div :class="$style.container">
    <button
      type="button"
      :class="[$style.button, opened && $style.button_opened]"
      @click="opened = !opened"
    >
      {{ title }}
      <span :class="[$style.icon, opened && $style.icon_opened]" />
    </button>
    <UiCollapsable :opened="opened">
      <div :class="['text', $style.content]">
        <slot />
      </div>
    </UiCollapsable>
  </div>
</template>

<script lang="ts" setup>
defineOptions({ name: 'BaseAccordion' })

defineProps<{
  title: string
}>()

const opened = ref<boolean>(false)
</script>

<style lang="scss" module>
.container {
  padding: 32px;
  background: #ffffff;
  border: 1px solid #e5eaf4;
  border-radius: 8px;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.03);

  @include media($to: xs) {
    padding: 16px;
  }
}

.button {
  position: relative;
  width: 100%;
  padding: 3px 36px 3px 0;
  color: color(--primary-color);
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.2px;
  text-align: left;
  transition: color 0.3s;

  &_opened {
    color: var(--accent-color);
  }

  @include hover {
    color: var(--accent-color);
  }
}

.icon {
  position: absolute;
  top: 8px;
  right: 0;
  width: 14px;
  height: 14px;

  &:before,
  &:after {
    position: absolute;
    top: calc(50% - 7px);
    left: calc(50% - 1px);
    width: 2px;
    height: 14px;
    background: currentColor;
    border-radius: 1px;
    transition: transform 0.3s;
    content: '';
  }

  &:after {
    transform: rotate(90deg);
  }

  &_opened {
    &:before {
      transform: rotate(90deg);
    }
  }
}

.content {
  padding-top: 9px;
  color: var(--primary-light-color);
}
</style>
