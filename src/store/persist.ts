import { defineStore } from "pinia";
import { ref } from "vue";

export const usePersist = defineStore('persist', () => {

  const persist = ref({})

  const setPersist = (newPersist: any) => {
    persist.value = newPersist
  }

  return { persist, setPersist }
})