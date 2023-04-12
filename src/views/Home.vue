<template>
  <v-container>
    <v-responsive>
      <ListCard :lists="lists" />
    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>
  import ListCard from '@/components/card/ListCard.vue'
  import { useListsStore } from "@/store/lists";

  const lists = useListsStore()
</script>
