// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    pageTitle: 'lol',
    keyboard: false
  }),
  actions: {
    setTitle(newTitle: any) {
      this.pageTitle = newTitle
    },
    hideAppBar(hide: boolean) {
      this.keyboard = hide
      console.log('hide app bar ', hide)
    }
  },
})
