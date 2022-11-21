import { defineStore } from 'pinia'
import { useBlocksStore } from './blocks.js'
import { useListsStore } from "./lists.js";
export const useItemsStore = defineStore('items', {
    state: () => ({

    }),
    getters: {

    },
    actions: {
        createItems() {
            let items = []
            const app = useBlocksStore()
            const length = app.getRandom(4, 10)
            for (let i = 0; i <= length; i++) {
                let checked = false
                let blocks = app.createBlocks(i)
                let color
                if (blocks.length != 0) {
                    color = blocks.at(0).color
                }
                else {
                    color = app.getColor()
                }
                items.push({ i, blocks, color, checked })
            }

            return items
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


        changeNum(e, i, l) {
            const app = useListsStore()
            if (e.value > i.blocks.length) {
                while (e.value != i.blocks.length) {
                    i.blocks.push({ color: i.color })
                }
            }
            else {
                i.blocks.splice(-(i.blocks.length - e.value))
            }
            app.calc(l)

        },
        changeColor(e, i) {
            i.color = e.value
            for (let l of i.blocks) {
                l.color = e.value
            }
        },

    }
})