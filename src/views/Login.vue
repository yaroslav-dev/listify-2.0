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
import { onBeforeMount, ref } from 'vue';
import { doc, setDoc } from 'firebase/firestore';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithRedirect, getRedirectResult } from "firebase/auth";
import { db, auth } from '@/firebase'
import { useRouter } from 'vue-router';
import { usePersist } from '@/store/persist';

const store = useAppStore()
const userStore = useUserStore()
const persist = usePersist()

const router = useRouter()

const email = ref('')
const password = ref('')

const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider()
  signInWithRedirect(auth, provider)
}

getRedirectResult(auth).then((result: any) => {
  console.log('result start')
  const credential = GoogleAuthProvider.credentialFromResult(result);
  const token = credential?.accessToken;
  const user = result!.user!;
  setDoc(doc(db, 'users', user.uid), {
    name: user.displayName,
    email: user.email,
    photo: user.photoURL,
  })
  console.log('set doc')
  userStore.setUser({
    id: user.uid,
    name: user.displayName,
    email: user.email,
    photo: user.photoURL,
  })
  console.log('set user')
  localStorage['currentUser'] = JSON.stringify({
    id: user.uid,
    name: user.displayName,
    email: user.email,
    photo: user.photoURL,
  })
  console.log('set localstorage')
  persist.setPersist(user)
  console.log('persist')
  localStorage['userAuth'] = JSON.stringify(user)
}).then(() => {
  router.push({ name: 'Home' })
}).catch((error) => {
  console.log(error.message)
})

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