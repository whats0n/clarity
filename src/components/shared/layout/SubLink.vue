<template>
  <NuxtLink
    :to="href"
    :external="external"
    :target="external ? '_blank' : undefined"
    :class="$style.link"
  >
    <UiIcon v-if="icon" :name="icon" :class="$style.icon" />
    <span :class="$style.text">
      {{ text }}
    </span>
  </NuxtLink>
</template>

<script lang="ts" setup>
defineProps<{
  external?: boolean
  href: string
  text: string
  icon?: string
}>()
</script>

<style lang="scss" module>
.link {
  display: inline-block;
  color: #32324d;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  vertical-align: top;
  transition: color 0.3s;

  @include hover {
    color: var(--accent-color);
  }

  &:has(.icon) {
    display: inline-grid;
    grid-template-columns: auto 1fr;
    gap: 6px;
  }
}

.icon {
  width: 25px;
  fill: #87add2;
}

.text {
  padding-block: 3px 2px;
}
</style>
