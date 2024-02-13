<template>
  <div :class="$style.page">
    <div :class="$style.main">
      <div :class="['container', $style.container]">
        <div :class="['dots', $style.dotsBlue]" />
        <div :class="['dots', $style.dotsWhite]" />
        <h1 :class="['title-lg', $style.title]">
          {{ contacts.contactsPage?.data?.attributes?.title }}
        </h1>
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
      <form :class="$style.form" @submit.prevent="submit">
        <div :class="$style.form__grid">
          <UiFormField
            v-slot="{ invalid }"
            label="Your name*"
            :error="errors.name"
            :class="$style.form__field"
          >
            <UiInput
              v-model="name"
              v-bind="nameAttributes"
              :invalid="invalid"
              placeholder="Type your name"
            />
          </UiFormField>
          <UiFormField
            v-slot="{ invalid }"
            label="Contact email *"
            :error="errors.email"
            :class="$style.form__field"
          >
            <UiInput
              v-model="email"
              v-bind="emailAttributes"
              :invalid="invalid"
              placeholder="you@example.com"
            />
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
            v-slot="{ invalid }"
            label="Your message*"
            :error="errors.message"
            :class="[$style.form__field, $style.form__field_wide]"
          >
            <UiTextarea
              v-model="message"
              v-bind="messageAttributes"
              :invalid="invalid"
              placeholder="Type your message…"
            />
          </UiFormField>
        </div>
        <div :class="$style.form__meta">
          {{ contacts.contactsPage?.data?.attributes?.footnote }}
        </div>
        <div :class="$style.form__footer">
          <UiButton type="submit" text="Submit" :processing="loading" />
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import * as yup from 'yup'
import GET_CONTACTS_SECTION from '~/graphql/queries/GetContactsSection.gql'
import GET_CONTACTS_PAGE from '~/graphql/queries/GetContactsPage.gql'
import CREATE_CONTACT from '~/graphql/mutations/CreateContact.gql'
import {
  Enum_Contact_Status as EnumContactStatus,
  type ContactsSection,
  type Maybe,
  type Mutation,
  type Query,
} from '~/graphql/types'

definePageMeta({
  layout: 'contacts',
})

const [{ data }, { data: contacts, error }] = await Promise.all([
  useAsyncQuery<Pick<Query, 'contactsSection'>>(GET_CONTACTS_SECTION),
  useAsyncQuery<Pick<Query, 'contactsPage'>>(GET_CONTACTS_PAGE),
])

if (!contacts.value || error.value) showError({ statusCode: 404 })

useSeo(contacts.value.contactsPage?.data?.attributes?.seo)

const source = computed<Maybe<ContactsSection> | undefined>(
  () => data.value?.contactsSection?.data?.attributes,
)

const { errors, defineField, handleSubmit } = useForm({
  validationSchema: yup.object({
    name: yup
      .string()
      .trim('Please enter your name')
      .required('Please enter your name'),
    message: yup
      .string()
      .trim('Please enter a message')
      .required('Please enter a message'),
    email: yup
      .string()
      .email('Please enter a valid email address')
      .trim('Please enter your email address')
      .required('Please enter your email address'),
  }),
})

const [name, nameAttributes] = defineField('name', {
  validateOnModelUpdate: false,
})
const [email, emailAttributes] = defineField('email', {
  validateOnModelUpdate: false,
})
const [message, messageAttributes] = defineField('message', {
  validateOnModelUpdate: false,
})

const phone = ref<string>('')

type Option = {
  id: string
  text: string
}

const interest = ref<Option | null>(null)

const interestOptions = computed<Option[]>(() =>
  (contacts.value.contactsPage?.data?.attributes?.interest || []).reduce<
    Option[]
  >((result, item) => {
    if (item)
      result.push({
        id: item.id,
        text: item.text,
      })

    return result
  }, []),
)

const { mutate: createContact, loading } =
  useMutation<Pick<Mutation, 'createContact'>>(CREATE_CONTACT)

const toast = useToast()

const submit = handleSubmit(async () => {
  if (loading.value) return

  try {
    await createContact({
      name: name.value.trim(),
      email: email.value.trim(),
      message: message.value.trim(),
      phone: phone.value.trim(),
      interest: interest.value?.text.trim() || '',
      status: EnumContactStatus.New,
    })

    toast.success('Your message has been sent!')
  } catch (e) {
    toast.danger(e instanceof Error ? e.message : 'Something went wrong!')
  }
})
</script>

<style lang="scss" module>
.main {
  background: #e0f4fa;
}

.dotsBlue {
  position: absolute;
  top: 10px;
  left: 21%;
  z-index: -1;
  --dots-x: 4;
  --dots-y: 2;
  --dots-color: #00b8d9;
  --dots-size: 8px;
  --dots-distance: 15px;

  @include media($to: sm) {
    top: -50px;
    left: 30px;
  }
}

.dotsWhite {
  position: absolute;
  top: -20px;
  right: 80px;
  z-index: -1;
  --dots-x: 6;
  --dots-y: 12;
  --dots-color: #fff;
  --dots-size: 8px;
  --dots-distance: 15px;

  @include media($to: sm) {
    display: none;
  }
}

.container {
  position: relative;
  z-index: 1;
  padding-block: 60px 36px;

  @include media($to: sm) {
    padding-top: 0;
  }
}

.title {
  margin-bottom: 60px;
  text-align: center;
  text-wrap: balance;
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

  @include media($to: xs) {
    padding: 48px 24px;
  }

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

    @include media($to: xs) {
      text-align: center;
    }

    > * {
      @include media($to: xs) {
        width: 100%;
        max-width: 260px;
      }
    }
  }
}
</style>
