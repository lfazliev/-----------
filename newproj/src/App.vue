<script setup></script>

<template>
  <div>
    <ul>
      <li v-for="l of listsStore.lists" :key="l.i">
        <input type="checkbox" :id="l.i" @change="checkedfunk(l.i)">
        <label :for="l.i">
          {{ l.i }}
        </label>
        <ul>
          <li v-for="i of l.items" :key="i.i">
            <input type="checkbox" :id="String(l.i) + i.i" v-model="checkedItems" :value="i.count + ' ' + i.color">
            <label :for="String(l.i) + i.i">
              {{ i.count }} <div :style="{ 'background-color': i.color }" class="blocks"></div>
            </label>
          </li>
        </ul>
      </li>
    </ul>
    <div>
      <div v-for="j of checkedItems" :key="j" style="display: flex;flex-wrap: wrap">
        <div v-for="i in (Number((j.split(' '))[0]))" :key="i"
          :style="{ 'background-color': (j.split(' '))[1], 'margin': '10px' }" class="blocks">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useItemsStore } from "@/stores/items";
import { useListsStore } from "@/stores/lists";
import { mapStores } from "pinia";
export default {
  data() {
    return {
      checkedItems: []

    }
  },
  methods: {

  },
  computed: {
    ...mapStores(useListsStore),
    ...mapStores(useItemsStore),
  },
  beforeMount() {
    this.itemsStore.createItems();
    for (let i = 0; i < 5; i++) {
      this.listsStore.createLists(i, this.itemsStore.createItems());
    }
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 10px;

}

li {
  display: flex;
  align-items: baseline
}

label {
  display: flex;
}

.blocks {
  width: 15px;
  height: 15px;
}
</style>
