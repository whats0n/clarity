<template>
  <button :type="type" :class="$style.button">
    <span v-if="processing" :class="$style.loader" />
    <span :class="[$style.content, processing && $style.content_invisible]">
      <slot />
    </span>
  </button>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    type?: 'button' | 'submit'
    processing?: boolean
  }>(),
  { type: 'button', processing: false },
)
</script>

<style lang="scss" module>
.button {
  position: relative;
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

.content_invisible {
  visibility: hidden;
}

.loader {
  position: absolute;
  top: calc(50% - 8px);
  left: calc(50% - 8px);
  width: 16px;
  height: 16px;
  border: 2px solid currentColor;
  border-left-color: transparent;
  border-radius: 50%;
  animation: rotate 0.5s linear infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(1turn);
  }
}
</style>
