<template>
  <v-app-bar flat>
    <transition name="fade" mode="out-in">
    <v-app-bar-title>
        <h3>{{ appStore.pageTitle }}</h3>
      </v-app-bar-title>
    </transition>
    <v-spacer></v-spacer>
    {{ view + 'px' }}
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

const drawer = ref<boolean>(false)

const view = computed(() => {
  return window.innerHeight
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
