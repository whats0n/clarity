declare module 'nuxt/schema' {
  interface PublicRuntimeConfig {
    strapiApiToken: string
    strapiApiUrl: string
  }
}

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: {
        url: string
        prefill: { customAnswers?: Record<string, string> }
      }) => void
    }
  }
}

// It is always important to ensure you import/export something when augmenting a type
export {}
