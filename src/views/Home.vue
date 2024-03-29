<template>
  <v-container class="pb-0">
    <v-responsive>
      <Loader v-if="lists && !listsLength && !delayedShow" />
      <template v-else-if="lists && listsLength">
        <draggable
          class="dragArea list-group w-full"
          :list="lists.value"
          handle=".handle"
          v-bind="dragOptions"
          @change="log"
        >
          <ListCard v-for="(list, index) in lists.value" :list="list" :key="index" :ripple="false" @click="openList(list)" @delete-list="deleteList(list.id)" />
        </draggable>
      </template>
      <v-alert v-else border="start">
        No data.
      </v-alert>
    </v-responsive>
    <v-app-bar color="rgba(255,255,255,0.95)" order="1" location="bottom" density="compact" flat floating>
      <v-btn color="primary" prepend-icon="add" @click="addList">
        new list
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn color="primary" icon="filter_list" density="comfortable">
      </v-btn>
    </v-app-bar>
  </v-container>
</template>

<script lang="ts" setup>
import { useCurrentUser } from 'vuefire';
import ListCard from '@/components/card/ListCard.vue'
import Loader from '@/components/card/Loader.vue';
import { collection, deleteDoc, doc } from 'firebase/firestore';
import { useRouter } from 'vue-router';
import { useAppStore } from '@/store/app';
import { useListsStore } from '@/store/lists';
import { onBeforeMount, onMounted, computed, ref, watch } from 'vue';
import { db } from '@/firebase'
import { VueDraggableNext as draggable } from "vue-draggable-next";

const log = (event: any) => {
  console.log(event);
};

const dragOptions = computed(() => {
  return {
    animation: 200,
    group: "description",
    disabled: false,
    ghostClass: "ghost",
    delay: 100,
  };
});

const listsStore = useListsStore()
const listsLength = ref(0)
const lists = computed(() => {
  return listsStore.lists
})
const delayedShow = ref(false)
watch(listsStore, () => {
  listsLength.value = listsStore.lists?.value?.length
  setTimeout(() => {
    delayedShow.value = true
  }, 1000);
})

const store = useAppStore()
onBeforeMount(() => {
  store.hideNavBar(false)
})
onMounted(() => {
  listsStore.getLists()
  store.setTitle('Lists')
})
const addList = () => {
  openList({})
}

const user = useCurrentUser()
const router = useRouter()
const openList = (obj: any) => {
  if (!Object.keys(obj).length) {
    store.hideNavBar(true)
    let newList = {
      id: Date.now(),
      items: [],
      title: 'New list',
    }
    listsStore.currentList = newList
    router.push({
      path: `/list/${newList.id}`,
      name: 'List',
    })
  } else {
    store.hideNavBar(true)
    listsStore.currentList = obj
    router.push({
      path: `/list/${obj.id}`,
      name: 'List',
    })
  }
}

const deleteList = async (id: number) => {
  await deleteDoc(doc(collection(doc(collection(db, 'users'), user.value?.uid), 'lists'), `${id}`))
}
</script>
