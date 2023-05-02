<template>
  <v-container class="container d-flex flex-column justify-space-between">
    <v-responsive>
      <v-text-field density="compact" variant="plain" v-model="listsStore.currentList.title" hide-details></v-text-field>
      <ListItem v-for="(item, index) in list.items" :item="item" :key="index" />
    </v-responsive>
    <v-app-bar class="pt-0 px-3 pb-3" flat color="transparent" order="2" location="bottom">
      <TextField class="text-field" />
    </v-app-bar>
  </v-container>
</template>
<script lang="ts" setup>
import { useAppStore } from '@/store/app';
import { useListsStore } from '@/store/lists';
import { onBeforeUnmount, onBeforeMount, ref } from 'vue';
import { useRouter } from 'vue-router';
import TextField from '@/components/list/TextField.vue';
import ListItem from '@/components/list/ListItem.vue';

const router = useRouter()

onBeforeMount(() => {
  if (!Object.keys(listsStore.currentList).length) {
    router.push('/')
  }
})

const store = useAppStore()
const listsStore = useListsStore()

const list = ref(listsStore.currentList)

onBeforeUnmount(() => {
  listsStore.currentList = {}
  store.hideNavBar(false)
})
</script>
<style scoped>
.container {
  flex-grow: 1;
}
</style>