<template>
  <div :class="$style.page">
    <div :class="$style.container">
      <div :class="$style.header">
        <div :class="['title-md', $style.title]">
          Whoops! That page doesn’t exist.
        </div>
        <UiButton to="/" text="Back to home" />
      </div>
      <img src="/images/404.png" :class="$style.image" />
    </div>
  </div>
</template>

<style lang="scss" module>
.page {
  min-height: 100vh;
  min-height: 100dvh;
  padding-top: 48px;
  background: #fff;
}

.container {
  display: grid;
  max-width: 1365px;
  margin-inline: auto;

  > * {
    @include media($from: sm) {
      grid-row: 1 / 2;
      grid-column: 1 / 2;
    }
  }
}

.image {
  width: 100%;
}

.header {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  justify-content: flex-start;
  padding-top: 48px;
  text-align: center;
}

.title {
  text-wrap: balance;
}
</style>
