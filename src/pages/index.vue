<template>
  <div :class="$style.page">
    <SharedHomeHero :class="$style.hero" />
    <SharedServices :class="$style.services" />
    <SharedExplore :class="$style.explore" />
    <div :class="$style.steps">
      <SharedSteps />
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  title: 'Home',
})
</script>

<style lang="scss" module>
.hero {
  margin-bottom: 150px;
}

.services {
  margin-bottom: 144px;
}

.explore {
  margin-bottom: 55px;
}

.steps {
  padding-block: 105px 40px;
  margin-bottom: 52px;
  background: #fff;
}
</style>
