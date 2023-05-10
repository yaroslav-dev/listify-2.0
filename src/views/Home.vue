<template>
  <v-container>
    <v-responsive>
      <div v-if="loading" class="loader-container">
        <v-progress-circular color="primary" size="60" indeterminate></v-progress-circular>
      </div>
      <ListCard v-else v-for="(list, index) in lists" :list="list" :key="index" @click="openList(list)" />
    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>
import ListCard from '@/components/card/ListCard.vue'
import { useRouter } from 'vue-router';
import { useAppStore } from '@/store/app';
import { useListsStore } from '@/store/lists';
import { onMounted } from 'vue';
import { computed } from 'vue';

const store = useAppStore()
onMounted(() => {
  store.setTitle('Lists')
})

const listsStore = useListsStore()
const lists = computed(() => {
  return listsStore.lists
})

let loading = computed(() => lists.value.length ? false : true)

const router = useRouter()
const openList = (obj: any) => {
  store.hideNavBar(true)
  listsStore.currentList = obj
  router.push({
    path: `/list/${obj.id}`,
    name: 'List',
  })
}
</script>

<style scoped>
.loader-container {
  width: 100%;
  height: calc(100vh - (64px + 56px + 32px));
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
