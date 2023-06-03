export default defineNuxtConfig({
    css: ['@/assets/scss/main.scss'],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/scss/_colors.scss" as *;'
                }
            }
        }
    },
    typescript: {
        shim: false
    },
    app: {
        baseURL: '/portfolio/.output/public/'
    },

})
