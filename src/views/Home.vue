<template>
  <v-container>
    <v-responsive>
      <ListCard v-for="(list, index) in lists" :list="list" :key="index" @click="openList(list)" />
    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>
import ListCard from '@/components/card/ListCard.vue'
import { useRouter } from 'vue-router';
import { useAppStore } from '@/store/app';
import { useListsStore } from '@/store/lists';
import { onMounted, watch } from 'vue';
import { computed } from 'vue';

const store = useAppStore()

onMounted(() => {
  store.setTitle('Lists')
})

const listOfLists = useListsStore()

watch(listOfLists, () => {
  console.log('lists have been updated!')
}, {deep: true})

const lists = computed(() => {
  return listOfLists.lists[0]?.listCol
})

const router = useRouter()

const openList = (obj: {id: number, title: string, items: string[]}) => {
  router.push({
    path: `/list/${obj.id}`,
    name: 'List',
    query: {
      id: obj.id,
      title: obj.title
    },
  })
}
</script>
