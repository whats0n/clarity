import { Client } from '@googlemaps/google-maps-services-js'
import { ApiAddressItem } from '~/types'

export default defineEventHandler<Promise<ApiAddressItem[]>>(async (event) => {
  const runtimeConfig = useRuntimeConfig()

  const query = await getQuery<{ search: string }>(event)

  try {
    const search = query.search?.trim() || ''

    if (!search?.length) return []

    const client = new Client({})

    const {
      data: { predictions, status },
    } = await client.placeAutocomplete({
      params: {
        input: search,
        key: runtimeConfig.googleApiKey,
        components: ['country:us'],
      },
    })

    return status === 'OK'
      ? predictions.reduce<ApiAddressItem[]>((result, place) => {
          if (place.place_id && place.description)
            result.push({
              id: place.place_id,
              text: place.description,
            })

          return result
        }, [])
      : []
  } catch (error) {
    console.log(error)
    return []
  }
})
