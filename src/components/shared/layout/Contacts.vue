<template>
  <div v-if="source" :class="$style.contacts">
    <div class="container">
      <div :class="$style.header">
        <h2 class="title-md">{{ source.title }}</h2>
        <p :class="['text', $style.description]">
          {{ source.description }}
        </p>
      </div>
      <SharedLayoutContactsDetails
        v-if="source"
        :phone="source.phone"
        :phone-label="source.phone_label"
        :email="source.email"
        :email-label="source.email_label"
      />
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
</style>
