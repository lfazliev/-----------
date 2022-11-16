<script setup>
import RightComp from '@/components/RightComp.vue'
import LeftComp from '@/components/LeftComp.vue'
</script>

<template>
  <div class=main>
    <LeftComp></LeftComp>
    <RightComp></RightComp>
  </div>
</template>

<script>
import { useItemsStore } from "@/stores/items.js";
import { useListsStore } from "@/stores/lists.js";
import { useBlocksStore } from "@/stores/blocks.js";
import { mapStores } from "pinia";
export default {
  data() {
    return {
    }
  },
  methods: {
  },
  computed: {
    ...mapStores(useListsStore),
    ...mapStores(useItemsStore),
    ...mapStores(useBlocksStore),
    SortedLists() {
      const newLists = []
      for (let l of this.listsStore.lists) {
        let currentList = { id: l.id, items: [], button: l.button }
        if (currentList.button == true) {
          newLists.push(l)
        }
        else {
          for (let i of l.items) {
            if (i.checked) {
              currentList.items.push(i)
            }
          }
          newLists.push(currentList)
        }
      }
      return newLists
    },
  },
  beforeMount() {
    for (let i = 0; i < 5; i++) {
      this.listsStore.createLists(i);
    }
  },

}
</script>
