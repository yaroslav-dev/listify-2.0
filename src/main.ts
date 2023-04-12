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
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore, collection } from 'firebase/firestore'
import { firebaseApp } from './firebase'
import { VueFire, VueFireAuth } from 'vuefire'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDTIda0nsAIldkPNk6vRoL7IPse4L7NVMg",
//   authDomain: "listify-v2.firebaseapp.com",
//   projectId: "listify-v2",
//   storageBucket: "listify-v2.appspot.com",
//   messagingSenderId: "927463433227",
//   appId: "1:927463433227:web:a0d94a59566a8b16d2930e",
//   measurementId: "G-30WR1BN041"
// };

// Initialize Firebase
// const fireapp = initializeApp(firebaseConfig);

// export const analytics = getAnalytics(fireapp);

// const db = getFirestore(fireapp);

// export const listsRef = collection(db, 'lists')

const app = createApp(App)

app.use(VueFire, {
  firebaseApp,
  modules: [
    VueFireAuth(),
  ],
})

registerPlugins(app)

app.mount('#app')
