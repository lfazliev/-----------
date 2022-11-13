import { defineStore } from 'pinia'
import { useItemsStore } from './items.js'
export const useListsStore = defineStore('lists', {
    state: () => ({
        lists: []
    }),
    getters: {

    },
    actions: {
        createLists(i) {
            const app = useItemsStore()
            let checked = 'uncheck'
            let items = app.createItems()
            this.lists.push({ i, items, checked, button: false, show: true })
        }
    }
})