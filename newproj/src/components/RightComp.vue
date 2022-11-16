<script setup>
import { useItemsStore } from "@/stores/items.js";
import { useListsStore } from "@/stores/lists.js";
import { useBlocksStore } from "@/stores/blocks.js";
import { mapStores } from "pinia";
</script>
<template>
    <div>
        <div v-for="l of SortedLists" :key=l class="colorbox">
            <div>
                <p style="margin:0">lists {{ l.id + 1 }}</p>
                <button
                    @click="listsStore.lists[l.id].button = !listsStore.lists[l.id].button; listsStore.calc(listsStore.lists[l.id]);">{{
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
                <div v-for='(j, ind) in l.randarr' :key="j" @click="blocksStore.delbl(j, ind)"
                    :style="{ 'background-color': j.color, 'margin': '10px' }" class="blocks"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    computed: {
        ...mapStores(useListsStore),
        ...mapStores(useItemsStore),
        ...mapStores(useBlocksStore),
    }
}
</script>