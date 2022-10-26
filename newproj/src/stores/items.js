import { defineStore } from 'pinia'

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
            const items = []
            const length = this.getRandom(4, 10)
            for (let i = 0; i <= length; i++) {
                const count = this.getRandom(0, 40)
                let letters = '0123456789ABCDEF';
                let color = '#'
                for (let i = 0; i < 6; i++) {
                    color += letters[this.getRandom(0, 16)];
                }
                items.push({ i, count, color })
            }
            return items
        },

    }
})