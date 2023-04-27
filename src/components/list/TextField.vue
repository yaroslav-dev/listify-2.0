<template>
  <v-text-field class="input" label="Add item" variant="outlined" color="#db89f9" hide-details>
    <template v-if="store.keyboard" #append-inner>
      <v-icon @click="addItem">add</v-icon>
    </template>
  </v-text-field>
</template>
<script setup lang="ts">
import { useAppStore } from '@/store/app';
import { onMounted, onUnmounted } from 'vue';

const store = useAppStore()
onMounted(() => {
  store.hideNavBar(true)
})
onUnmounted(() => {
  store.hideNavBar(false)
})

const addItem = () => {
  console.log('added')
}
</script>
<style scoped>
.v-field__outline {
  border-radius: 50% !important;
}
</style>