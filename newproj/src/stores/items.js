import { defineStore } from 'pinia'

export const useItemsStore = defineStore('items', {
    state: () => ({
        items: []
    }),
    getters: {

    },
    actions: {
        createItems(state) {
            console.log('items')
            const length = Math.random() * (10 - 4) + 4
            for (let i = 0; i <= length; i++) {
                const count = Math.random() * (10 - 4) + 4
                const color = 0 // заполнить рандомным цветом
                state.items.push({ count, color })
            }
        }
    }
})
