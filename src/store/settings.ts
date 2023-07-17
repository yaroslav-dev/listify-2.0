import { defineStore } from "pinia";
import { ref } from "vue";

export const useSettingsStore = defineStore('settings', () => {
  const generalSettings = ref([
    {
      value: "top_starred",
      title: "Move starred list on top",
      state: false,
    },
    {
      value: "confirm_delete",
      title: "Confirm before deleting",
      state: false,
    },
    {
      value: "use_tags",
      title: "Use tags",
      state: false,
    },
  ])

  const notificationSettings = ref([
    {
      value: "shared_list",
      title: "Shared list",
      state: false,
    },
    {
      value: "due_today",
      title: "Due today",
      state: false,
    },
  ])

  return {
    generalSettings,
    notificationSettings,
  }
})