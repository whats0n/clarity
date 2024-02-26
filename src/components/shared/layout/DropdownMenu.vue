<template>
  <div
    ref="containerRef"
    :class="$style.menu"
    :style="{
      '--angle-left': left,
    }"
  >
    <slot name="control" />
    <div ref="dropdownRef" :class="$style.dropdown">
      <div :class="$style.wrapper">
        <div :class="$style.inner">
          <slot name="dropdown" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const containerRef = ref<HTMLElement | null>(null)
const dropdownRef = ref<HTMLElement | null>(null)

const left = computed<string>(() => {
  const control = containerRef.value?.querySelector(':scope > *')

  if (!control || !dropdownRef.value) return `20px`

  const { left: controlLeft, width: controlWidth } =
    control.getBoundingClientRect()
  const { left: dropdownLeft } = dropdownRef.value.getBoundingClientRect()

  return `${controlLeft - dropdownLeft + controlWidth / 2}px`
})
</script>

<style lang="scss" module>
.dropdown {
  position: absolute;
  top: calc(100% - 14px);
  right: 30px;
  width: var(--menu-width);
  padding-top: var(--transparent-space);
  visibility: hidden;
  opacity: 0;
  transition:
    opacity 0.3s,
    visibility 0.3s;
  --transparent-space: 30px;
  --border-radius: 8px;
  --background-color: #fff;
}

.wrapper {
  border-radius: var(--border-radius);
  box-shadow: 0 16px 49px 10px rgba(0, 0, 0, 0.05);
}

.inner {
  position: relative;
  z-index: 1;
  background: var(--background-color);
  border-radius: var(--border-radius);

  &:before {
    position: absolute;
    bottom: calc(100% - var(--half));
    left: calc(var(--angle-left) - var(--half));
    z-index: -1;
    width: var(--size);
    height: var(--size);
    background: var(--background-color);
    transform: rotate(45deg);
    content: '';
    --size: 12px;
    --half: calc(var(--size) / 2);
  }
}

.menu {
  @include hover {
    .dropdown {
      visibility: visible;
      opacity: 1;
    }
  }
}
</style>
