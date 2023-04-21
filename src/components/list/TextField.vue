<template>
  <v-text-field @update:focused="hideKeyboard($event)" class="input" label="Add item" variant="outlined" color="#db89f9" append-inner-icon="add" hide-details></v-text-field>
</template>
<script setup lang="ts">
import { useAppStore } from '@/store/app';

const store = useAppStore()

if ('virtualKeyboard' in navigator) {
  // The VirtualKeyboard API is supported!
  // alert('virtual keyboard')
}

const hideKeyboard = (event: boolean) => {
  store.hideAppBar(event)
  if ('virtualKeyboard' in navigator) {
    // The VirtualKeyboard API is supported!
    alert(navigator.virtualKeyboard)
  }
}
</script>
<style scoped>
.v-field__outline {
  border-radius: 50% !important;
}
</style>