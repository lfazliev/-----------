<script setup>

</script>

<template>
  <div>
    <div v-for="l of listsStore" :key="l.i">
      {{ l.i }}
      <div v-for="i of itemsStore" :key="i">
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
  onBeforeMount() {
    this.itemsStore.createItems(this.itemsStore.$state)
    console.log(this.itemsStore.items)

    for (let i = 0; i < 5; i++) {
      this.listsStore.createLists(this.listsStore.$state, i, this.itemsStore.createItems(this.itemsStore.$state))
    }
    console.log(this.listsStore.lists)
  },
}
</script>


<style scoped>

</style>
