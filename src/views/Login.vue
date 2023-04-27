<template>
  <v-container class="container">
    <v-form class="form">
      <h3 class="form-head mb-3">Sign in</h3>
      <TextField :inputType="'email'" />
      <TextField :inputType="'password'" />
      <v-btn size="large" variant="flat" color="primary" block>
        Sign in
      </v-btn>
      <span class="my-2">or</span>
      <v-btn size="large" variant="outlined" block>
        <v-img src="../assets/Google__G__Logo.svg.webp" width="23" height="23" class="mr-3"></v-img>
        Sign in with Google
      </v-btn>
      <a href="#" class="sign-up mt-2">
        <span color="primary">Sign up</span>
      </a>
    </v-form>
  </v-container>
</template>
<script lang="ts" setup>
import TextField from '@/components/loginForm/TextField.vue';
import { useAppStore } from '@/store/app';
import { onBeforeUnmount, onBeforeMount } from 'vue';

const store = useAppStore()

onBeforeMount(() => {
  store.hideNavBar(true)
})
onBeforeUnmount(() => {
  store.hideNavBar(false)
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