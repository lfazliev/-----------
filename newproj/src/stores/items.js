import { defineStore } from 'pinia'
import { useBlocksStore } from './blocks.js'
export const useItemsStore = defineStore('items', {
    state: () => ({

    }),
    getters: {

    },
    actions: {
        getRandom(min, max) {
            return Math.floor(Math.random() * (max - min) + min)
        },
        createItems() {
            let items = []
            const app = useBlocksStore()
            const length = this.getRandom(4, 10)
            for (let i = 0; i <= length; i++) {
                let checked = false
                let blocks = app.createBlocks()
                let color = blocks.at(0).color
                items.push({ i, blocks, color, checked })
            }

            return items
        },

    }
})