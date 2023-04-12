<template>
  <v-card v-for="list in lists" :key="list.id" class="col-md-6 my-2 d-flex align-center" color="#f8f6ff" elevation="0" density="default">
    <v-card-title class="px-0 pl-4 d-flex flex-grow-1">
      {{ list.title }}
      <v-spacer></v-spacer>
      <span class="count">
        0/10</span>
    </v-card-title>
    <!-- <v-spacer></v-spacer> -->
    <v-card-actions class="px-0 py-0">
      <v-menu bottom left close-on-click close-on-content-click>
        <template v-slot:activator="{ props }">
          <v-btn icon v-bind="props">
            <v-icon icon="more_vert"></v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title class="delete">Delete</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-card-actions>
  </v-card>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue';
import { useFirestore, useCollection } from 'vuefire'
import { collection } from 'firebase/firestore'

const db = useFirestore()

const lists = useCollection(collection(db, 'lists'))

// const props = defineProps(['lists'])

onMounted(() => {
  console.log(useCollection(collection(db, 'lists')))
})

// const items = reactive(props.lists)

</script>
<style></style>