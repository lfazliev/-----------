<script setup>
</script>

<template>
  <div class=main>
    <ul>
      <li v-for="l of listsStore.lists" :key="l.i">
        <div style="display: flex;">
          <div class=showbtn @click="l.show = !l.show">{{ l.show ? '&#5167;' : '&#10095;' }}</div>
          <label :for="l.i" :class="'checkbox ' + l.checked" @change="changeListCheck(l)">
            <input type="checkbox" :id="l.i" :checked="l.checked">
            <span>
              {{ 'List ' + (Number(l.i) + 1) }}
            </span>
          </label>
        </div>
        <ul v-if="l.show" style="padding-top: 20px;">
          <li v-for="i of l.items" :key="i.i">
            <div style="display: flex;">
              <input type="checkbox" :id="String(l.i) + i.i" :value="i.value" :checked=i.checked
                @click="getListStatus(l, i)">
              <label :for="String(l.i) + i.i"> {{ 'Item ' + (i.i + 1) }}</label>
            </div>
            <label :for="String(l.i) + i.i">
              <input type=number min="0" :value=i.blocks.length @change="rasc($event.target, i)"
                style="border:none; width:30px">
              <input type="color" @change="rasc($event.target, i)" :value=i.color class="blocks">
            </label>
          </li>
        </ul>
      </li>
    </ul>
    <div>
      <div v-for="l of SortedLists" :key=l class="colorbox">
        <div>
          <p style="margin:0">lists {{ l.id + 1 }}</p>
          <button @click="listsStore.lists[l.id].button = !listsStore.lists[l.id].button">{{
              listsStore.lists[l.id].button ? 'Sorted' : 'Randomize'
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
      if (e.type == "color") {
        i.color = e.value
        for (let l of i.blocks) {
          l.color = e.value
        }
      }
      else
        if (e.value > i.blocks.length) {
          while (e.value != i.blocks.length) {
            i.blocks.push({ color: i.color })
          }
        }
        else {
          i.blocks.splice(-(i.blocks.length - e.value))
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
.main {
  display: flex;
  justify-content: space-between;
}

.main>div {
  width: 45%
}

.main>div,
.main>ul {
  border: 1px black solid;
  margin: 5px;
  border-radius: 5px;
  padding: 10px;
}

ul {
  list-style: none;
  margin: 15px 0 0px 5px;
  padding: 0px;
  width: 70%;
  max-width: 400px;
}

li {
  display: flex;
  justify-content: space-between
}

label {
  display: flex;
}

.blocks {
  width: 16px;
  height: 20px;
  border: none;
  padding: 0;
  background-color: white;
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

.showbtn:hover {
  cursor: pointer;
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
  border-radius: 5px;
  margin: 10px;
  padding: 5px;
}

.colorbox>p+div {
  display: flex;
  justify-content: space-around;
  padding: 5px;
}

.colorbox>p {
  display: none;
}

@media screen and (max-width:500px) {
  .main {
    flex-direction: column;
    align-items: center
  }

  .main>div {
    width: 90%;
  }

  .main>ul {
    width: 90%;
    max-width: none;
  }

}
</style>
