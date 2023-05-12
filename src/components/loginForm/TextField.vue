<template>
  <v-text-field class="input" validate-on="blur" :type="inputType" :label="labelCap" variant="outlined" color="#db89f9" density="compact"></v-text-field>
</template>
<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps(['inputType'])

const labelCap = computed(() => {
  return props.inputType.charAt(0).toUpperCase() + props.inputType.slice(1)
})

</script>
<style scoped>
.v-field__outline {
  border-radius: 50% !important;
}
.input {
  width: 100%;
}
</style>