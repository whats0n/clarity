<template>
  <div :class="$style.explore">
    <div class="container">
      <div :class="$style.header">
        <p class="label">Explore</p>
        <h2 class="title-md">Quench your thirst, drink with confidence</h2>
        <p :class="['text', $style.description]">
          We share common trends, strategies ideas, opinions, short & long
          stories from the team behind company.
        </p>
      </div>
      <div :class="$style.items">
        <div :class="$style.item">
          <img
            src="/images/explore-01.png"
            alt="Illustration"
            style="object-position: 83% top"
          />
          <div :class="$style.item__content">
            <h2 :class="['title-md', $style.item__title]">
              Want to see what is in your water?
            </h2>
          </div>
        </div>
        <div :class="$style.item">
          <img
            src="/images/explore-02.png"
            alt="Illustration"
            style="object-position: 0% top"
          />
          <div :class="$style.item__content">
            <h2 :class="['title-md', $style.item__title]">
              Want to take the water quiz to find the right product?
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineOptions({ name: 'TheExplore' })
</script>

<style lang="scss" module>
.explore {
  position: relative;
}

.header {
  display: grid;
  gap: 16px;
  margin-bottom: 64px;
  text-align: center;

  @include media($to: sm) {
    margin-bottom: 42px;
  }
}

.description {
  max-width: 600px;
  margin-inline: auto;
  color: var(--primary-light-color);
}

.items {
  display: grid;
  gap: 30px;

  @include media($from: sm) {
    grid-template-columns: repeat(2, 1fr);
  }

  @include media($to: sm) {
    max-width: 500px;
    margin-inline: auto;
  }
}

.item {
  position: relative;
  overflow: hidden;
  color: #ffffff;
  border-radius: 8px;
  aspect-ratio: 0.925/1;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    inset: 0;
  }

  &__content {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 62px 48px;
    overflow: auto;
    background-image: linear-gradient(
      180deg,
      rgba(24, 59, 86, 0) 0%,
      rgba(22, 49, 70, 0.45) 45%,
      #152532 100%
    );
    inset: 0;

    @include media($to: md) {
      padding: 32px;
    }
  }
}
</style>
