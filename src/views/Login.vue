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
    <v-overlay
      :model-value="loader"
      class="align-center justify-center"
      :close-on-content-click="false"
      :persistent="true"
      scrim="#fff"
    >
    <v-progress-circular size="70" width="5" color="primary" indeterminate ></v-progress-circular>
    </v-overlay>
    <v-snackbar v-model="errorAlert" color="red-darken-1">Something went wrong</v-snackbar>
  </v-container>
</template>
<script lang="ts" setup>
import TextField from '@/components/loginForm/TextField.vue';
import { useAppStore } from '@/store/app';
import { onBeforeMount, onMounted, ref } from 'vue';
import { doc, setDoc } from 'firebase/firestore';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithRedirect, getRedirectResult } from "firebase/auth";
import { db, auth } from '@/firebase'
import { useRouter } from 'vue-router';
import { computed } from 'vue';

const store = useAppStore()

const router = useRouter()

const email = ref('')
const password = ref('')

const localLoading = ref(localStorage['loading'])

const errorAlert = ref(false)

const loader = computed(() => {
  return localLoading.value == 'true' ? true : false
})

const authError = (timeout: number) => {
  setTimeout(() => {
    if (loader.value) {
      localStorage['loading'] = false
      localLoading.value = 'false'
      errorAlert.value = true
    }
  }, timeout)
}

const signInWithGoogle = async () => {
  localStorage['loading'] = 'true'
  const provider = new GoogleAuthProvider()
  await signInWithRedirect(auth, provider)
  try {
    const result = await getRedirectResult(auth)
    if (result) {
      console.log(result)
      localStorage['loading'] = false
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user
      setDoc(doc(db, 'users', user.uid), {
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
      localStorage['currentUser'] = JSON.stringify({
        id: user.uid,
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        accessToken: token
      })
      router.push({ name: 'Home' })
    } else {
      console.log('Error: Something went wrong.')
      authError(1000)
    }
  } catch (error) {
    alert(error)
    authError(1000)
  }
}

// onMounted(async () => {
//   // maybe without async?
//   try {
//     const result = await getRedirectResult(auth)
//     if (result) {
//       console.log(result)
//       localStorage['loading'] = false
//       const credential = GoogleAuthProvider.credentialFromResult(result);
//       const token = credential?.accessToken;
//       const user = result.user
//       setDoc(doc(db, 'users', user.uid), {
//         name: user.displayName,
//         email: user.email,
//         photo: user.photoURL,
//       })
//       localStorage['currentUser'] = JSON.stringify({
//         id: user.uid,
//         name: user.displayName,
//         email: user.email,
//         photo: user.photoURL,
//         accessToken: token
//       })
//       router.push({ name: 'Home' })
//     } else {
//       console.log('Error: Something went wrong.')
//       authError(1000)
//     }
//   } catch (error) {
//     alert(error)
//     authError(1000)
//   }
//   authError(10000)
// })


const signIn = () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      router.push({ name: 'Home' })
    })
}

onBeforeMount(() => {
  store.hideNavBar(true)
  if (!localStorage['loading']) {
    localStorage['loading'] = false
  }
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