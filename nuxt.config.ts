// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxtjs/fontaine',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
  ],
  ssr: true,
  nitro: {
    prerender: {
      autoSubfolderIndex: false
    }
  },
  ui: {
    icons: ['heroicons', 'simple-icons'],
  }, 
  app: {
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },
  runtimeConfig: {
    public: {
      name: process.env.APP_NAME || 'Only do Cash',
      baseUrl: process.env.BASE_URL || 'http://localhost:3000'

    }
  },
  components: [{
    path: '~/components'
  }, {
    path: '~/components/common',
    pathPrefix: false
  }],
  colorMode: {
    preference: 'light',
    fallback: 'light',
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode'
  },
  // Fonts
  fontMetrics: {
    fonts: ['DM Sans']
  },
  googleFonts: {
    display: 'swap',
    download: true,
    families: {
      'DM+Sans': [400, 500, 600, 700]
    }
  },
  devtools: {
    enabled: true,
    timeline: {
      enabled: true
    }
  },
  typescript: {
    strict: false
  }
})
