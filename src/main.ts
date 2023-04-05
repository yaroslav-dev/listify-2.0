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
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import '../registerServiceWorker'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTIda0nsAIldkPNk6vRoL7IPse4L7NVMg",
  authDomain: "listify-v2.firebaseapp.com",
  projectId: "listify-v2",
  storageBucket: "listify-v2.appspot.com",
  messagingSenderId: "927463433227",
  appId: "1:927463433227:web:a0d94a59566a8b16d2930e",
  measurementId: "G-30WR1BN041"
};

// Initialize Firebase
const fireapp = initializeApp(firebaseConfig);
const analytics = getAnalytics(fireapp);

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
