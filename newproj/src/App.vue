<script setup>
</script>

<template>
  <div style="display: flex; justify-content: space-between">
    <ul>
      <li v-for="l of listsStore.lists" :key="l.i">
        <label :for="l.i" class=checkbox>
          <input type="checkbox" :id="l.i" :checked="l.checked" @change="fagol(l, $event)">
          <span>
            {{ l.i + 1 }}
          </span>
        </label>
        <ul>
          <li v-for="i of l.items" :key="i.i">
            <input type="checkbox" :id="String(l.i) + i.i" :value="i.value" :checked=i.checked
              @change="fagal(i, $event)">
            <label :for="String(l.i) + i.i">
              <input type=number min="0" v-model=i.blocks.length @change="rasc($event, i)"
                style="border:none; width:20%">
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
          <button @click="listsStore.lists[l.id].button = !listsStore.lists[l.id].button">{{
              listsStore.lists[l.id].button ? 'True' : 'False'
          }}</button>
        </div>
        <div>
          <div v-for="j of l.items" :key="j" style="display: flex;flex-wrap: wrap">
            <div @click="j.blocks.pop()" v-for="i of j.blocks" :key="i"
              :style="{ 'background-color': i.color, 'margin': '10px' }" class="blocks">
            </div>
          </div>
        </div>
        <div>
          <div></div>
        </div>

      </div>
    </div>
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
    rasc(e, i) {
      i.blocks = this.blocksStore.newBlocks(i.color, e.target.value)
    },
    fagal(el, e) {
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
  },
  computed: {
    ...mapStores(useListsStore),
    ...mapStores(useItemsStore),
    ...mapStores(useBlocksStore),
    SortedLists() {
      const newLists = []
      for (let l of this.listsStore.lists) {
        let currentList = { id: l.i, items: [] }
        if (l.button == true) {
          for (let i of l.items) {
            if (i.checked) {
              if (currentList.items.length == 0) {
                currentList.items.push(JSON.parse(JSON.stringify(i)))
              }
              else {
                currentList.items[0].blocks.push(...i.blocks)
              }
            }

          }
          if (currentList.items.length != 0) {
            currentList.items[0].blocks.sort(() => Math.random() - 0.5)
          }
        }
        else {
          for (let i of l.items) {
            if (i.checked) {
              currentList.items.push(i)
            }
          }
        }
        console.log(currentList);
        newLists.push(currentList)
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
