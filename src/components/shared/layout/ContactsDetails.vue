<template>
  <div :class="$style.row">
    <div :class="$style.item">
      <UiIcon name="chat" :class="$style.item__icon" />
      <a :href="phoneLink" :class="$style.item__value">
        {{ phone }}
      </a>
      <div :class="$style.item__label">{{ phoneLabel }}</div>
    </div>
    <div :class="$style.item">
      <UiIcon name="mail" :class="$style.item__icon" />
      <a :href="emailLink" :class="$style.item__value">
        {{ email }}
      </a>
      <div :class="$style.item__label">{{ emailLabel }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  phone: string
  phoneLabel: string
  email: string
  emailLabel: string
}>()

const phoneLink = computed<string>(() =>
  props.phone ? `tel:${props.phone.replace(/(?<!^)\+|[^\d+]+/g, '')}` : '',
)

const emailLink = computed<string>(() =>
  props.email ? `mailto:${props.email}` : '',
)
</script>

<style lang="scss" module>
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
