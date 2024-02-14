import { AddressType, Client, Place } from '@googlemaps/google-maps-services-js'
import { ApiAddressDetails } from '~/types'

type Result = Required<
  Pick<Place, 'formatted_address' | 'address_components' | 'url' | 'geometry'>
>

export default defineEventHandler<
  Promise<ApiAddressDetails | ReturnType<typeof createError>>
>(async (event) => {
  const runtimeConfig = useRuntimeConfig()

  const query = await getQuery<{ placeId: string }>(event)

  try {
    const id = query.placeId

    if (!id?.length) {
      return createError({ status: 404, statusMessage: 'Not found' })
    }

    const client = new Client({})

    const fields: Array<keyof Result> = [
      'formatted_address',
      'address_components',
      'url',
      'geometry',
    ]

    const {
      data: { result, status },
    } = await client.placeDetails({
      params: {
        place_id: id,
        key: runtimeConfig.googleApiKey,
        fields,
      },
    })

    if (status === 'OK') {
      const getComponentShortName = (type: AddressType): string =>
        result.address_components?.find((component) =>
          component.types.includes(type),
        )?.short_name || ''

      const response: ApiAddressDetails = {
        streetNumber: getComponentShortName(AddressType.street_number),
        route: getComponentShortName(AddressType.route),
        locality: getComponentShortName(AddressType.locality),
        region: getComponentShortName(AddressType.administrative_area_level_1),
        postalCode: getComponentShortName(AddressType.postal_code),
        url: result.url || '',
        formattedAddress: result.formatted_address || '',
        image: `/api/address/image?lat=${result.geometry?.location.lat}&lng=${result.geometry?.location.lng}`,
      }

      return response
    }

    return createError({ status: 404, statusMessage: 'Not found' })
  } catch (error) {
    console.log(error)
    return createError({ status: 404, statusMessage: 'Not found' })
  }
})
