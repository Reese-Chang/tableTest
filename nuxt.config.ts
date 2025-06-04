// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/20250601Table/'
  },
  nitro: {
    preset: 'static',
    prerender: {
      routes: ['/productForm'],
      crawlLinks: true,
      ignore: []
    },
    output: {
      dir: '.output'  // 確保 .output/public/_nuxt 存在
    },
  },
  css: ['element-plus/dist/index.css'],
  vite: {
    optimizeDeps: {
      include: ['element-plus']
    }
  },
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true }
})
