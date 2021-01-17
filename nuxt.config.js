export default {
    // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
    ssr: false,

    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'e-duca',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [],

    // Global style files
    styleResources: {
        scss: [
            '~/assets/_colors.scss',
            '~/assets/variables.scss',
        ]
    },

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        '@/plugins/modal.js',
        '@/plugins/modal-use.js'
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        'nuxt-svg-loader',
        '@nuxtjs/style-resources',
        ['nuxt-vuex-localstorage', {
            localStorage: ['user']
        }]
    ],

    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {},

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {},

    router: {
        middleware: ['mobile']
    },

    pwa: {
        manifest: {
            name: 'e-duca',
            lang: 'pt',
            display: 'standalone',
            useWebmanifestExtension: false,
            background_color: '#645bd0',
            theme_color: '#645bd0'
        },
        icon: [
            { src: '/icon.png', size: '128x128', type: 'image/png' },
            { src: '/apple-touch-icon.png', size: '180x180', type: 'image/png' },
            { src: '/android-chrome-192x192.png', size: '192x192', type: 'image/png' },
            { src: '/android-chrome-512x512.png', size: '512x512', type: 'image/png' }
        ]
    }
}
