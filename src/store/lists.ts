import { defineStore } from "pinia";
import { ref } from "vue";
import { useFirestore } from '@vueuse/firebase/useFirestore'
import { collection, doc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "@/firebase";

const auth = getAuth()

export const useListsStore = defineStore('lists', () => {
    
    const lists = ref()

    const getLists = async () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
         lists.value = useFirestore(collection(doc(db, 'users', user.uid), 'lists'))
        } else {
          lists.value = []
        }
      })
    }

    const setLists = (value: any) => {
      lists.value = value
    }

    const currentList = ref({}) as any

    const addItem = (newTitle: any, color: string) => {
      currentList.value.items.push({
        title: newTitle,
        id: Date.now(),
        completed: false,
        color
      })
    }

    const deleteItem = (id: number) => {
      currentList.value.items = currentList.value.items.filter((item: any) => item.id != id)
    }

    return {
      lists, currentList, addItem, setLists, getLists, deleteItem
    }
  },
)