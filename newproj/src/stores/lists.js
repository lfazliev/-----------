import { defineStore } from 'pinia'

export const useListsStore = defineStore('lists', {
    state: () => ({
        lists: []
    }),
    getters: {

    },
    actions: {
        createLists(state, i, items) {
            state.lists.push({ i, items })
        }
    }
})
