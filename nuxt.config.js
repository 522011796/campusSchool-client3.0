export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: '棉花糖智慧校园管理平台',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no,viewport-fit=cover' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script:[

    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~assets/css/animate.min.css',
    'element-ui/lib/theme-chalk/index.css',
    '~assets/css/common.css',
    '~assets/font-awesome-4.7.0/css/font-awesome.min.css',
    'quill/dist/quill.snow.css',
    'quill/dist/quill.bubble.css',
    'quill/dist/quill.core.css',
    'vant/lib/index.less',
  ],
  loading: false,
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/axios',
    '@/plugins/i18n',
    '@/plugins/qs',
    '@/plugins/moment',
    '@/plugins/echarts',
    { src: "~plugins/formCreate", ssr: false },
    { src: "~plugins/vue-quill-custom-editor.js", ssr: false },
    {src: '@/plugins/vant-ui', ssr: true},
    '@/plugins/vuePageTrasition',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    credentials: true,
    proxy: true
  },
  proxy: [
    ['/proxy', {
      target: process.env.BASE_URL,  //api请求路径
      pathRewrite: { '^/proxy' : '/' }  //重定向请求路径，防止路由、api路径的冲突
    }]
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: [/^element-ui/],
    vendor: ['i18n', 'qs', 'axios', 'moment', 'echarts'] //为防止重复打包
  },
  router: {
    middleware: ['i18n']
  },
  telemetry: false
}
