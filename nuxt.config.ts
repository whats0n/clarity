import stylelintPlugin from 'vite-plugin-stylelint'
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },

  srcDir: 'src',

  runtimeConfig: {
    stripeSk: '',
    googleApiKey: '',

    public: {
      strapiApiToken: '',
      strapiApiUrl: '',
      strapiUrl: '',
      stripePk: '',
      calendlyUrl: '',
    },
  },

  modules: [
    '@nuxtjs/apollo',
    '@vueuse/nuxt',
    [
      '@vee-validate/nuxt',
      {
        autoImports: true,
      },
    ],
  ],

  apollo: {
    autoImports: true,
    authType: 'Bearer',
    authHeader: 'Authorization',
    tokenStorage: 'cookie',
    clients: {
      default: {
        httpEndpoint: process.env.NUXT_PUBLIC_STRAPI_API_URL || '',
      },
    },
  },

  plugins: ['~/plugins/fontawesome.ts', '~/plugins/apollo.ts'],

  css: ['~/scss/index.scss', '@fortawesome/fontawesome-svg-core/styles.css'],

  sourcemap: true,

  nitro: {
    compressPublicAssets: true,
  },

  imports: {
    dirs: [
      'composables',
      'composables/adapters',
      'composables/*/index.ts',
      'composables/*/types.ts',
      'services',
      'services/*/index.ts',
      'services/*/types.ts',
    ],
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'page', mode: 'out-in' },

    head: {
      script: [
        { src: 'https://assets.calendly.com/assets/external/widget.js' },
      ],

      link: [
        {
          rel: 'stylesheet',
          href: 'https://assets.calendly.com/assets/external/widget.css',
        },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
        },
        {
          href: 'https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,100..900;1,100..900&display=swap',
          rel: 'stylesheet',
        },
        {
          href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap',
          rel: 'stylesheet',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#6bd8f3' },
      ],
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          charset: 'utf-8',
        },
        {
          name: 'theme-color',
          content: 'black',
        },
        { name: 'msapplication-TileColor', content: '#6bd8f3' },
        { name: 'theme-color', content: '#ffffff' },
      ],
    },
  },

  vite: {
    plugins: [stylelintPlugin({ fix: true })],

    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use 'sass:math';
            @use 'sass:map';
            @use 'sass:list';
            @import "~/scss/helpers/index.scss";
          `,
        },
      },
    },
  },
})
