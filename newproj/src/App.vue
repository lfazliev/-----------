<script setup>
</script>

<template>
  <div style="display: flex; justify-content: space-between">
    <ul>
      <li v-for="l of listsStore.lists" :key="l.i">
        <label :for="l.i" :class="'checkbox ' + l.checked" @change="changeListCheck(l)">
          <input type="checkbox" :id="l.i" :checked="l.checked">
          <span>
            {{ l.i + 1 }}
          </span>
        </label>
        <ul>
          <li v-for="i of l.items" :key="i.i">
            <input type="checkbox" :id="String(l.i) + i.i" :value="i.value" :checked=i.checked
              @click="getListStatus(l, i)">
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
        <div v-if="listsStore.lists[l.id].button == false">
          <div v-for="j of l.items" :key="j" style="display: flex;flex-wrap: wrap">
            <div @click="j.blocks.pop()" v-for="i of j.blocks" :key="i"
              :style="{ 'background-color': j.color, 'margin': '10px' }" class="blocks">
            </div>
          </div>
        </div>
        <div v-else style="display: flex;flex-wrap: wrap">
          <div v-for='j of l.randarr' :key="j" @click="delbl(j)"
            :style="{ 'background-color': j.color, 'margin': '10px' }" class="blocks"></div>
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
    delbl(block) {
      for (let l of this.listsStore.lists) {
        for (let i of l.items) {
          if (i.color == block.color) {
            i.blocks.pop()
          }
        }
      }
    },
    getListStatus(list, item) {
      item.checked = !item.checked
      const checked = this.checkListItems(list.items)
      if (list.items.length == checked) {
        list.checked = 'check'
      } else if (!checked) {
        list.checked = 'uncheck'
      } else {
        list.checked = 'dot'
      }
    },
    checkListItems(items) {
      let checked = 0
      for (let i of items) {
        if (i.checked) {
          checked++
        }
      }
      return checked
    },
    changeListCheck(list) {
      const checked = this.checkListItems(list.items)
      if (list.items.length == checked) {
        list.checked = 'uncheck'
        for (let i of list.items) {
          console.log(0);
          i.checked = false
        }
      }
      else {
        list.checked = 'check'
        for (let i of list.items) {
          console.log(1);
          i.checked = true
        }
      }
    },
    rasc(e, i) {
      console.log(e.target);
      i.blocks.push({ color: i.color })
    },

  },
  computed: {
    ...mapStores(useListsStore),
    ...mapStores(useItemsStore),
    ...mapStores(useBlocksStore),
    SortedLists() {
      const newLists = []
      for (let l of this.listsStore.lists) {
        let currentList = { id: l.i, items: [], randarr: [] }
        if (l.button == true) {
          for (let i of l.items) {
            if (i.checked) {
              currentList.randarr.push(...i.blocks)
            }

          }
          if (currentList.randarr.length != 0) {
            currentList.randarr.sort(() => Math.random() - 0.5)
          }
        }
        else {
          for (let i of l.items) {
            if (i.checked) {
              currentList.items.push(i)
            }
          }
        }
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
  width: 15px;
  height: 15px;
  flex-shrink: 0;
  flex-grow: 0;
  border-radius: 0.25em;
  margin-right: 0.5em;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100%;
}

.uncheck>span::before {
  background-image: url(../src/assets/img/unchecked.svg);
}

.dot>span::before {
  background-image: url(../src/assets/img/checkbox.svg);
}

.check>span::before {
  background-image: url(../src/assets/img/check.svg);
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
