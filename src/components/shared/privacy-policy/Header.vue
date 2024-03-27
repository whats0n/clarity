<template>
  <div :class="$style.header">
    <div :class="$style.main">
      <SharedPrivacyPolicyTitle> TERMS OF USE </SharedPrivacyPolicyTitle>
      <SharedPrivacyPolicySubtitle>
        Last updated March 25, 2024
      </SharedPrivacyPolicySubtitle>
    </div>

    <SharedPrivacyPolicyHeading level="1">
      AGREEMENT TO OUR LEGAL TERMS
    </SharedPrivacyPolicyHeading>

    <SharedPrivacyPolicyBodyText>
      The Services are intended for users who are at least 18 years old. Persons
      under the age of 18 are not permitted to use or register for the Services.
    </SharedPrivacyPolicyBodyText>
    <SharedPrivacyPolicyBodyText>
      We recommend that you print a copy of these Legal Terms for your records.
    </SharedPrivacyPolicyBodyText>
    <SharedPrivacyPolicyBodyText>
      We are Clarity Water LLC ( "<strong>Company</strong>,"
      "<strong>we</strong>," "<strong>us</strong>," "<strong>our</strong>" ) , a
      company registered in Georgia at 1081 Lee Cir NE , Atlanta , GA30324.
    </SharedPrivacyPolicyBodyText>
    <SharedPrivacyPolicyBodyText>
      We operate the website
      <SharedPrivacyPolicyLink href="http://www.clarityatl.com" target="_blank">
        http://www.clarityatl.com
      </SharedPrivacyPolicyLink>
      (the "<strong>Site</strong>" ) , as well as any other related products and
      services that refer or link to these legal terms (the "<strong
        >Legal Terms</strong
      >" ) (collectively, the "<strong>Services</strong>" ).
    </SharedPrivacyPolicyBodyText>
    <SharedPrivacyPolicyBodyText>
      You can contact us by phone at 6789832560 , email at andrew@clarityatl.com
      , or by mail to 1081 Lee Cir NE , Atlanta , GA30324, Georgia .
    </SharedPrivacyPolicyBodyText>
    <SharedPrivacyPolicyBodyText>
      These Legal Terms constitute a legally binding agreement made between you,
      whether personally or on behalf of an entity ( "<strong>you</strong>" ),
      and Clarity Water LLC , concerning your access to and use of the Services.
      You agree that by accessing the Services, you have read, understood, and
      agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH
      ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE
      SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
    </SharedPrivacyPolicyBodyText>
    <SharedPrivacyPolicyBodyText>
      Supplemental terms and conditions or documents that may be posted on the
      Services from time to time are hereby expressly incorporated herein by
      reference. We reserve the right, in our sole discretion, to make changes
      or modifications to these Legal Terms at any time and for any reason . We
      will alert you about any changes by updating the "Last updated" date of
      these Legal Terms, and you waive any right to receive specific notice of
      each such change. It is your responsibility to periodically review these
      Legal Terms to stay informed of updates. You will be subject to, and will
      be deemed to have been made aware of and to have accepted, the changes in
      any revised Legal Terms by your continued use of the Services after the
      date such revised Legal Terms are posted.
    </SharedPrivacyPolicyBodyText>
  </div>
</template>

<script lang="ts" setup>
defineOptions({ name: 'PrivacyPolicyHeader' })
</script>

<style lang="scss" module>
.header {
  display: grid;
  gap: 16px;
  line-height: 1.15;
}

.main {
  display: grid;
  gap: 16px;
  padding-bottom: 32px;
}
</style>
