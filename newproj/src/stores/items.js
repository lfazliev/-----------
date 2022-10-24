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
                let letters = '0123456789ABCDEF';
                let color = '#'
                for (let i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                state.items.push({ count, color })
            }
        }
    }
})
