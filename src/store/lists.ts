import { defineStore } from "pinia";
import { ref } from "vue";
import { useFirestore } from '@vueuse/firebase/useFirestore'
import { collection, doc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "@/firebase";

const auth = getAuth()

export const useListsStore = defineStore('lists', () => {
    
    const lists = ref()

    const getLists = () => {
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

    const addItem = (newTitle: any) => {
      currentList.value.items.push({
        title: newTitle,
        id: Date.now(),
        completed: false
      })
    }

    return {
      lists, currentList, addItem, setLists, getLists
    }
  },
)