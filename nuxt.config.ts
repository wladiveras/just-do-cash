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
    '@nuxtjs/supabase',
    '@formkit/auto-animate',
    '@nuxtjs/sitemap',
    '@vueuse/motion/nuxt'
  ],
  ssr: true,
  i18n: {
    langDir: 'assets/locales/',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.json',
      },
      {
        code: 'es',
        iso: 'es',
        file: 'es.json',
      },
      {
        code: 'pt',
        iso: 'pt-BR',
        file: 'pt.json',
      },
    ],
    strategy: 'prefix_except_default',
    detectBrowserLanguage: false,
    defaultLocale: 'pt',
  },
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
      baseUrl: process.env.BASE_URL || 'http://localhost:3000',
      motion: {
        directives: {
          'pop-bottom': {
            initial: {
              scale: 0,
              opacity: 0,
              y: 100,
            },
            visible: {
              scale: 1,
              opacity: 1,
              y: 0,
            }
          }
        }
      }
    }
  },
  components: [
    {
      path: '~/components'
    },
    {
      path: '~/components/common',
      pathPrefix: false
    }
  ],
  supabase: {
    redirectOptions: {
      login: '/login',
      callback: '/confirm',
      exclude: ['/', '/confirm', '/login', 'dashboard'],
      cookieRedirect: true,
    },
    cookieOptions: {
      maxAge: 60 * 60 * 8,
      sameSite: 'lax',
      secure: true
    },
    clientOptions: {
      auth: {
        flowType: 'pkce',
        detectSessionInUrl: true,
        persistSession: true,
        autoRefreshToken: true
      },
    }
  },
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
