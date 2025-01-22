// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['@nuxt/ui', '@nuxtjs/sitemap', '@nuxtjs/robots'],
  tailwindcss: {
    configPath: '@/tailwind.config.ts',
  },
  colorMode: {
    preference: 'light'
  },
  site: {
    url: "https://königswieser.info", 
    name: 'Dr. Ene Königswieser', 
    routes: [
      '/',
      '/about-me',
      '/contact'
    ]
  },
  app: {
    head: {
      link: [
        {
          rel: "icon",
          href: "https://raw.githubusercontent.com/Felilou/about-me/refs/heads/build/favicon.ico"
        }
      ]
    }
  }
})