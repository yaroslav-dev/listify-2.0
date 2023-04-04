<template>
  <v-app>
    <default-bar />

    <default-view />

    <default-nav />
  </v-app>
</template>

<script lang="ts" setup>
  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'
  import DefaultNav from "./BottomNav.vue"
</script>
