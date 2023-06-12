import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore('user', () => {
  const user = ref({})

  const setUser = (newUser: object) => {
    user.value = newUser
  }

  return {
    user, setUser
  }
})