<template>
  <v-container class="container d-flex flex-column justify-space-between">
    <v-responsive>
      <h3>Lol</h3>
    </v-responsive>
    <TextField class="text-field" />
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
  flex-grow: 1;
}

.text-field {
  flex-grow: 0;
}
</style>