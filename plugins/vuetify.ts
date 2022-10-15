import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { mdi } from 'vuetify/lib/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'
export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'dark',
    },
    icons: {
      defaultSet: 'mdi',
      sets: {
        mdi,
      },
    },
    components,
    directives,
  })

  nuxtApp.vueApp.use(vuetify)
})