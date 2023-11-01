import './bootstrap';

import {createApp} from 'vue'

import App from './App.vue'

import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      count: 5
    }
  }
})

const app = createApp(App)

// Install the store instance as a plugin
app.use(store)

app.mount("#app")