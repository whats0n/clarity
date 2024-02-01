export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig()

  nuxtApp.hook('apollo:auth', ({ token }) => {
    if (runtimeConfig.public.strapiApiToken) {
      token.value = runtimeConfig.public.strapiApiToken
    }
  })
})
