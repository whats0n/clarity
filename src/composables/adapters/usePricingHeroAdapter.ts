import type { Maybe, PricingHeroSection } from '~/graphql/types'
import type {
  SharedPricingHero,
  SharedPricingPlan,
  SharedPricingVariant,
} from '~/types'

export const usePricingHeroAdapter = () => {
  const listAdapter = useListAdapter()
  const imageSrc = useImageSrc()

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
              plans: (variant.attributes.pricing_plans?.data || []).reduce<
                SharedPricingPlan[]
              >((plans, plan) => {
                if (plan.attributes && plan.id)
                  plans.push({
                    id: plan.id,
                    name: plan.attributes.name,
                    price: plan.attributes.price,
                    installation: plan.attributes.installation,
                    image: imageSrc(plan.attributes.image),
                    button: {
                      href: `/checkout/${plan.id}`,
                      color: plan.attributes.type,
                      external: false,
                    },
                    list: listAdapter(plan.attributes.list),
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
