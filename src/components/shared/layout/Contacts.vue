<template>
  <div v-if="source" :class="$style.contacts">
    <div class="container">
      <div :class="$style.header">
        <h2 class="title-md">{{ source.title }}</h2>
        <p :class="['text', $style.description]">
          {{ source.description }}
        </p>
      </div>
      <div :class="$style.row">
        <div :class="$style.item">
          <UiIcon name="chat" :class="$style.item__icon" />
          <a :href="phoneLink" :class="$style.item__value">
            {{ source.phone }}
          </a>
          <div :class="$style.item__label">{{ source.phone_label }}</div>
        </div>
        <div :class="$style.item">
          <UiIcon name="mail" :class="$style.item__icon" />
          <a :href="emailLink" :class="$style.item__value">
            {{ source.email }}
          </a>
          <div :class="$style.item__label">{{ source.email_label }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import GET_CONTACTS_SECTION from '~/graphql/queries/GetContactsSection.gql'
import type {
  ContactsSection,
  ContactsSectionEntityResponse,
  Maybe,
} from '~/graphql/types'

defineOptions({ name: 'TheContacts' })

const { data } = await useAsyncQuery<{
  contactsSection: ContactsSectionEntityResponse
}>(GET_CONTACTS_SECTION)

const source = computed<Maybe<ContactsSection> | undefined>(
  () => data.value?.contactsSection?.data?.attributes,
)

const phoneLink = computed<string>(() =>
  source.value?.phone
    ? `tel:${source.value.phone.replace(/(?<!^)\+|[^\d+]+/g, '')}`
    : '',
)

const emailLink = computed<string>(() =>
  source.value?.email ? `mailto:${source.value?.email}` : '',
)
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
