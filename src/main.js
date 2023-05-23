import './assets/main.css'
import router from './router'

import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

// Anime
import anime from 'animejs/lib/anime.es.js';


createApp(App).use(router).use(vuetify).use(anime).mount('#app')
