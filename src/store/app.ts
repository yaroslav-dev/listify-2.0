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

  const inputFocus = ref(false)
  const setFocus = (focus: boolean) => {
    inputFocus.value = focus
  }

  return {
    pageTitle, keyboard, inputFocus, setTitle, hideNavBar, setFocus
  }
})
