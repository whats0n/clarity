import stylelintPlugin from 'vite-plugin-stylelint'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  srcDir: 'src',

  css: ['~/scss/index.scss', '@fortawesome/fontawesome-svg-core/styles.css'],

  sourcemap: true,

  nitro: {
    compressPublicAssets: true,
  },

  plugins: ['~/plugins/fontawesome.ts'],

  imports: {
    dirs: [
      'composables',
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
      link: [
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
