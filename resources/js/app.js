import './bootstrap';

import {createApp} from 'vue'

import App from './App.vue'

import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
    state () {
        return {
            count: 5,
            medications: [
                {
                    name: "Medication A",
                    dosage: "10mg",
                    frequency: "once daily"
                },
                {
                    name: "Medication B",
                    dosage: "20mg",
                    frequency: "twice daily"
                },
                {
                    name: "Medication C",
                    dosage: "5mg",
                    frequency: "once daily"
                },
                {
                    name: "Medication D",
                    dosage: "15mg",
                    frequency: "three times daily"
                }
            ]
        }
    },
    getters: {
        medicationNames (state) {
        return state.medications.map(({name}) => name);
        }
    },
    mutations: {
        increment (state) {
        state.count++
        }
    }
})

const app = createApp(App)

// Install the store instance as a plugin
app.use(store)

app.mount("#app")