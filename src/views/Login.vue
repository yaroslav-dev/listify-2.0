<template>
  <v-container class="container">
    <v-form class="form">
      <h3 class="form-head mb-3">Sign in</h3>
      <TextField v-model="email" :inputType="'email'" />
      <TextField v-model="password" :inputType="'password'" />
      <v-btn size="large" variant="flat" color="primary" block @click="signIn">
        Sign in
      </v-btn>
      <span class="my-2">or</span>
      <v-btn size="large" variant="outlined" block @click="signInWithGoogle">
        <v-img src="../assets/Google__G__Logo.svg.webp" width="23" height="23" class="mr-3"></v-img>
        Sign in with Google
      </v-btn>
      <router-link class="mt-3 text-decoration-none" to="/signup">Create account</router-link>
    </v-form>
  </v-container>
</template>
<script lang="ts" setup>
import TextField from '@/components/loginForm/TextField.vue';
import { useAppStore } from '@/store/app';
import { useUserStore } from '@/store/user';
import { onBeforeMount, onMounted, ref } from 'vue';
import { doc, setDoc } from 'firebase/firestore';
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signInWithRedirect, getAuth, getRedirectResult, onAuthStateChanged } from "firebase/auth";
import { db } from '@/firebase'
import { useRouter } from 'vue-router';
import { usePersist } from '@/store/persist';

const store = useAppStore()

const userStore = useUserStore()
const persist = usePersist()

const auth = getAuth()
const provider = new GoogleAuthProvider()
const router = useRouter()


const email = ref('')
const password = ref('')

let idb
let transaction
let storage: any
let res: any

onMounted(() => {
  const openRequest = indexedDB.open('firebaseLocalStorageDb')
  openRequest.onsuccess = () => {
    idb = openRequest.result
    transaction = idb.transaction('firebaseLocalStorage')
    storage = transaction.objectStore('firebaseLocalStorage').getAll()
    storage.onsuccess = () => {
      res = storage.result.find((index: any) => index.value !== '1')
    }
  }
})

// const fire = useFirestore()

const signInWithGoogle = async () => {
  signInWithRedirect(auth, provider)

  
  // signInWithPopup(auth, provider)
  //   .then(result => {
  //     GoogleAuthProvider.credentialFromResult(result)
  //     const user = result.user
  //     setDoc(doc(fire, 'users', user.uid), {
  //       name: user.displayName,
  //       email: user.email,
  //       photo: user.photoURL,
  //     })
  //     userStore.setUser({
  //       id: user.uid,
  //       name: user.displayName,
  //       email: user.email,
  //       photo: user.photoURL,
  //     })
  //     localStorage['currentUser'] = JSON.stringify({
  //       id: user.uid,
  //       name: user.displayName,
  //       email: user.email,
  //       photo: user.photoURL,
  //     })
  //     persist.setPersist(res)
  //     router.push({ name: 'Home' })
  //   }).catch(error => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     console.log(errorCode)
  //     console.log(errorMessage)
  //     GoogleAuthProvider.credentialFromError(error);
  //   })
}
getRedirectResult(auth)
    .then((result) => {
      console.log('lol signed in')
      const credential = GoogleAuthProvider.credentialFromResult(result!);
      const token = credential!.accessToken;
      const user = result!.user
      setDoc(doc(db, 'users', user!.uid), {
        name: user!.displayName,
        email: user!.email,
        photo: user!.photoURL,
      })
      userStore.setUser({
        id: user.uid,
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
      localStorage['currentUser'] = JSON.stringify({
        id: user.uid,
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
      onAuthStateChanged(auth, (user) => {
        if (user) {
          persist.setPersist(user)
          router.push({ name: 'Home' })
        }
      })
    })
    .then((res) => {
      console.log('lol',res)
    })
    .catch((error) => {
      GoogleAuthProvider.credentialFromError(error);
    });


const signIn = () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      console.log('Signed in with email')
      console.log('data: ', data)
      router.push({ name: 'Home' })
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