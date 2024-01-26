<template>
  <NuxtLink external :to="to" :class="$style.link">
    {{ text }}
    <UiFaIcon :icon="['fas', 'arrow-right']" :class="$style.link__icon" />
  </NuxtLink>
</template>

<script lang="ts" setup>
import type { NuxtLinkProps } from 'nuxt/app'

defineProps<{
  to: NuxtLinkProps['to']
  text: string
}>()
</script>

<style lang="scss" module>
.link {
  display: inline-flex;
  gap: 10px;
  align-items: center;
  color: var(--accent-color);
  font-size: 18px;
  line-height: 24px;
  vertical-align: top;

  &__icon {
    font-size: calc(14 / 18 * 1em);
  }
}
</style>
