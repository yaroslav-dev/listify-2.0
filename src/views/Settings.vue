<template>
  <v-container style="height: 80vh;" class="container">
    <v-form class="form">
      <v-btn size="large" variant="flat" color="primary" block @click="signOutFromAcc">
        Sign out
      </v-btn>
    </v-form>
  </v-container>
</template>
<script lang="ts" setup>
import { useAppStore } from '@/store/app';
import { onMounted } from 'vue';
import { signOut } from "firebase/auth";
import { useFirebaseAuth } from 'vuefire';
import { useRouter } from 'vue-router';

const store = useAppStore()

onMounted(() => {
  store.setTitle('Settings')
})

const auth = useFirebaseAuth()!
const router = useRouter()

const signOutFromAcc = () => {
  signOut(auth).then(() => {
    delete localStorage['currentUser']
    console.log('Signed out')
  }).then(() => {
    router.push({name: 'Login'})
  }).catch(error => {
    console.warn(error)
  })
}
</script>
<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>