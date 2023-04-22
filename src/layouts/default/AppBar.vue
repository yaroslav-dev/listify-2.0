<template>
  <v-app-bar absolute flat>
    <v-app-bar-title>
      <h3>{{ appStore.pageTitle }}</h3>
    </v-app-bar-title>
    <v-spacer></v-spacer>
    {{ height }}
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
import { useAppStore } from '@/store/app';
import { computed } from 'vue';
import { ref } from 'vue'

const appStore = useAppStore()

const height = computed(() => window.innerHeight)

const drawer = ref<boolean>(false)

document.documentElement.style.setProperty('overflow', 'auto')
const metaViewport = document.querySelector('meta[name=viewport]')

metaViewport?.setAttribute('content', 'height=' + height.value + 'px, width=device-width, initial-scale=1.0')

</script>
