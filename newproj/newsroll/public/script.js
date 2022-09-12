

// 2

class newsRool {
    constructor() {
        this.newslist = []
    }
    getNews() {
        return `${this.newslist.length} кол-во новостей`
    }
    printRool() {
        if (this.newslist.length > 0) {
            r3.innerHTML = ''
            colnews.innerHTML = this.getNews()
            for (let i = 0; i < this.newslist.length; i++) {
                this.newslist[i].printnews(r3)
                r3.style.display = 'block'
            }
        }
        else {
            colnews.innerHTML = this.getNews()
            r3.style.display = 'none'
        }
    }
    addNews(newsOne) {
        this.newslist.push(newsOne)
        this.printRool(r3)
    }
    sortDate() {
        this.newslist.sort(function (a, b) {
            const DateA = a.date
            const DateB = b.date
            if (DateA < DateB) {
                return -1;
            }
            if (DateA > DateB) {
                return 1;
            }
            return 0;
        })
        this.printRool()
    }
    findTag(tag) {
        r3.innerHTML = ''
        let newstag = []
        let j = 0
        for (let i = 0; i < this.newslist.length; i++) {
            if (this.newslist[i].taglist.includes(tag) == 1) {
                newstag.push(this.newslist[i])
                this.newslist[i].printnews(r3)
                j++
            }

        }
        colnews.innerHTML = `${j} кол-во новостей`

    }
}

newsRool = new newsRool()
let pol = 0
class news {
    constructor(header, text, taglist, date, id) {
        if (date !== '') {
            this.date = new Date(date)
        }
        else {
            this.date = 'Дата не указана'
        }
        if (header !== '') {
            this.header = header
        }
        else {
            this.header = 'Не указан заголовок'
        }
        if (text !== '') {
            this.text = text
        }
        else {
            this.text = 'Не указан текст'
        }
        if (taglist.length !== 0) {
            this.taglist = taglist
        }
        else {
            this.taglist = 'Теги не указаны'
        }
        this.id = id
    }
    async editNews() {
        const result = await fetch('/news', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({ id: this.id, text: this.text, header: this.header, tagarr: this.taglist })
        })
        const insertRes = await result.json()
        newsRool.printRool()
    }

    printnews(rez) {
        let Newdiv = document.createElement('div')
        Newdiv.className = 'News'
        Newdiv.style.paddingLeft = '1em'
        Newdiv.style.marginBottom = '1rem'
        let btndel = document.createElement('button')
        btndel.style.float = 'right'
        btndel.style.margin = '10px'
        btndel.innerHTML = `<svg height="19px" width="15px" viewBox="0 0 98 137"><path d="M75.6,44.8v73c0,3.4-2.8,6.2-6.2,6.2H21.3c-3.4,0-6.2-2.8-6.2-6.2v-73H75.6L75.6,44.8z M59.9,52.9v62.8h3.6V52.9H59.9  L59.9,52.9z M43.6,52.9v62.8h3.6V52.9H43.6L43.6,52.9z M27.3,52.9v62.8h3.6V52.9H27.3L27.3,52.9z M31.3,27.9v-5.2  c0-3.3,2.6-5.9,5.9-5.9h16.4c3.3,0,5.9,2.6,5.9,5.9v5.2h18.1c3.4,0,6.2,2.8,6.2,6.2v4.3H7V34c0-3.4,2.8-6.2,6.2-6.2H31.3L31.3,27.9z   M37.2,20.8c-1,0-1.8,0.8-1.8,1.8v5.2h20.1v-5.2c0-1-0.8-1.8-1.8-1.8H37.2L37.2,20.8z"/></svg>`
        btndel.onclick = () => {
            delNews(this.id, newsRool)
        }
        Newdiv.appendChild(btndel)
        let btnedit = document.createElement('button')
        btnedit.style.float = 'right'
        btnedit.style.margin = '10px'
        btnedit.style.fontSize = '16px'
        btnedit.style.height = '25px'
        btnedit.style.padding = '0 5px'
        btnedit.innerHTML = '&#9998'
        btnedit.onclick = () => {
            if (pol == 0) {
                pol = 1
                let divchild = Newdiv.children
                let header = divchild[3]
                let maintext = divchild[5]
                let thistag = divchild[6]
                let taginp = document.createElement('input')
                let textinp = document.createElement('textarea')
                let headinp = document.createElement('input')
                taginp.type = "text"
                textinp.style.marginRight = '10px'
                headinp.type = "text"
                if (maintext.innerHTML !== 'Не указан текст')
                    textinp.value = maintext.innerHTML
                if (header.innerHTML !== 'Не указан заголовок')
                    headinp.value = header.innerHTML
                if (this.taglist !== 'Теги не указаны') {
                    taginp.value = this.taglist.join(' ')
                }
                Newdiv.replaceChild(taginp, thistag)
                Newdiv.replaceChild(textinp, maintext)
                Newdiv.replaceChild(headinp, header)
                btnedit.style.display = 'none'
                btnedit.previousElementSibling.style.display = 'none'
                let btnsave = document.createElement('button')
                let btncancel = document.createElement('button')
                btnsave.innerHTML = 'Сохранить'
                btncancel.innerHTML = 'Отмена'
                btncancel.style.margin = '0 10px 5px auto'
                btnsave.style.margin = '0 10px 5px auto'
                btnsave.style.display = 'block'
                btncancel.style.display = 'block'
                btnsave.onclick = () => {
                    pol = 0
                    if (headinp.value !== '') {
                        this.header = headinp.value
                    }
                    else {
                        this.header = 'Не указан заголовок'
                    }
                    if (textinp.value !== '') {
                        this.text = textinp.value
                    }
                    else {
                        this.text = 'Не указан текст'
                    }
                    if (taginp.value !== '') {
                        this.taglist = taginp.value.split(' ')
                        for (let i = 0; i < this.taglist.length; i++) {
                            if (this.taglist[i] == '') {
                                this.taglist.splice(i, 1)
                                i--
                            }
                        }
                        if (this.taglist.length == 0) {
                            this.taglist = 'Теги не указаны'
                        }
                    }
                    else {
                        this.taglist = 'Теги не указаны'
                    }
                    this.editNews()
                }
                btncancel.onclick = () => { newsRool.printRool(); pol = 0 }
                Newdiv.appendChild(btncancel)
                Newdiv.appendChild(btnsave)
            }
            else {
                alert('Вы уже редактируйте другую новость')
            }
        }
        Newdiv.appendChild(btnedit)
        let num = document.createElement('p')
        num.style.margin = '10px'
        num.innerText = `id ${this.id}`
        num.style.fontSize = '13px'
        Newdiv.appendChild(num)
        let h2 = document.createElement('h2')
        h2.style.paddingBottom = '1rem'
        let dat = document.createElement('p')
        dat.style.fontSize = '15px'
        dat.style.paddingBottom = '1rem'
        let text = document.createElement('p')
        text.style.paddingBottom = '1rem'
        text.style.width = '98%'
        let tag = document.createElement('p')
        tag.style.marginBottom = '5px'
        h2.innerText = this.header
        Newdiv.appendChild(h2)
        if (this.date !== 'Дата не указана') {

            let actualdate = new Date()
            if (actualdate.getDate() == this.date.getDate() && actualdate.getMonth() == this.date.getMonth() && actualdate.getFullYear() == this.date.getFullYear()) {
                dat.innerText = 'Сегодня'
            } else {
                let pol = 0
                for (let i = 0; i < 6; i++) {
                    actualdate.setDate(actualdate.getDate() - 1)
                    if (actualdate.getDate() == this.date.getDate() && actualdate.getMonth() == this.date.getMonth() && actualdate.getFullYear() == this.date.getFullYear()) {
                        if (i == 0) {
                            dat.innerText = `${i + 1} день назад`
                        }
                        else {
                            if (i > 0 && i < 4) {
                                dat.innerText = `${i + 1} дня назад`
                            }
                            else
                                dat.innerText = `${i + 1} дней назад`
                        }
                        pol = 1
                    }
                }
                if (pol == 0) {
                    dat.innerText = this.date.toLocaleDateString()
                }
            }
        }
        else {
            dat.innerText = this.date
        }
        Newdiv.appendChild(dat)
        text.innerText = this.text
        Newdiv.appendChild(text)
        if (this.taglist !== 'Теги не указаны') {
            for (let i = 0; i < this.taglist.length; i++) {
                if (this.taglist[i]) tag.innerText += `#${this.taglist[i]} `
            }
        }
        else {
            tag.innerText = this.taglist
        }
        Newdiv.appendChild(tag)
        rez.appendChild(Newdiv)
    }
}

async function delNews(id, roll) {
    for (let i = 0; i < roll.newslist.length; i++) {
        if (roll.newslist[i].id == id) {
            roll.newslist.splice(i, 1)
            const result = await fetch('/news', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({ id })
            })
            const insertRes = await result.json()
            roll.printRool(r3)
            return
        }
    }
}




z2btn.onclick = function (e) {
    rez2(z2v1.value, z2v2.value, z2v3.value, z2v4.value)
}
for (item of document.querySelectorAll('#z2 input')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            rez2(z2v1.value, z2v2.value, z2v3.value, z2v4.value)
        }
    })
}
async function rez2(header, text, tag, date) {
    r2.innerHTML = ''
    r2.style.display = 'block'
    if (header == '' && text == '' && tag == '') {
        r2.innerHTML = 'Нет значений'
    }
    else {

        tagarr = tag.split(' ')
        for (let i = 0; i < tagarr.length; i++) {
            if (tagarr[i] == '' || tagarr[i].indexOf(' ') >= 0) {
                tagarr.splice(i, 1)
                i--
            }
        }
        const result = await fetch('/news', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({ header, text, tagarr, date })
        })
        const insertRes = await result.json()
        let curnews = new news(header, text, tagarr, date, insertRes.result.insertedId)
        curnews.printnews(r2)
        newsRool.addNews(curnews)

    }
}
// 3
z3btndel.onclick = function (e) {
    if (newsRool.newslist.length > 0) {
        if (z3v1.value !== '') {
            delNews(z3v1.value, newsRool)
        }
    }
    else {
        r3.innerHTML = 'Нет новостей'
    }
}
z3btn.onclick = function (e) {
    newsRool.printRool(r3)
}
z3btnsort.onclick = function (e) {
    if (newsRool.newslist.length > 0) {
        newsRool.sortDate()
    }
    else {
        r3.innerHTML = 'Нет новостей'
    }
}
z3btnfind.onclick = function (e) {
    if (newsRool.newslist.length > 0 && z3v2.value !== '') {
        newsRool.findTag(z3v2.value)
    }
    else {
        r3.innerHTML = 'Ошибка'
    }
}
for (item of document.querySelectorAll('#z3v1')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            if (newsRool.newslist.length > 0 && z3v1.value !== '') {
                delNews(z3v1.value, newsRool)
            }
            else {
                r3.innerHTML = 'Нет новостей'
            }
        }
    })
}
for (item of document.querySelectorAll('#z3v2')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            if (newsRool.newslist.length > 0 && z3v2.value !== '') {
                newsRool.findTag(z3v2.value)
            }
            else {
                r3.innerHTML = 'Нет новостей'
            }
        }
    })
}
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

window.onload = async () => {
    resp = await fetch('/news')
    data = await resp.json()
    for (let el of data.data) {
        newsRool.addNews(new news(el.header, el.text, el.tagarr, el.date, el._id))
    }
}

// if (this.value.length > 20) {
//     z10v1Width += 5
//     z10v1.style.width = z8v1Width + 'px'
// }