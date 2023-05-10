<template>
  <v-text-field @update:focused="focus($event)" @focus="scrollDown()" @keydown.enter="addItem()" v-model="newItemTitle" bg-color="#fff" class="input" label="Add item" variant="outlined" color="secondary" hide-details>
    <template v-if="store.inputFocus && newItemTitle" #append-inner>
      <v-icon @click="addItem()" color="primary">add</v-icon>
    </template>
  </v-text-field>
</template>
<script setup lang="ts">
import { useAppStore } from '@/store/app';
import { onMounted, onUnmounted, ref } from 'vue';

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

const scroll = () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  })
}

const scrollDown = () => {
  setTimeout(() => {
    scroll()
    console.log('scroll')
  }, 500)
}

const newItemTitle = ref('')

const emit = defineEmits(['addItem'])
const addItem = () => {
  if (newItemTitle.value) {
    let title = newItemTitle.value
    emit('addItem', title)
    newItemTitle.value = ''
    setTimeout(() => {
      scroll()
    }, 0);
  }
}
</script>