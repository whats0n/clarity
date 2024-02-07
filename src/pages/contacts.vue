<template>
  <div :class="$style.page">
    <div :class="$style.main">
      <div :class="['container', $style.container]">
        <h1 :class="['title-lg', $style.title]">Contact our our team</h1>
        <SharedLayoutContactsDetails
          v-if="source"
          :phone="source.phone"
          :phone-label="source.phone_label"
          :email="source.email"
          :email-label="source.email_label"
        />
      </div>
      <svg viewBox="0 0 1440 175" :class="$style.wave">
        <g transform="translate(0, -565)" fill="#f9fbfe" fill-rule="evenodd">
          <path
            d="M1440,740 L0,740 L0,565 C240,618.333333 480,645 720,645 C960,645 1200,618.333333 1440,565 L1440,740 Z"
          />
        </g>
      </svg>
    </div>
    <div :class="$style.content">
      <form :class="$style.form">
        <div :class="$style.form__grid">
          <UiFormField label="Your name*" :class="$style.form__field">
            <UiInput v-model="name" placeholder="Type your name" />
          </UiFormField>
          <UiFormField label="Contact email *" :class="$style.form__field">
            <UiInput v-model="email" placeholder="you@example.com" />
          </UiFormField>
          <UiFormField label="Phone" :class="$style.form__field">
            <UiInput v-model="phone" placeholder="123-456-7890" />
          </UiFormField>
          <UiFormField label="Interest" :class="$style.form__field">
            <UiSelect
              v-model="interest"
              :options="interestOptions"
              text-field="text"
              key-field="id"
              placeholder="Select your interest"
            />
          </UiFormField>
          <UiFormField
            label="Your message*"
            :class="[$style.form__field, $style.form__field_wide]"
          >
            <UiTextarea v-model="message" placeholder="Type your message…" />
          </UiFormField>
        </div>
        <div :class="$style.form__meta">
          By submitting this form you agree to our terms and conditions and our
          Privacy Policy which explains how we may collect, use and disclose
          your personal information including to third parties.
        </div>
        <div :class="$style.form__footer">
          <UiButton type="submit" text="Submit" />
        </div>
      </form>
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

definePageMeta({
  title: 'Contacts',
  disableContacts: true,
})

const { data } = await useAsyncQuery<{
  contactsSection: ContactsSectionEntityResponse
}>(GET_CONTACTS_SECTION)

const source = computed<Maybe<ContactsSection> | undefined>(
  () => data.value?.contactsSection?.data?.attributes,
)

const name = ref<string>('')
const email = ref<string>('')
const phone = ref<string>('')
const message = ref<string>('')

type Option = {
  id: number
  text: string
}

const interest = ref<Option | null>(null)

const interestOptions = computed<Option[]>(() => [
  { id: 1, text: 'Sales' },
  { id: 2, text: 'Interest 1' },
  { id: 3, text: 'Interest 2' },
  { id: 4, text: 'Interest 3' },
])
</script>

<style lang="scss" module>
.main {
  background: #e0f4fa;
}

.container {
  padding-block: 60px 36px;
}

.title {
  margin-bottom: 60px;
  text-align: center;
}

.wave {
  display: block;
  width: 100%;
  margin-bottom: calc(-175 / 1440 * 100%);
}

.form {
  position: relative;
  max-width: 960px;
  padding: 64px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 10px 35px 0 rgba(0, 0, 0, 0.03);
  margin-inline: auto;

  &__grid {
    display: grid;
    gap: 32px 30px;

    @include media($from: sm) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &__field {
    min-width: 0;

    &_wide {
      @include media($from: sm) {
        grid-column: 1/3;
      }
    }
  }

  &__meta {
    margin-top: 16px;
    color: var(--primary-light-color);
    font-size: 16px;
    font-family: var(--font-secondary);
    line-height: 28px;
  }

  &__footer {
    padding: 32px 27px 0;
  }
}
</style>
