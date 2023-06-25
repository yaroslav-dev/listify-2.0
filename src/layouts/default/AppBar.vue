<template>
  <v-app-bar flat>
    <v-fade-transition group hide-on-leave>
      <div key="0" v-if="isListPage" class="btn_cont ml-3">
        <v-app-bar-nav-icon>
          <v-btn icon="arrow_back" @click="router.push('/')"></v-btn>
        </v-app-bar-nav-icon>
      </div>
      <v-app-bar-title key="1" v-else>
        <h3>{{ appStore.pageTitle }}</h3>
      </v-app-bar-title>
      <v-spacer key="2"></v-spacer>
      <v-btn key="3" v-if="isListPage" @click="router.push('/')" color="primary">done</v-btn>
      <v-app-bar-nav-icon key="4" v-else variant="text" @click.stop="drawer = !drawer">
        <v-badge :color="showBadge" location="bottom right" dot>
          <v-avatar :image="userAvatar()" icon="account_circle" size="32"></v-avatar>
        </v-badge>
      </v-app-bar-nav-icon>
    </v-fade-transition>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" location="top" width="155" elevation="0" app temporary>
    <v-list-item class="mb-2"> 
      <v-list-item-title class="d-flex align-center">
        <v-icon class="mr-2" icon="notifications"></v-icon>
        Notifications
        <v-badge
          v-if="notificationsQuantity"
          class="ml-1"
          color="error"
          :content="notificationsQuantity"
          inline
        ></v-badge>
      </v-list-item-title>
    </v-list-item>
    <v-list-item class="mb-2"> 
      <v-list-item-title class="d-flex">
        <v-icon class="mr-2" icon="settings"></v-icon>
        Settings
      </v-list-item-title>
    </v-list-item>
    <v-divider></v-divider>
    <v-list-item class="my-2" @click="signOutFromAcc"> 
      <v-list-item-title class="d-flex">
        <v-icon class="mr-2" icon="logout"></v-icon>
        Logout
      </v-list-item-title>
    </v-list-item>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/store/app';
import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { signOut, getAuth } from "firebase/auth";

const userAvatar = () => {
  try {
    return JSON.parse(localStorage['currentUser']).photo
  } catch (err) {
    return undefined
  }
}

const appStore = useAppStore()

const drawer = ref<boolean>(false)

const route = useRoute()
const router = useRouter()

const isListPage = computed(() => route.path === '/list')

const notificationsQuantity = computed(() => 12)
const showBadge = computed(() => {
  if (notificationsQuantity.value) {
    return 'error'
  } else {
    return 'transparent'
  }
})

const auth = getAuth()

const signOutFromAcc = () => {
  signOut(auth).then(() => {
    delete localStorage['currentUser']
    console.log('Signed out')
    router.push({name: 'Login'})
  }).catch(error => {
    console.warn(error)
  })
}

</script>