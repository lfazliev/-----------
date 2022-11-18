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
import { useListsStore } from "@/stores/lists.js";
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
  },
  beforeMount() {
    for (let i = 0; i < 5; i++) {
      this.listsStore.createLists(i);
    }
  },

}
</script>
