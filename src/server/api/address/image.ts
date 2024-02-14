export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig()

  const query = await getQuery<{ lat: string; lng: string }>(event)

  try {
    return await fetch(
      `https://maps.googleapis.com/maps/api/staticmap?` +
        new URLSearchParams({
          key: runtimeConfig.googleApiKey,
          zoom: '17',
          size: '100x100',
          markers: `${query.lat},${query.lng}`,
          center: [query.lat, query.lng].join(','),
        }),
    )
  } catch (error) {
    console.log(error)
    return createError({ status: 404, statusMessage: 'Not found' })
  }
})
