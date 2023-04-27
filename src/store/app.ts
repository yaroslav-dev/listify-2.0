// Utilities
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {

  const pageTitle = ref('Listify')
  const setTitle = (newTitle: string) => {
    pageTitle.value = newTitle
  }
  
  const keyboard = ref(false)
  const hideNavBar = (hide: boolean) => {
    keyboard.value = hide
  }

  return {
    pageTitle, keyboard, setTitle, hideNavBar
  }
})
