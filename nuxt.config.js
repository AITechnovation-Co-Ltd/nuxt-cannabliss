export default {
  mode: 'static',
  ssr: false,
  router: {
    base: '/nuxt-cannabliss/'
  },
  // Nuxt loading
  loading: '@/components/loading/loading.vue',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Canabliss Cosmetic',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: "icon", href: "/images/logo.svg" }],
    link: [
      { rel: 'icon', href: '/logo/Logo-CANABLISS.png' },
      { rel: "stylesheet", href: "https://unpkg.com/flowbite@1.4.5/dist/flowbite.min.css" },
    ],
    script: [
      { src: 'https://unpkg.com/flowbite@1.4.5/dist/flowbite.js' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/style/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "@/plugins/api",
    "@/plugins/axios",
    "@/plugins/base-component",
    "@/plugins/modal",
    "@/plugins/vue-tailwind",
    "@/plugins/vue-scrollto",
    "@/plugins/notification",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/postcss8',
    "@nuxtjs/tailwindcss",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/recaptcha",
    // Simple usage
    'nuxt-leaflet',

    // With options
    ['nuxt-leaflet', { /* module options */ }],
  ],
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL:
      process.env.NODE_ENV == "production"
        ? "/"
        : process.env.API || "https://go-cnb-dev-olv6u5muta-as.a.run.app",
    credentials: true,
    proxy: true, //process.env.NODE_ENV !== 'production',
  },

  proxy: {
    "/api": {
      target: process.env.API || "https://go-cnb-dev-olv6u5muta-as.a.run.app",
      pathRewrite: { "^/api": "/api" },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  recaptcha: {
    language: "th", // Recaptcha language (v2)
    mode: "base", // Mode: 'base', 'enterprise'
    siteKey: "6Lf5faggAAAAAEB3EoI-9O2c3rEAdWjpFTWH6gcZ", // Site key for requests
    version: 2, // Version
    size: "normal", // Size: 'compact', 'normal', 'invisible' (v2)
  },
}
