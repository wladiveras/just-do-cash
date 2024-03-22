// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ["@nuxt/ui-pro"],
  modules: [
    "@nuxt/content",
    "@nuxt/ui",
    "@nuxtjs/fontaine",
    "@nuxtjs/google-fonts",
    "@vueuse/nuxt",
    "@nuxtjs/i18n",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/supabase",
    "@formkit/auto-animate",
    "@vueuse/motion/nuxt",
    "@nuxtjs/device",
    "@nuxtjs/turnstile",
    "@nuxt/image",
  ],
  turnstile: {
    siteKey: process.env.TURNSTILE_SITE_KEY,
  },
  device: {
    refreshOnResize: true,
  },
  css: ["~/assets/scss/main.scss"],
  ssr: true,
  nitro: {
    prerender: {
      routes: ["/"],
      autoSubfolderIndex: false,
    },
  },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
        },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },
  runtimeConfig: {
    turnstile: {
      siteKey: process.env.TURNSTILE_SITE_KEY,
    },
    public: {
      name: process.env.APP_NAME || "Only do Cash",
      baseUrl: process.env.BASE_URL || "http://localhost:3000",
      motion: {
        directives: {
          "pop-bottom": {
            initial: {
              scale: 0,
              opacity: 0,
              y: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              y: 0,
            },
          },
        },
      },
    },
  },
  components: [
    {
      path: "~/components",
    },
    {
      path: "~/components/common",
      pathPrefix: false,
    },
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_vars.scss" as *;',
        },
      },
    },
  },
  supabase: {
    redirectOptions: {
      login: "/login",
      callback: "/confirm",
      exclude: [
        "/",
        "/confirm",
        "/login",
        "/order/complete",
        "/order/checkout",
      ],
      cookieRedirect: true,
    },
    cookieOptions: {
      maxAge: 60 * 60 * 8,
      sameSite: "lax",
      secure: true,
    },
    clientOptions: {
      auth: {
        flowType: "pkce",
        detectSessionInUrl: true,
        persistSession: true,
        autoRefreshToken: true,
      },
    },
  },
  colorMode: {
    preference: "light",
    fallback: "light",
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "-mode",
    storageKey: "nuxt-color-mode",
  },
  // Fonts
  fontMetrics: {
    fonts: ["DM Sans"],
  },
  googleFonts: {
    display: "swap",
    download: true,
    families: {
      "DM+Sans": [400, 500, 600, 700],
    },
  },
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  typescript: {
    strict: true,
  },
});