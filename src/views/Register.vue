<template>
  <v-container class="container">
    <v-form class="form">
      <h3 class="form-head mb-3">Sign up</h3>
      <TextField v-model="email" :inputType="'email'" />
      <TextField v-model="password" :inputType="'password'" />
      <v-btn size="large" variant="flat" color="primary" block @click="register">
        Sign up
      </v-btn>
      <span class="my-2">or</span>
      <v-btn size="large" variant="outlined" block @click="signInWithGoogle">
        <v-img src="../assets/Google__G__Logo.svg.webp" width="23" height="23" class="mr-3"></v-img>
        Sign in with Google
      </v-btn>
      <router-link class="mt-3 text-decoration-none" to="/login">Sign in</router-link>
    </v-form>
  </v-container>
</template>
<script setup lang="ts">
import TextField from '@/components/loginForm/TextField.vue';
import { ref, onMounted, onBeforeMount } from 'vue';
import { useFirebaseAuth } from 'vuefire';
import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router';
import { usePersist } from '@/store/persist';
import { useAppStore } from '@/store/app';
import { useUserStore } from '@/store/user';

const store = useAppStore()

const auth = useFirebaseAuth()!
const provider = new GoogleAuthProvider()
const router = useRouter()
const userStore = useUserStore()

const persist = usePersist()

const email = ref('')
const password = ref('')

const register = () => {
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      console.log('Successfully registered')
      console.log('data: ', data)
      router.push({name: 'Home'})
    })
    .catch((error) => {
      console.warn(error.code)
      alert(error.message)
    })
}

let db
let transaction
let storage: any
let res: any

onMounted(() => {
  const openRequest = indexedDB.open('firebaseLocalStorageDb')
  openRequest.onsuccess = () => {
    db = openRequest.result
    transaction = db.transaction('firebaseLocalStorage')
    storage = transaction.objectStore('firebaseLocalStorage').getAll()
    storage.onsuccess = () => {
      res = storage.result.find((index: any) => index.value !== '1')
    } 
  }
})
const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then(result => {
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const token = credential?.accessToken
      const user = result.user
      userStore.setUser(user)
      persist.setPersist(res)
      router.push({ name: 'Home' })
    }).then(() => {
    }).catch(error => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
    })
}
onBeforeMount(() => {
  store.hideNavBar(true)
})
</script>
<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form {
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.form-head {
  text-align: center;
}

.sign-up {
  text-decoration: none;
}
.v-btn {
  height: 40px;
}
</style>