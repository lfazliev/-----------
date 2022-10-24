<script setup>
</script>

<template>
  <div>
    <div v-for="l of listsStore.lists" :key="l.i">
      {{ l.i }}
      <div v-for="i of l.items" :key="i">
        {{ i.count }} {{ i.color }}
      </div>
    </div>
  </div>
</template>

<script>
import { useItemsStore } from '@/stores/items'
import { useListsStore } from '@/stores/lists'
import { mapStores } from 'pinia'
export default {
  computed: {
    ...mapStores(useListsStore),
    ...mapStores(useItemsStore)
  },
  beforeMount() {
    this.itemsStore.createItems()
    for (let i = 0; i < 5; i++) {
      this.listsStore.createLists(i, this.itemsStore.createItems())
    }
  },
}
</script>


<style scoped>
</style>