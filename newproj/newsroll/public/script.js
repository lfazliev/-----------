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
    },
    methods: {
        addNews: async function () {
            const result = await fetch('/news', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({ header: this.header, text: this.text, tag: this.tag.split(), date: this.date })
            })
            const insertRes = await result.json()
            this.news.push({ header: this.header, text: this.text, tag: this.tag.split(), date: this.date, _id: insertRes.result.insertedId })
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
        }
    }
})