<template>
  <div :class="$style.page">
    <!--<SharedPricingHero
      :title="computedData.title"
      :description="computedData.description"
      :variants="computedData.pricingVariants"
      :class="$style.hero"
    />-->
    <SharedBenefits :class="$style.benefits" />
    <SharedFaq :class="$style.faq" />
  </div>
</template>

<script lang="ts" setup>
// import type {
//   ComponentPricingPlan,
//   ComponentPricingPlanFeatures,
//   ReverseOsmosisEntityResponse,
// } from '~/graphql/types'
// import type { PricingPlan, PricingPlanItem, PricingVariant } from '~/types'

// const { data } = await useAsyncQuery<{
//   reverseOsmosis: ReverseOsmosisEntityResponse
// }>(GET_REVERSE_OSMOSIS)

// if (!data.value) showError({ statusCode: 404 })

// const computedData = computed<{
//   title: string
//   description: string
//   pricingVariants: PricingVariant[]
// }>(() => {
//   const source =
//     data.value.reverseOsmosis.data?.attributes?.pricing_page?.data?.attributes

//   return {
//     title: source?.Title || '',
//     description: source?.Description || '',
//     pricingVariants: (source?.pricing_variants?.data || []).map<PricingVariant>(
//       (variant) => {
//         return {
//           id: variant.id || '',
//           title: variant.attributes?.Title || '',
//           description: variant.attributes?.Description || '',
//           icon: (variant.attributes?.icon || '').replace('_', '-'),
//           plans: (variant.attributes?.Plan || [])
//             .filter<ComponentPricingPlan>(
//               (plan): plan is ComponentPricingPlan => !!plan,
//             )
//             .map<PricingPlan>((plan) => {
//               return {
//                 id: plan.id,
//                 name: plan.Name || '',
//                 price: plan.Price || 0,
//                 label: plan.installation
//                   ? 'including installation'
//                   : 'without installation',
//                 button: plan.button
//                   ? {
//                       href: plan.button.href,
//                       text: plan.button.text,
//                       color: plan.button.color,
//                       external: plan.button.external,
//                     }
//                   : undefined,
//                 list: (plan?.Features || [])
//                   .filter<ComponentPricingPlanFeatures>(
//                     (feature): feature is ComponentPricingPlanFeatures =>
//                       !!feature,
//                   )
//                   .map<PricingPlanItem>((feature) => {
//                     return {
//                       id: feature?.id || '',
//                       text: feature?.Title || '',
//                     }
//                   }),
//               }
//             }),
//         }
//       },
//     ),
//   }
// })

definePageMeta({
  title: 'Pricing',
})
</script>

<style lang="scss" module>
.page {
  position: relative;
}

.hero {
  margin-bottom: 110px;
}

.benefits {
  margin-bottom: 147px;
}

.faq {
  margin-bottom: 144px;
}
</style>
