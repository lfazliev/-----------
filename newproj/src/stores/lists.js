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
        },
        calc(list) {
            list.randarr = []
            if (list.button == true) {
                for (let i of list.items) {
                    if (i.checked) {
                        list.randarr.push(...i.blocks)
                    }

                }
                if (list.randarr.length != 0) {
                    list.randarr.sort(() => Math.random() - 0.5)
                }
            }
        },
        getListStatus(list, item) {
            const app = useItemsStore()
            item.checked = !item.checked
            const checked = app.checkListItems(list.items)
            if (list.items.length == checked) {
                list.checked = 'check'
            } else if (!checked) {
                list.checked = 'uncheck'
            } else {
                list.checked = 'dot'
            }
            this.calc(list)
        },
        changeListCheck(list) {
            const app = useItemsStore()
            const checked = app.checkListItems(list.items)
            if (list.items.length == checked) {
                list.checked = 'uncheck'
                for (let i of list.items) {
                    i.checked = false
                }
            }
            else {
                list.checked = 'check'
                for (let i of list.items) {
                    i.checked = true
                }
            }
            this.calc(list)
        },
    }
})