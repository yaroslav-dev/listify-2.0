<template>
  <v-bottom-navigation :height="!store.keyboard ? 56 : 0" :style="{bottom: store.keyboard ? '-56px' : '0'}" v-model="navState" mandatory="force" mode="shift" color="#db88fa" grow>
    <v-btn @click="navToRoute('Home')" :value="navValue">
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
import { useAppStore } from '@/store/app';
import { computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const store = useAppStore()

const router = useRouter()
const route = useRoute()

const navToRoute = (value: string) => {
  router.push({name: value})
}

const navValue = computed({
  get() {
    return route.name == 'Home' ? 'Home' : 'List'
  },
  set() {}
})

const navState = computed({
  get() {
    return route.name
  },
  set() {}
})

</script>