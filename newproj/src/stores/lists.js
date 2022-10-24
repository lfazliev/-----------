import { defineStore } from 'pinia'

export const useListsStore = defineStore('lists', {
    state: () => ({
        lists: []
    }),
    getters: {

    },
    actions: {
        createLists(i, items) {
            this.lists.push({ i, items })
        }
    }
})