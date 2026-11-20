// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/fonts'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  // Design tokens and base styles, loaded on every page
  css: ['~/assets/css/main.css'],

  // The site is static content, so the production build ships no framework JavaScript
  // and inlines all CSS: one HTML file plus fonts. `npm run dev` still runs Vue as usual.
  features: { noScripts: true, inlineStyles: true },

  experimental: {
    // Render 404.html as a real page at build time (without JavaScript an SPA shell stays empty)
    prerenderErrorPages: true,
    // Only used by client-side JavaScript, which this site doesn't ship
    appManifest: false,
  },

  nitro: {
    // SPA fallback page, not needed without client-side JavaScript
    prerender: { ignore: ['/200.html'] },
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Yassine Akka — Front-end Developer',
      meta: [
        { name: 'description', content: 'Portfolio of Yassine Akka, front-end developer based in Amsterdam.' },
        { name: 'theme-color', content: '#0c0d0f' },
      ],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    },
  },

  // Fonts are downloaded from Google at build time and self-hosted
  fonts: {
    defaults: { styles: ['normal'], subsets: ['latin'] },
    families: [
      // Preloaded: the hero title is the largest element on screen
      { name: 'Saira Condensed', weights: [700], global: true, preload: true },
      { name: 'Inter', weights: [400, 500, 600], global: true },
      { name: 'JetBrains Mono', weights: [400, 500], global: true },
    ],
  },
})
