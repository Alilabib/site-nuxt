export default {
    target: "static",
    ssr: false,
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'alalmiya',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/icon.png' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        "~/node_modules/bootstrap/dist/css/bootstrap.min.css",
        "@/assets/css/style.css",
        "@/assets/css/awady.css",
        "@/assets/css/style-ar.css",
        "@/assets/css/responsive.css"
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: "~/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js", mode: "client" },
        { src: 'plugins/owl.js', ssr: false },
        { src: 'plugins/FontAwesome.js' },
        { src: 'plugins/fancyBoxAwaDy.js' },
        { src: 'plugins/filters.js' }
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios', ['nuxt-gmaps', {
            key: 'AIzaSyDx--BILIM2LjZBxVMjGYVb8YqrY-Vk_Yk',
            libraries: ['places']
        }],
        ['nuxt-i18n', {
            locales: [{
                    name: 'Arabic',
                    code: 'ar',
                    iso: 'ar-AR',
                    file: 'ar-AR.js',
                    dir: 'rtl'
                },
                {
                    name: 'English',
                    code: 'en',
                    iso: 'en-US',
                    file: 'en-US.js',
                    dir: 'ltr'
                },
            ],
            lazy: true,
            langDir: "lang/",
            vueI18n: {
                locale: 'en',
                fallbackLocale: 'en',
            },
            defaultLocale: "en",
            // vueI18nLoader: true,
            // differentDomains: true,
            // detectBrowserLanguage: {
            //     useCookie: true,
            //     cookieDomain: null,
            //     cookieKey: 'lang',
            //     alwaysRedirect: false,
            //     fallbackLocale: 'en'
            // },
        }],
        'vue-social-sharing/nuxt',
        'nuxt-lazy-load'
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        baseUrl: "https://alalmyia.t-demo.alalmiyalhura.com/api"
    },

    // target: 'server',
    // ssr: true,

    // loading: '~/components/MainComponents/Loader.vue',

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}
