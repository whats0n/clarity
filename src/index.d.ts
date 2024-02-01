declare module 'nuxt/schema' {
  interface PublicRuntimeConfig {
    strapiApiToken: string
    strapiApiUrl: string
  }
}

// It is always important to ensure you import/export something when augmenting a type
export {}
