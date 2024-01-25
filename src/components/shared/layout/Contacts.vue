<template>
  <div :class="$style.contacts">
    <div class="container">
      <div :class="$style.header">
        <h2 class="title-md">Still have a questions?</h2>
        <p :class="['text', $style.description]">
          If you cannot find answer to your question in our FAQ, you can always
          contact us. We wil answer to you shortly!
        </p>
      </div>
      <div :class="$style.row">
        <div :class="$style.item">
          <UiIcon name="chat" :class="$style.item__icon" />
          <a href="tel:+16467865060" :class="$style.item__value">
            +1 (646) 786-5060
          </a>
          <div :class="$style.item__label">Text or call us</div>
        </div>
        <div :class="$style.item">
          <UiIcon name="mail" :class="$style.item__icon" />
          <a href="mailto:help@clairtywater.com" :class="$style.item__value">
            help@clairtywater.com
          </a>
          <div :class="$style.item__label">Email works too!</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineOptions({ name: 'TheContacts' })
</script>

<style lang="scss" module>
.contacts {
  position: relative;
}

.header {
  margin-bottom: 64px;
  text-align: center;
}

.description {
  max-width: 610px;
  margin-top: 16px;
  color: var(--primary-light-color);
  margin-inline: auto;
}

.row {
  display: grid;
  gap: 30px;

  @include media($from: sm) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 960px;
    margin-inline: auto;
  }
}

.item {
  display: grid;
  justify-items: center;
  padding: 36px 32px 40px;
  text-align: center;
  background: #ffffff;
  border: 1px solid #e5eaf4;
  border-radius: 8px;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.03);

  @include media($to: xs) {
    padding: 32px 24px;
  }

  &__icon {
    width: 48px;
    margin-bottom: 19px;
    color: var(--accent-color);

    @include media($to: xs) {
      margin-bottom: 16px;
    }
  }

  &__value {
    margin-bottom: 7px;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.2px;

    @include media($to: xs) {
      font-size: 16px;
      line-height: 20px;
    }
  }

  &__label {
    color: var(--primary-light-color);
    font-size: 16px;
    font-family: var(--font-secondary);
    line-height: 28px;

    @include media($to: xs) {
      font-size: 14px;
      line-height: 20px;
    }
  }
}
</style>
