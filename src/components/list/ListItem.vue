<template>
  <v-card class="col-md-6 my-2 d-flex align-center" :color="listItem.color || '#f8f6ff'" :ripple="false" elevation="0" density="compact" @click.stop="editItem">
    <v-card-actions>
      <v-checkbox v-model="listItem.completed" @click.stop :ripple="false" color="primary" density="compact"
        hide-details></v-checkbox>
    </v-card-actions>
    <v-card-text>
      {{ listItem.title }}
    </v-card-text>
    <v-card-actions>
      <v-btn density="compact" icon="drag_indicator"></v-btn>
    </v-card-actions>
    <v-dialog transition="dialog-bottom-transition" v-model="dialog" fullscreen>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon="close" @click="discard"></v-btn>
          <v-toolbar-title>Edit item</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon="done" @click="saveItem"></v-btn>
        </v-toolbar>
        <v-form class="ma-4">
          <div class="text-h6">Title</div>
          <v-text-field bg-color="#f8f6ff" color="primary" density="compact" v-model="tempTitle"></v-text-field>
          <div class="text-h6">Background color</div>
          <v-color-picker class="mx-auto" v-model="tempColor" hide-canvas hide-inputs hide-sliders show-swatches :swatches="swatches" elevation="0"></v-color-picker>
          <div class="d-flex mt-4">
            <v-btn prepend-icon="delete" class="mx-auto" color="error" variant="text" @click="removeItem">
              Delete item
            </v-btn>
          </div>
        </v-form>
        <v-card-actions>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue';

const emit = defineEmits(['delete-item'])

const props = defineProps(['item'])

const listItem = computed(() => props.item)

const tempTitle = ref('')

const swatches = [
  ['#FFCDD2', '#BBDEFB', '#DCEDC8'],
  ['#F8BBD0', '#B3E5FC', '#F0F4C3'],
  ['#E1BEE7', '#B2EBF2', '#FFF9C4'],
  ['#D1C4E9', '#B2DFDB', '#FFECB3'],
  ['#C5CAE9', '#C8E6C9', '#FFE0B2'],
]

const tempColor = ref('')

const dialog = ref(false)

const discard = () => {
  dialog.value = false
  tempTitle.value = `${listItem.value.title}`
  tempColor.value = `${listItem.value.color}`
}

const saveItem = () => {
  dialog.value = false
  listItem.value.title = `${tempTitle.value}`
  listItem.value.color = `${tempColor.value}`
}

const editItem = () => {
  tempTitle.value = `${listItem.value.title}`
  tempColor.value = `${listItem.value.color}`
  dialog.value = true
}

const removeItem = () => {
  emit('delete-item', listItem.value.id)
  dialog.value = false
}
</script>