<template>
  <v-card class="col-md-6 my-2 d-flex align-center" color="#f8f6ff" elevation="0" density="default">
    <v-card-title class="px-0 pl-4 d-flex flex-grow-1">
      {{ list.title }}
      <v-spacer></v-spacer>
      <span class="count">
        {{ completed }}/{{ list.items.length }}</span>
    </v-card-title>
    <v-card-actions class="pl-0 py-0">
      <v-menu bottom left close-on-click v-if="true">
        <template v-slot:activator="{ props }">
          <v-btn icon v-bind="props" class="pr-0">
            <v-icon icon="more_vert"></v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item @click="deleteList()">
            <v-list-item-title>Delete</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn
      v-if="false"
        density="compact"
        class="ml-3 pl-2 mr-2  handle"
        icon="drag_indicator"
        @touchstart="vibro"
      ></v-btn>
    </v-card-actions>
  </v-card>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
const emit = defineEmits(['delete-list'])

const vibro = () => {
  setTimeout(() => {
    window.navigator.vibrate(50);
  }, 100);
};

const props = defineProps(['list'])

const completed = computed(() => {
  let comp = props.list.items.filter((item: any) => item.completed)
  return comp.length
})

const deleteList = () => {
  emit('delete-list', props.list.id)
}
</script>