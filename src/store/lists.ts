import { defineStore } from "pinia";
import { listsRef } from '@/firebase';
import { useCollection } from 'vuefire'

export const useListsStore = defineStore('lists', {
  state: () => {
    return {
      lists: useCollection(listsRef),
    }
  },
})