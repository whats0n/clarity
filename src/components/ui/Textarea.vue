<template>
  <textarea
    v-model="value"
    :class="[$style.textarea, invalid && $style.textarea_invalid]"
  />
</template>

<script lang="ts" setup>
defineOptions({ name: 'UiTextarea' })

const value = defineModel<string>()

defineProps<{ invalid?: boolean }>()
</script>

<style lang="scss" module>
.textarea {
  width: 100%;
  height: 137px;
  padding: 18px 20px;
  color: var(--primary-color);
  font-weight: 600;
  font-size: 16px;
  font-family: var(--font-secondary);
  line-height: normal;
  line-height: 18px;
  background: #ffffff;
  border: 1px solid #c3cad9;
  border-radius: 8px;
  outline: 2px solid transparent;
  outline-offset: -2px;
  transition:
    border-color 0.3s,
    outline-color 0.3s;
  -webkit-appearance: none;
  appearance: none;
  resize: none;

  &::placeholder {
    color: #959ead;
    opacity: 1;
  }

  @include hover {
    outline-color: var(--accent-color);
  }

  &_invalid {
    border-color: var(--danger-color);
  }
}
</style>
