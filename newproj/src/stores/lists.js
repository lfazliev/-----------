import { defineStore } from 'pinia'
import { useItemsStore } from './items.js'
export const useListsStore = defineStore('lists', {
    state: () => ({
        lists: []
    }),
    getters: {

    },
    actions: {
        createLists(id) {
            const app = useItemsStore()
            let checked = 'uncheck'
            let items = app.createItems()
            let randarr = []
            this.lists.push({ id, items, checked, button: false, show: true, randarr: randarr })
        }
    }
})