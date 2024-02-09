import { provideApolloClient } from '@vue/apollo-composable'

export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig()

  const { clients } = useApollo()

  if (clients) provideApolloClient(clients.default)

  nuxtApp.hook('apollo:auth', ({ token }) => {
    if (runtimeConfig.public.strapiApiToken) {
      token.value = runtimeConfig.public.strapiApiToken
    }
  })
})
