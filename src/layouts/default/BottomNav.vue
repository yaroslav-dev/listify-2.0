<template>
  <v-bottom-navigation v-model="navState" mandatory="force" mode="shift" color="#db88fa" grow>
    <v-btn @click="navToRoute('Home')" value="Home">
      <v-icon>list</v-icon>
      <span>Lists</span>
    </v-btn>

    <v-btn @click="navToRoute('Timer')" value="Timer">
      <v-icon>timer</v-icon>
      <span>Timer</span>
    </v-btn>

    <v-btn @click="navToRoute('Settings')" value="Settings">
      <v-icon>settings</v-icon>
      <span>Settings</span>
    </v-btn>
  </v-bottom-navigation>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter()
const route = useRoute()

const navToRoute = (value: string) => {
  router.push({name: value})
}

const navState = computed({
  get() {
    return route.name
  },
  set() {}
})

</script>