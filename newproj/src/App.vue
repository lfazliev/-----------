<script setup></script>

<template>
  <div>
    <ul>
      <li v-for="l of listsStore.lists" :key="l.i">
        <input type="checkbox" :id="l.i" :checked="l.checked" @change="fagol(l, $event)">
        <label :for="l.i">
          {{ l.i }}{{l.checkedItems}}
        </label>
        <ul>
          <li v-for="i of l.items" :key="i.i">
            <input type="checkbox" :id="String(l.i) + i.i" v-model="l.checkedItems" :value="i.value" :checked=i.checked
              @change="fagal(i, $event)">
            <label :for="String(l.i) + i.i">
              {{ i.count }}{{ i.checked }} <div :style="{ 'background-color': i.color }" class="blocks"></div>
            </label>
          </li>
        </ul>
      </li>
    </ul>
    <div>
      <div v-for="l of listsStore.lists" :key=l class="colorbox">
        <button @onclick='randbox'></button>
        <div v-for="j of l.checkedItems" :key="j" style="display: flex;flex-wrap: wrap">
          <div v-for="i in (Number((j.split(' '))[0]))" :key="i"
            :style="{ 'background-color': (j.split(' '))[1], 'margin': '10px' }" class="blocks">
          </div>
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
    }
  },
  methods: {
    fagal(el, e) {
      el.checked = e.target.checked;
    },
    fagol(lists, e) {
      if (e.target.checked == true) {
        for (let item of lists.items) {
          item.checked = true;
          lists.checkedItems.push(item.value)
        }
      }
      else {
        for (let item of lists.items) {
          item.checked = false;
          lists.checkedItems = []
        }
      }
    },
  },
  computed: {
    ...mapStores(useListsStore),
    ...mapStores(useItemsStore),
  },
  beforeMount() {
    this.itemsStore.createItems();
    let checkedItems = []
    for (let i = 0; i < 5; i++) {
      this.listsStore.createLists(i, this.itemsStore.createItems(), checkedItems);
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

.colorbox {
  border: 1px solid black;
  margin: 10px;
}
</style>
