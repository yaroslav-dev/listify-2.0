import { defineStore } from "pinia";
import { useCollection, useFirestore } from 'vuefire';
import { collection, doc } from 'firebase/firestore';
import { ref } from "vue";

const db = useFirestore()

export const useListsStore = defineStore('lists', () => {

    const lists = useCollection(collection(doc(collection(db, 'users'), 'sP3bh4BhXPkSaCFNZdC2'), 'lists'))

    const currentList = ref(<any>{})

    const addItem = (newTitle: any) => {
      currentList.value.items.push({
        title: newTitle,
        id: Date.now(),
        completed: false
      })
    }

    return {
      lists, currentList, addItem
    }
  },
)