/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
import Vue3TouchEvents from "vue3-touch-events";

// Import the functions you need from the SDKs you need
import { firebaseApp } from './firebase'
import { VueFire, VueFireAuth } from 'vuefire'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const app = createApp(App)

app.use(VueFire, {
  firebaseApp,
  modules: [
    VueFireAuth(),
  ],
})

app.use(Vue3TouchEvents)

registerPlugins(app)

app.mount('#app')
