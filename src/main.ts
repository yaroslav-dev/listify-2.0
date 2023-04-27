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

// Import the functions you need from the SDKs you need
import { firebaseApp, usersRef } from './firebase'
import { VueFire, VueFireAuth } from 'vuefire'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const app = createApp(App)

app.use(VueFire, {
  firebaseApp,
  usersRef,
  modules: [
    VueFireAuth(),
  ],
})

registerPlugins(app)

app.mount('#app')