// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['@nuxt/ui'],
  tailwindcss: {
    configPath: '@/tailwind.config.ts',
  },
  colorMode: {
    preference: 'light'
  },
  app: {
    head: {
      meta: [
        { name: 'description', content: 'Nuxt 3 + Tailwind CSS + UI' },
        { name: 'keywords', content: 'Nuxt 3, Tailwind CSS, UI' },
        { name: 'author', content: 'Your Name' },
        { name: 'robots', content: 'index, follow' },
        { name: 'googlebot', content: 'index, follow' },
        { name: 'bingbot', content: 'index, follow' },
        { name: 'yandexbot', content: 'index, follow' },
        { name: 'msnbot', content: 'index, follow' },
        { name: 'slurp', content: 'index, follow' },
        { name: 'ia_archiver', content: 'index, follow' },
        { name: 'google', content: 'index, follow' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Nuxt 3 + Tailwind CSS + UI',
    }
  }
})