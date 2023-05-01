<template>
  <v-card class="col-md-6 my-2 d-flex align-center" :color="itemColor" elevation="0" density="compact">
    <v-card-actions>
       <v-checkbox hide-details :ripple="false" color="primary" density="compact"></v-checkbox>
    </v-card-actions>
    <v-card-text>
      Bread
    </v-card-text>
    <v-card-actions>
      <v-btn density="compact" icon="drag_indicator"></v-btn>
    </v-card-actions>
  </v-card>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const itemColor = ref('#f8f6ff')
</script>