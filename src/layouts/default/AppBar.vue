<template>
  <v-app-bar flat>
    <v-app-bar-title>
      <h3>Listify</h3>
    </v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn icon="notifications"></v-btn>
    <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer">
      <!-- <v-icon icon="mdi-tune"></v-icon> -->
      <v-icon icon="settings"></v-icon>
    </v-app-bar-nav-icon>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" location="top" app temporary>
    <v-list :items="items"></v-list>
    <v-divider></v-divider>
    <v-list-item>
      Become a sponsor
    </v-list-item>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'

const drawer = ref<boolean>(false)

interface Items {

}
const items = reactive(
  [
    {
      title: 'Sign in',
      value: 'signIn',
    },
    {
      title: 'Settings',
      value: 'settings',
    },
  ]
)
</script>
