export default defineNuxtConfig({
  // SSG — generates static files in .output/public
  // User will host this folder themselves
  nitro: {
    preset: 'static'
  },

  modules: [
    '@nuxt/ui',     // Tailwind v4 + Reka UI components included
    '@nuxt/image',  // auto WebP, lazy loading, responsive srcset
    '@nuxt/fonts',  // font loading without render-blocking scripts
    '@nuxt/icon',   // Simple Icons + Heroicons
  ],

  // Image configuration — using plain <img> for static reliability
  image: {
    provider: 'none',
  },

  // Load fonts efficiently — no FOUT
  fonts: {
    families: [
      { name: 'Space Grotesk', provider: 'google', weights: [400, 500, 600, 700] },
      { name: 'Inter', provider: 'google', weights: [400, 500] },
      { name: 'JetBrains Mono', provider: 'google', weights: [400] },
    ],
  },

  // Global CSS
  css: ['~/assets/css/main.css'],

  // SEO meta tags
  app: {
    head: {
      title: 'Ishitva Agrawal — Fullstack & AI Developer',
      meta: [
        { name: 'description', content: 'Portfolio of Ishitva Agrawal, fullstack and AI developer building intelligent web products.' },
        { property: 'og:title', content: 'Ishitva Agrawal — Fullstack & AI Developer' },
        { property: 'og:image', content: '/og-image.jpg' },
        { name: 'theme-color', content: '#0A0A0A' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.png' }
      ],
    },
  },

  // Full TypeScript strict mode
  typescript: { strict: true },

  // Prerender all routes
  routeRules: { '/**': { prerender: true } },

  srcDir: '.',

  // Use static paths for images to ensure compatibility with all static hosts
  image: {
    provider: 'none'
  },

  compatibilityDate: '2024-11-01',
})
