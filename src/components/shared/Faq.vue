<template>
  <div :class="$style.faq">
    <div :class="['container', $style.container]">
      <h2 :class="['title-md', $style.title]">{{ title }}</h2>
      <div :class="$style.items">
        <UiAccordion v-for="item in items" :key="item.id" :title="item.title">
          {{ item.description }}
        </UiAccordion>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { SharedFaq } from '~/types'

defineOptions({ name: 'TheFAQ' })

defineProps<SharedFaq>()
</script>

<style lang="scss" module>
.faq {
  position: relative;
}

.title {
  margin-bottom: 64px;
  text-align: center;
}

.items {
  display: grid;
  gap: 16px;
  max-width: 960px;
  margin-inline: auto;
}
</style>
