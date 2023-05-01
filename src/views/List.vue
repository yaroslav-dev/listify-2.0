<template>
  <v-container class="container d-flex flex-column justify-space-between">
    <v-responsive>
      <v-text-field density="compact" variant="plain" v-model="listsStore.currentList.title" hide-details></v-text-field>
      <ListItem v-for="index in 16" :key="index" />
    </v-responsive>
    <v-app-bar class="pt-0 px-3 pb-3" flat color="transparent" order="2" location="bottom">
      <TextField class="text-field" />
    </v-app-bar>
  </v-container>
</template>
<script lang="ts" setup>
import { useAppStore } from '@/store/app';
import { useListsStore } from '@/store/lists';
import { onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import TextField from '@/components/list/TextField.vue';
import ListItem from '@/components/list/ListItem.vue';
import { onBeforeMount } from 'vue';

const router = useRouter()
const store = useAppStore()
const listsStore = useListsStore()

onBeforeMount(() => {
  console.log('before mount')
})

onMounted(() => {
  if (!Object.keys(listsStore.currentList).length) {
    router.push('/')
  }
  // store.setTitle(listsStore.currentList.title)
  console.log('mounted')
})

onBeforeUnmount(() => {
  listsStore.currentList = {}
  store.hideNavBar(false)
})
</script>
<style scoped>
.container {
  flex-grow: 1;
}

/* .text-field {
  flex-grow: 0;
} */
</style>