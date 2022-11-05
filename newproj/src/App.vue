<script setup>
</script>

<template>
  <div style="display: flex; justify-content: space-between">
    <ul>
      <li v-for="l of listsStore.lists" :key="l.i">
        <label :for="l.i" class=checkbox>
          <input type="checkbox" :id="l.i" :checked="l.checked" @change="fagol(l, $event)">
          <span>
            {{ l.i }}
          </span>
        </label>
        <ul>
          <li v-for="i of l.items" :key="i.i">
            <input type="checkbox" :id="String(l.i) + i.i" :value="i.value" :checked=i.checked
              @change="fagal(i, $event)">
            <label :for="String(l.i) + i.i">
              <input type=number v-model=i.count style="border:none; width:20%">
              <div :style="{ 'background-color': i.color }" class="blocks">
              </div>
            </label>
          </li>
        </ul>
      </li>
    </ul>
    <div style="width:45%">
      <div v-for="l of SortedLists" :key=l class="colorbox">
        <div style="display: flex; justify-content: space-around; padding: 5px">
          <p style="margin:0">lists {{ l.id + 1 }}</p>
          <button value="0" @click="polbutt($event, l.items)">Randomize</button>
        </div>
        <div @click="polbutt($event)">
          <div v-for="j of l.items" :key="j" style="display: flex;flex-wrap: wrap">
            <div v-for="i in j.count" :key="i" :style="{ 'background-color': j.color, 'margin': '10px' }"
              class="blocks">
            </div>
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
      console.log(el, e);
      el.checked = e.target.checked;
    },
    fagol(lists, e) {
      if (e.target.checked == true) {
        for (let item of lists.items) {
          item.checked = true;
        }
      }
      else {
        for (let item of lists.items) {
          item.checked = false;
        }
      }
    },
    polbutt(i) {
      let sum = []
      let a = i.target.parentNode.children
      for (let i = 0; i < a.length; i++) {
        sum.push(...a[i].children)
      }
      sum.sort(() => Math.random() - 0.5)
      console.log(sum);
    }
  },
  computed: {
    ...mapStores(useListsStore),
    ...mapStores(useItemsStore),
    SortedLists() {
      const newLists = []
      for (let l of this.listsStore.lists) {
        let currentList = { id: l.i, items: [] }
        for (let i of l.items) {
          if (i.checked) {
            currentList.items.push(i)
          }
        }
        newLists.push(currentList)
      }
      console.log(newLists);
      return newLists
    },
  },
  beforeMount() {
    this.itemsStore.createItems()
    for (let i = 0; i < 5; i++) {
      this.listsStore.createLists(i, this.itemsStore.createItems());
    }
  },

}

</script>

<style scoped>
ul {
  list-style: none;
  margin: 10px;
  padding: 0px
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

.mincheck {
  opacity: 0;
}

.checkbox>span::before {
  content: '';
  display: inline-block;
  width: 25px;
  height: 25px;
  flex-shrink: 0;
  flex-grow: 0;
  border-radius: 0.25em;
  margin-right: 0.5em;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100%;
}

.checkbox>span::before {
  background-image: url(../src/assets/img/checkbox.svg);
}

.checkbox>input {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.colorbox {
  border: 1px solid black;
  margin: 10px;
}
</style>
