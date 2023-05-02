<template>
  <v-card class="col-md-6 my-2 d-flex align-center" :color="itemColor" elevation="0" density="compact">
    <v-card-actions>
       <v-checkbox v-model="listItem.completed" :ripple="false" color="primary" density="compact" hide-details></v-checkbox>
    </v-card-actions>
    <v-card-text>
      {{ listItem.title }}
    </v-card-text>
    <v-card-actions>
      <v-btn density="compact" icon="drag_indicator"></v-btn>
    </v-card-actions>
  </v-card>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue';

const props = defineProps(['item'])

const listItem = computed(() => props.item)

const itemColor = ref('#f8f6ff')
</script>