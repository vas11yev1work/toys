import {defineNuxtConfig} from 'nuxt3';

export default defineNuxtConfig({
  // dev: true,
  ssr: true,
  buildModules: [
    '@pinia/nuxt',
  ],
  plugins: [
    '@/plugins/state.persisted',
    '@/plugins/vue.use',
    '@/plugins/vue-slider.client',
  ],
  meta: {
    link: [
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&display=swap'},
      {rel: 'icon', href: '/favicon.ico'},
    ],
  },
  css: [
    '@fancyapps/ui/dist/fancybox.css',
    '@/assets/css/main.css',
    '@/assets/css/mobile.css',
    '@egjs/vue3-flicking/dist/flicking.css'
  ]
})
