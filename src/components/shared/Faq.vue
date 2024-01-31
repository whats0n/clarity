<template>
  <div :class="$style.faq">
    <div :class="['container', $style.container]">
      <h2 :class="['title-md', $style.title]">Frequently asked questions</h2>
      <div :class="$style.items">
        <UiAccordion v-for="item in items" :key="item.id" :title="item.title">
          {{ item.text }}
        </UiAccordion>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { FaqItem } from '~/types'

defineOptions({ name: 'TheFAQ' })

const items: FaqItem[] = [
  {
    id: 1,
    title: 'How do I pay for the Essentials or Premium plan?',
    text: 'You can pay with a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle.',
  },
  {
    id: 2,
    title:
      'Can I cancel my Essentials or Premium plan subscription at any time?',
    text: 'You can pay with a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle.',
  },
  {
    id: 3,
    title: 'We need to add new users to our team. How will that be billed?',
    text: 'You can pay with a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle.',
  },
  {
    id: 4,
    title:
      'My team wants to cancel its subscription. How do we do that? Can we get a refund?',
    text: 'You can pay with a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle.',
  },
  {
    id: 5,
    title:
      'Do you offer discounts for non-profit organizations or educational institutions?',
    text: 'You can pay with a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle.',
  },
]
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
