<template>
  <input v-model="value" :class="$style.input" />
</template>

<script lang="ts" setup>
defineOptions({ name: 'UiInput' })

const value = defineModel<string>()
</script>

<style lang="scss" module>
.input {
  width: 100%;
  height: 56px;
  color: var(--primary-color);
  font-weight: 600;
  font-size: 16px;
  font-family: var(--font-secondary);
  line-height: normal;
  background: #ffffff;
  border: 1px solid #c3cad9;
  border-radius: 8px;
  padding-inline: 20px;
  outline: 2px solid transparent;
  outline-offset: -2px;
  transition:
    border-color 0.3s,
    outline-color 0.3s;
  -webkit-appearance: none;
  appearance: none;

  &::placeholder {
    color: #959ead;
    opacity: 1;
  }

  @include hover {
    outline-color: var(--accent-color);
  }
}
</style>
