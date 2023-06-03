<script setup>
import RightComp from './components/RightComp.vue'
import LeftComp from './components/LeftComp.vue'
</script>

<template>
  <a href="/hom/vuemodul/index.html">Back</a>
  <div class=main>
    <LeftComp></LeftComp>
    <RightComp></RightComp>
  </div>
</template>

<script>
import { useListsStore } from "./stores/lists";
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
