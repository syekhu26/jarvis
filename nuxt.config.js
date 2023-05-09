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
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
    // 'nuxt-quasar',
  ],

  auth: {
    // Options
    redirect: {
      login: '/login',
      home: '/',
      logout: '/login',
      callback:'/login',
      register:'/login'
    },
    strategies: {
      local: {
        token: {
          property: 'token',
          global:true,
          required:true,

        },
        user : {
          autoFetch : true,
          property : false
        },
        endpoints: {
          login: {
            url: '/login',
            method: 'post',
          },
          user: {
            url: 'users/{id}',
            method: 'get',
            // propertyName: 'user'
          },
          logout:false
          // logout: {
          //   url: '/api/logout',
          //   method: 'post'
          // }
        },
    
      }
    },
    cookie: {
      name: 'token'
    },
    
  },
 
  router: {
    middleware: ['auth']
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://bantuin.fly.dev/api',
  },

  env: {
    API_URL: process.env.API_URL || 'https://bantuin.fly.dev/api'
  },
  // loading: '~/components/Loading.vue',

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
