import { defineStore } from 'pinia'
import { useListsStore } from "@/stores/lists.js";
export const useBlocksStore = defineStore('blocks', {
    state: () => ({

    }),
    getters: {

    },
    actions: {
        getRandom(min, max) {
            return Math.floor(Math.random() * (max - min) + min)
        },
        getColor() {
            let letters = '0123456789ABCDEF';
            let color = '#'
            for (let i = 0; i < 6; i++) {
                color += letters[this.getRandom(0, 16)];
            }
            return color
        },
        createBlocks() {
            let blocks = []
            const count = this.getRandom(0, 40)
            let color = this.getColor()
            for (let i = 0; i < count; i++) {
                blocks.push({ color: color })
            }
            return blocks

        },
        newBlocks(color, count) {
            let blocks = []
            for (let i = 0; i < count; i++) {
                blocks.push({ color: color })
            }
            return blocks
        },
        delbl(block, i) {
            const app = useListsStore()
            for (let l of app.lists) {
                for (let c of l.items) {
                    if (c.color == block.color) {
                        c.blocks.pop()
                    }
                }
                l.randarr.splice(i, 1)
            }
        },
    }
})
