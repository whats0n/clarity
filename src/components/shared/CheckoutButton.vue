<template>
  <button :type="type" :class="$style.button">
    <slot />
  </button>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    type?: 'button' | 'submit'
  }>(),
  { type: 'button' },
)
</script>

<style lang="scss" module>
.button {
  padding-inline: 60px;
  height: 56px;
  color: #fff;
  font-weight: 700;
  font-size: 18px;
  line-height: normal;
  text-align: center;
  background: var(--color);
  border: 1px solid var(--color);
  border-radius: 8px;
  transition:
    color 0.3s,
    background-color 0.3s;
  --color: var(--success-color);

  &:enabled {
    @include hover {
      color: var(--success-color);
      background: #fff;
    }
  }

  &:disabled {
    --color: #ddd7e1;
    cursor: not-allowed;
  }
}
</style>
