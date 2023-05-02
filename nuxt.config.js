export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'jarvis',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // quasar: {
  //   animations: ["fadeIn", "fadeOut"],
  //   extras: ["fontawesome-v5"],
  //   framework: {
  //     config: {
  //       brand: {
  //         primary: "#ffffff",
  //         // ...
  //       },
  //     },
  //     components: [
  //       "QAvatar",
  //       "QBtn",
  //       // ...
  //     ],
  //     directives: ["ClosePopup"],
  //     plugins: ["Cookies"],
  //     iconSet: "fontawesome-v5",
  //     cssAddon: true
  //   },
  //   supportIE: true
  // },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
  ],

  ssr:false,

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: "@/plugins/vcalender.js", mode:"client",
    } ,
    { src: "@/plugins/timeline.js" },
    { src: "@/plugins/datetime.js", mode:"client" },
    // {src:"@/plugins/quasar.js"}
    { src: "@/plugins/draggable.js" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/moment',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // 'nuxt-quasar',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
}
