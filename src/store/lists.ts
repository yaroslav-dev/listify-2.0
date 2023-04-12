import { defineStore } from "pinia";
import { ref } from "vue";

export const useListsStore = defineStore('lists', () => {
  const lists = ref([
    {
      title: 'List 1',
      id: 1
    },
    {
      title: 'List 2',
      id: 2
    },
    {
      title: 'List 3',
      id: 3
    },
  ])

  return { lists }
})