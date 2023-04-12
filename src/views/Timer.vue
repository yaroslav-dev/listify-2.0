<template>
  <v-container style="height: 80vh;" class="d-flex flex-column justify-center align-center">
    <div class="text-h3 mb-8">Timer</div>
    <v-progress-circular model-value="25" :size="220" :width="8" class="text-h4">25:00</v-progress-circular>
    <div class="action-btns mt-8">
      <v-btn rounded class="mr-4" icon="pause"></v-btn>
      <v-btn rounded class="mr-4" icon="play_arrow"></v-btn>
      <v-btn rounded icon="stop"></v-btn>
    </div>
  </v-container>
</template>
<script lang="ts" setup>

</script>
<style></style>