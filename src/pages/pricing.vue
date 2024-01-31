<template>
  <div :class="$style.page">
    <SharedPricingHero :class="$style.hero" />
    <SharedBenefits :class="$style.benefits" />
    <SharedFaq :class="$style.faq" />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  title: 'Pricing',
})
</script>

<style lang="scss" module>
.page {
  position: relative;
}

.hero {
  margin-bottom: 110px;
}

.benefits {
  margin-bottom: 147px;
}

.faq {
  margin-bottom: 144px;
}
</style>
