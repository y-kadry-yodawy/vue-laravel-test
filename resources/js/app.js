import './bootstrap';

import { createApp } from 'vue'
import { createStore } from 'vuex'

import App from './App.vue'

import { medicationsModule } from './modules/medications';
import { countModule } from './modules/count';

const store = createStore({
  modules: {
    medications: medicationsModule,
    count: countModule
  }
})

const app = createApp(App)

app.use(store)
app.mount("#app")