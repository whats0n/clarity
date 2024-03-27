<template>
  <div :class="$style.bodyText">
    <slot />
  </div>
</template>

<style lang="scss" module>
.bodyText {
  color: #595959;
  font-size: 14px;
}
</style>
