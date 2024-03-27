<template>
  <div :class="$style.contents">
    <SharedPrivacyPolicyHeading level="1">
      TABLE OF CONTENTS
    </SharedPrivacyPolicyHeading>

    <ul>
      <li v-for="(link, index) in links" :key="link.href">
        <SharedPrivacyPolicyLink :href="link.href">
          {{ index + 1 }}. {{ link.text }}
        </SharedPrivacyPolicyLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const links = [
  { href: '#services', text: 'OUR SERVICES' },
  { href: '#ip', text: 'INTELLECTUAL PROPERTY RIGHTS' },
  { href: '#userreps', text: 'USER REPRESENTATIONS' },
  { href: '#purchases', text: 'PURCHASES AND PAYMENT' },
  { href: '#returnyes', text: 'POLICY' },
  { href: '#prohibited', text: 'PROHIBITED ACTIVITIES' },
  { href: '#ugc', text: 'USER GENERATED CONTRIBUTIONS' },
  { href: '#license', text: 'CONTRIBUTION LICENSE' },
  { href: '#thirdparty', text: 'THIRD-PARTY WEBSITES AND CONTENT' },
  { href: '#sitemanage', text: 'SERVICES MANAGEMENT' },
  { href: '#ppno', text: 'PRIVACY POLICY' },
  { href: '#terms', text: 'TERM AND TERMINATION' },
  { href: '#modifications', text: 'MODIFICATIONS AND INTERRUPTIONS' },
  { href: '#law', text: 'GOVERNING LAW' },
  { href: '#disputes', text: 'DISPUTE RESOLUTION' },
  { href: '#corrections', text: 'CORRECTIONS' },
  { href: '#disclaimer', text: 'DISCLAIMER' },
  { href: '#liability', text: 'LIMITATIONS OF LIABILITY' },
  { href: '#indemnification', text: 'INDEMNIFICATION' },
  { href: '#userdata', text: 'USER DATA' },
  {
    href: '#electronic',
    text: 'ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES',
  },
  { href: '#california', text: 'CALIFORNIA USERS AND RESIDENTS' },
  { href: '#misc', text: 'MISCELLANEOUS' },
  { href: '#contact', text: 'CONTACT US' },
]
</script>

<style lang="scss" module>
.contents {
  display: grid;
  gap: 16px;

  ul {
    font-size: 14px;
  }
}
</style>
