<template>
  <div class="loader-container">
    <v-progress-circular size="70" width="5" color="primary" indeterminate ></v-progress-circular>
  </div>
</template>

<style scoped>
.loader-container {
  width: 100%;
  height: calc(100vh - (64px + 56px + 32px));
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>