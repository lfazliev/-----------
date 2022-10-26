import { defineStore } from 'pinia'

export const useListsStore = defineStore('lists', {
    state: () => ({
        lists: []
    }),
    getters: {

    },
    actions: {
        createLists(i, items) {
            let checked = false
            this.lists.push({ i, items, checked })
        }
    }
})