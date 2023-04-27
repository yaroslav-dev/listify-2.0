<template>
  <v-container class="container d-flex flex-column justify-space-between">
    <v-responsive>
      <h3>{{ listsStore.currentList.title }}</h3>
    </v-responsive>
    <TextField class="text-field" />
  </v-container>
</template>
<script lang="ts" setup>
import { useAppStore } from '@/store/app';
import { useListsStore } from '@/store/lists';
import { onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import TextField from '@/components/list/TextField.vue';

const router = useRouter()
const store = useAppStore()
const listsStore = useListsStore()

onMounted(() => {
  if (!Object.keys(listsStore.currentList).length) {
    router.push('/')
  }
  store.setTitle(listsStore.currentList.title)
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

.text-field {
  flex-grow: 0;
}
</style>