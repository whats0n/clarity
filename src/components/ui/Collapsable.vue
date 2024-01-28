<template>
  <Transition
    :enter-from-class="$style.collapsable_inactive"
    :enter-active-class="$style.collapsable_active"
    :leave-active-class="$style.collapsable_active"
    :leave-to-class="$style.collapsable_inactive"
  >
    <div v-if="opened" :class="$style.collapsable">
      <div>
        <slot />
      </div>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
defineOptions({ name: 'CollapsableView' })

defineProps<{ opened: boolean }>()
</script>

<style lang="scss" module>
.collapsable {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.3s ease;

  &_active {
    overflow: hidden;
  }

  &_inactive {
    grid-template-rows: 0fr;
  }

  > div {
    min-height: 0;
  }
}
</style>
