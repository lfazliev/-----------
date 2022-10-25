<script setup>
</script>

<template>
  <ul>
    <li v-for="l of listsStore.lists" :key="l.i">
      <input type="checkbox">{{ l.i }}
      <ul>
        <li v-for="i of l.items" :key="i"><input type="checkbox">{{ i.count }} {{ i.color }}
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
import { useItemsStore } from '@/stores/items'
import { useListsStore } from '@/stores/lists'
import { mapStores } from 'pinia'
export default {
  data() {

  },
  methods: {

  },
  computed: {
    ...mapStores(useListsStore),
    ...mapStores(useItemsStore),
  },
  beforeMount() {
    this.itemsStore.createItems()
    for (let i = 0; i < 1; i++) {
      this.listsStore.createLists(i, this.itemsStore.createItems())
    }
  },
}
</script>


<style scoped>
ul {
  list-style: none;
  ;
}
</style>