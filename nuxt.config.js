export default {
    // Target (https://go.nuxtjs.dev/config-target)
    target: 'static',

    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'github-repos',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'description',
                name: 'description',
                content:
                    'a simple app to find user gihub repositories and view some details of the repositories',
            },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
            {
                rel: 'stylesheet',
                href:
                    'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap',
            },
        ],
    },

    env: {
        baseUrl: process.env.BASE_URL,
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: ['@/assets/styles/main.scss'],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: ['~/plugins/vuelidate'],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        [
            'nuxt-fontawesome',
            {
                component: 'fa',
                imports: [
                    {
                        set: '@fortawesome/free-solid-svg-icons',
                        icons: [
                            'faStar',
                            'faLock',
                            'faLockOpen',
                            'faLink',
                            'faBuilding',
                            'faHome',
                        ],
                    },
                ],
            },
        ],
    ],

    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {
        baseURL: 'https://api.github.com',
        retry: { retries: 1 },
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {},

    loading: {
        color: 'DodgerBlue',
        height: '2px',
        continuous: true,
    },

    generate: {
        fallback: true,
    },
}
