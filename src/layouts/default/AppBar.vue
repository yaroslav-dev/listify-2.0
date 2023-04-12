<template>
  <v-app-bar flat>
    <v-app-bar-title>
      <h3>Listify</h3>
    </v-app-bar-title>
    <v-spacer></v-spacer>
    <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer">
      <v-icon icon="notifications"></v-icon>
    </v-app-bar-nav-icon>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" location="top" app temporary>
    <v-list-item>
      Become a sponsor
    </v-list-item>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const drawer = ref<boolean>(false)
</script>
