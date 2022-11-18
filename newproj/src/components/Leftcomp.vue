<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useItemsStore } from "@/stores/items.js";
import { useListsStore } from "@/stores/lists.js";
import { useBlocksStore } from "@/stores/blocks.js";
import { mapStores } from "pinia";
</script>
<template>
    <ul>
        <li v-for="l of listsStore.lists" :key="l.id">
            <div style="display: flex;">
                <div class=showbtn @click="l.show = !l.show">{{ l.show ? '&#5167;' : '&#10095;' }}</div>
                <label :for="l.id" :class="'checkbox ' + l.checked">
                    <input type="checkbox" :id="l.id" :checked="l.checked">
                    <span @click="this.listsStore.changeListCheck(l)">
                        {{ 'List ' + (Number(l.id) + 1) }}
                    </span>
                </label>
            </div>
            <ul v-if="l.show" style="padding-top: 20px;">
                <li v-for="i of l.items" :key="i.i">
                    <div style="display: flex;">
                        <input type="checkbox" :id="String(l.id) + i.i" :value="i.value" :checked=i.checked
                            @click="this.listsStore.getListStatus(l, i)">
                        <label :for="String(l.id) + i.i"> {{ 'Item ' + (i.i + 1) }}</label>
                    </div>
                    <label :for="String(l.id) + i.i">
                        <input type=number min="0" :value=i.blocks.length
                            @change="this.itemsStore.changeNum($event.target, i, l)" style="border:none; width:30px">
                        <input type="color" @change="this.itemsStore.changeColor($event.target, i)" :value=i.color
                            class="blocks">
                    </label>
                </li>
            </ul>
        </li>
    </ul>
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