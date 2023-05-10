<template>
  <v-container class="container d-flex flex-column justify-space-between">
    <v-responsive v-if="list">
      <v-text-field density="compact" variant="plain" v-model="listsStore.currentList.title" hide-details></v-text-field>
      <transition-group>
        <ListItem v-for="(item, index) in list.items" :item="item" :key="index" />
      </transition-group>
    </v-responsive>
    <v-app-bar class="pt-0 px-3 pb-3" flat color="transparent" order="2" location="bottom">
      <TextField class="text-field" @add-item="addItem" />
    </v-app-bar>
  </v-container>
</template>
<script lang="ts" setup>
import { useAppStore } from '@/store/app';
import { useListsStore } from '@/store/lists';
import { onBeforeUnmount, onBeforeMount, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import TextField from '@/components/list/TextField.vue';
import ListItem from '@/components/list/ListItem.vue';

const router = useRouter()
const store = useAppStore()

onBeforeMount(() => {
  if (!Object.keys(listsStore.currentList).length) {
    router.push('/')
  }
})

const listsStore = useListsStore()

const list = ref()

onMounted(() => {
  list.value = listsStore.currentList
})

onBeforeUnmount(() => {
  listsStore.currentList = {}
  store.hideNavBar(false)
})

const addItem = (title: string) => {
  listsStore.addItem(title)
}
</script>
<style scoped>
.container {
  flex-grow: 1;
}

/* ми пояснимо, що ці класи роблять далі! */
.v-enter-active,
.v-leave-active {
  transition: opacity .3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>