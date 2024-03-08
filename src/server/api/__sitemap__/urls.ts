import { Query } from '~/graphql/types'

export default defineSitemapEventHandler(async () => {
  const runtimeConfig = useRuntimeConfig()

  const pricingPage = `{
    data {
      attributes {
        pricing_page_template {
          data {
            attributes {
              pricing_hero_section {
                data {
                  attributes {
                    pricing_variant_sections {
                      data {
                        attributes {
                          pricing_plans {
                            data {
                              id
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }`

  const query = `
    query {
      installationPrice ${pricingPage}
      whFiltrationPrice ${pricingPage}
      reverseOsmosisPrice ${pricingPage}
    }
  `

  try {
    const { data } = await $fetch<{
      data: Pick<
        Query,
        'installationPrice' | 'whFiltrationPrice' | 'reverseOsmosisPrice'
      >
    }>(runtimeConfig.public.strapiApiUrl, {
      method: 'POST',
      body: {
        query,
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${runtimeConfig.public.strapiApiToken}`,
      },
    })

    const plans = Object.values(data)
      .flatMap(
        (page) =>
          page?.data?.attributes?.pricing_page_template?.data?.attributes
            ?.pricing_hero_section?.data?.attributes?.pricing_variant_sections
            ?.data,
      )
      .flatMap((variant) => variant?.attributes?.pricing_plans?.data)
      .map((plan) => plan?.id)
      .filter((id): id is string => typeof id === 'string' && !!id.length)

    const filteredPlans = [...new Set(plans)]

    return filteredPlans.map((id) => `/checkout/${id}`)
  } catch (error) {
    return []
  }
})
