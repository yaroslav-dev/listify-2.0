<template>
  <v-text-field @update:focused="focus($event)" @focus="scrollDown()" bg-color="#fff" class="input" label="Add item" variant="outlined" color="#db89f9" hide-details>
    <template v-if="store.inputFocus" #append-inner>
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
  store.setFocus(false)
})

const focus = (event: boolean) => {
  store.setFocus(event)
}

const scrollDown = () => {
  setTimeout(function () {
    window.scrollTo({
      top: 9999,
      behavior: "smooth",
    });
    console.log('scroll')
  }, 1000);
}

const addItem = () => {
  console.log('added')
}
</script>