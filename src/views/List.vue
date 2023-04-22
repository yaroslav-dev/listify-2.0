<template>
  <v-container class="container d-flex flex-column justify-space-between">
    <v-responsive>
      <h3>Lol</h3>
    </v-responsive>
    <!-- <v-app-bar order="1" class="input-bar pa-3" location="bottom" flat> -->
      <TextField class="text-field" />
    <!-- </v-app-bar> -->
  </v-container>
</template>
<script lang="ts" setup>
import { useAppStore } from '@/store/app';
import { onMounted, onBeforeUnmount } from 'vue';
import { useRoute } from 'vue-router';
import TextField from '@/components/list/TextField.vue';

const route = useRoute()
const store = useAppStore()

onMounted(() => {
  store.setTitle(route.query.title)
})
onBeforeUnmount(() => {
  store.hideAppBar(false)
})
</script>
<style scoped>
.container {
  height: 85vh;
}
.text-field {
  flex-grow: 0;
}
.input-bar {
  height: 85px;
}
</style>