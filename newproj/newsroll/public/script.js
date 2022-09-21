window.addEventListener('scroll', function () {
    let a = scrollY + 'px';
    if (parseInt(a) > 100) {
        up.style.display = 'block'
    }
    else {
        up.style.display = 'none'
    }
})
up.style.display = 'none'
up.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
}

var app = new Vue({
    el: '#app',
    data: {
        news: [],
        header: '',
        text: '',
        tag: '',
        date: '',
        filter: '',
    },
    beforeMount: async function () {
        const data = await fetch('/news')
        const json = await data.json()
        this.news = json.all
        for (n of this.news) {
            n.date = this.getPrDate(n.date)
            n.tag = this.getPrTag(n.tag)
        }
    },
    methods: {
        addNews: async function () {
            const date = this.getPrDate(this.date)
            const result = await fetch('/news', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({ header: this.header, text: this.text, tag: this.getTag(), date: this.date })
            })
            const insertRes = await result.json()
            this.news.push({
                header: this.header,
                text: this.text,
                tag: this.tag,
                date,
                _id: insertRes.result.insertedId
            })
        },
        delNews: async function (_id) {
            this.news.splice(this.news.findIndex(n => n._id == _id), 1)
            const result = await fetch('/news', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({ id: _id })
            })
            const insertRes = await result.json()
        },
        getTag: function () {
            if (this.tag !== '') {
                let taglist = this.tag.split(' ')
                for (let i = 0; i < taglist.length; i++) {
                    if (taglist[i] == '') {
                        taglist.splice(i, 1)
                        i--
                    }
                }
                return taglist
            }
            else {
                return ''
            }
        },
        getPrTag: function (tago) {
            let TagT
            if (tago.length !== 0) {
                TagT = tago.join(' #')
            }
            else {
                TagT = 'Теги не указаны'
            }
            return TagT
        },
        getPrDate: function (dateT) {
            let date
            if (dateT !== '') {
                dateT = new Date(dateT)
                let actualdate = new Date()
                if (actualdate.getDate() == dateT.getDate() && actualdate.getMonth() == dateT.getMonth() && actualdate.getFullYear() == dateT.getFullYear()) {
                    date = 'Сегодня'
                } else {
                    let pol = 0
                    for (let i = 0; i < 6; i++) {
                        actualdate.setDate(actualdate.getDate() - 1)
                        if (actualdate.getDate() == dateT.getDate() && actualdate.getMonth() == dateT.getMonth() && actualdate.getFullYear() == dateT.getFullYear()) {
                            if (i == 0) {
                                date = `${i + 1} день назад`
                            }
                            else {
                                if (i > 0 && i < 4) {
                                    date = `${i + 1} дня назад`
                                }
                                else
                                    date = `${i + 1} дней назад`
                            }
                            pol = 1
                        }
                    }
                    if (pol == 0) {
                        date = dateT.toLocaleDateString()
                    }
                }
            }
            else {
                date = 'Дата не указана'
            }
            return date
        }
    },
    computed: {
        filterNews: function () {
            if (this.filter) {
                return this.news.filter(n => n.tag.find(tagt => tagt.includes(this.filter)))
            }
            else {
                return this.news
            }
        },

    }
})