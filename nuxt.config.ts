import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=500, init-scale=1',
      title: 'Resume',
      meta: [
        { name: 'description', content: 'My amazing site.' },
      ],
    },
  },
  css: ['vuetify/styles'],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    ssr: {
      noExternal: ['vuetify'],
    },
  },
  modules: [
    async (options, nuxt) => {
      nuxt.hooks.hook(
        'vite:extendConfig',
        // @ts-ignore
        config => config.plugins.push(
          vuetify(),
        ))
    },
  ],
})
