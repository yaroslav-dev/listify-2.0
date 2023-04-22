<template>
  <v-main class="d-flex flex-column ">
    <router-view v-slot="{ Component }">
      <transition name="lol" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </v-main>
</template>

<script lang="ts" setup>
  //
</script>
<style scoped>
.lol-enter-active,
.lol-leave-active {
  transition: opacity .1s ease;
}

.lol-enter-from,
.lol-leave-to {
  opacity: 0;
}
</style>
