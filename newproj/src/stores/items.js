import { defineStore } from 'pinia'
import { useBlocksStore } from './blocks.js'
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
                let blocks = app.createBlocks()
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

    }
})