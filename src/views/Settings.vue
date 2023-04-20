<template>
  <v-container style="height: 80vh;" class="d-flex flex-column justify-center align-center">
    <div class="text-h3">
      Settings
    </div>
  </v-container>
</template>
<script lang="ts" setup>
import { useAppStore } from '@/store/app';
import { onMounted } from 'vue';

const store = useAppStore()

onMounted(() => {
  store.setTitle('Settings')
})
</script>