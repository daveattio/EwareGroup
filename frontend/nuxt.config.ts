// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  srcDir: '.',

  devServer: {
    port: 3333,
    host: '0.0.0.0'
  },

  runtimeConfig: {
    public: {
      strapiUrl: process.env.NUXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'
    }
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxtjs/i18n',
    '@vueuse/nuxt'
  ],

  css: ['~/assets/css/main.css'],

  i18n: {
    locales: [
      { code: 'fr', name: 'Français', file: 'fr.json' },
      { code: 'en', name: 'English', file: 'en.json' }
    ],
    lazy: false,
    langDir: 'locales',
    defaultLocale: 'fr',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'eware_lang',
      redirectOn: 'root'
    }
  },

  icon: {
    mode: 'svg',
    clientBundle: {
      scan: true
    }
  },

  app: {
    head: {
      title: 'Eware Group | Transition Énergétique & Ingénierie Industrielle',
      htmlAttrs: {
        lang: 'fr'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Eware Group : Leader en ingénierie énergétique solaire, réseaux HT/BT, distribution d\'équipements industriels (EIMAT) et solutions digitales (SolSizer, Eware Mobility) au Togo et en Afrique.'
        },
        { name: 'theme-color', content: '#02723c' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Eware Group | Transition Énergétique & Ingénierie Industrielle' },
        {
          property: 'og:description',
          content: 'Infrastructures solaires, réseaux HT/BT, fourniture de matériel industriel avec EIMAT et plateformes technologiques en Afrique.'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap'
        }
      ]
    }
  }
})
