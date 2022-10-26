import { defineStore } from 'pinia'

export const useListsStore = defineStore('lists', {
    state: () => ({
        lists: []
    }),
    getters: {

    },
    actions: {
        createLists(i, items, checkedItems) {
            let checked = false
            this.lists.push({ i, items, checked, checkedItems })
        }
    }
})