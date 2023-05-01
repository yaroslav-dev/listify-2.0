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
      <v-btn key="3" v-if="isListPage" @click="router.push('/')">done</v-btn>
      <v-app-bar-nav-icon key="4" v-else variant="text" @click.stop="drawer = !drawer">
        <v-icon icon="notifications"></v-icon>
      </v-app-bar-nav-icon>
    </v-fade-transition>
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
import { useRoute, useRouter } from 'vue-router';

const appStore = useAppStore()

const drawer = ref<boolean>(false)

const route = useRoute()
const router = useRouter()

const isListPage = computed(() => route.path === '/list')

</script>