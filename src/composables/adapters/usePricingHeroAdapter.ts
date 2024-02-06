import type { Maybe, PricingHeroSection } from '~/graphql/types'
import type {
  SharedPricingHero,
  SharedPricingPlan,
  SharedPricingVariant,
} from '~/types'

export const usePricingHeroAdapter = () => {
  const listAdapter = useListAdapter()

  return (source?: Maybe<PricingHeroSection>): SharedPricingHero | null => {
    return source
      ? {
          title: source.title || '',
          description: source.description || '',
          variants: (source.pricing_variant_sections?.data || []).reduce<
            SharedPricingVariant[]
          >((result, variant) => {
            if (!variant?.attributes || !variant?.id) return result

            result.push({
              id: variant.id,
              title: variant.attributes.title,
              description: variant.attributes.description,
              icon: variant.attributes.icon.name,
              plans: (variant.attributes.items || []).reduce<
                SharedPricingPlan[]
              >((plans, plan) => {
                if (plan)
                  plans.push({
                    id: plan.id,
                    name: plan.name,
                    price: plan.price,
                    installation: plan.installation,
                    button: {
                      href: plan.get_started_href || '',
                      color: plan.get_started_color,
                      external: plan.get_started_external,
                    },
                    list: listAdapter(plan.list),
                  })

                return plans
              }, []),
            })

            return result
          }, []),
        }
      : null
  }
}
