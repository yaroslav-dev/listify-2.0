<template>
  <v-container class="container d-flex flex-column justify-space-between">
    <v-responsive v-if="list">
      <v-text-field
        :autofocus="focusIfNewTitle"
        density="compact"
        bg-color="#fff"
        color="primary"
        v-model="listsStore.currentList.title"
        clear-icon="close"
        clearable
        hide-details
      ></v-text-field>
      <draggable
        class="dragArea list-group w-full"
        :list="list.items"
        handle=".handle"
        v-bind="dragOptions"
        @change="log"
      >
        <transition-group>
          <ListItem
            v-for="(item, index) in list.items"
            :item="item"
            :key="index"
            @delete-item="deleteItem"
          />
        </transition-group>
      </draggable>
    </v-responsive>
    <v-app-bar
      class="pt-0 px-3 pb-3"
      flat
      color="transparent"
      location="bottom"
    >
      <TextField class="text-field" @add-item="addItem" />
    </v-app-bar>
  </v-container>
</template>
<script lang="ts" setup>
import { useAppStore } from "@/store/app";
import { useListsStore } from "@/store/lists";
import {
  onBeforeUnmount,
  onBeforeMount,
  onMounted,
  onUnmounted,
  ref,
  watch,
  computed,
} from "vue";
import { useRouter } from "vue-router";
import TextField from "@/components/list/TextField.vue";
import ListItem from "@/components/list/ListItem.vue";
import { useFirestore } from "vuefire";
import { collection, doc, setDoc } from "firebase/firestore";
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

const itemColor = ref("#f8f6ff");

const router = useRouter();
const store = useAppStore();
const listsStore = useListsStore();

const isCurrentListExists = ref(Object.keys(listsStore.currentList).length);

onBeforeMount(() => {
  if (!isCurrentListExists.value) {
    router.push("/");
  }
});

const list = ref();

onMounted(() => {
  if (isCurrentListExists.value) {
    list.value = listsStore.currentList;
  }
});

const focusIfNewTitle = computed(() => {
  return !list.value.items.length;
});

onBeforeUnmount(() => {
  listsStore.currentList = {};
});

onUnmounted(() => {
  store.hideNavBar(false);
});

const fire = useFirestore();
const currentUser = JSON.parse(localStorage["currentUser"]);

watch(
  list,
  () => {
    if (isCurrentListExists.value) {
      setDoc(
        doc(
          collection(doc(collection(fire, "users"), currentUser.id), "lists"),
          `${list.value.id}`
        ),
        list.value
      );
    }
  },
  { deep: true }
);

const addItem = (title: string) => {
  listsStore.addItem(title, itemColor.value);
};

const deleteItem = (id: number) => {
  listsStore.deleteItem(id);
};
</script>
<style scoped>
.container {
  flex-grow: 1;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
