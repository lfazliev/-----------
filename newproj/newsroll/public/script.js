

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
        if (taglist !== '') {
            this.taglist = taglist
        }
        else {
            this.taglist = 'Теги не указаны'
        }
        this.id = id
    }
    printnews(rez) {
        let Newdiv = document.createElement('div')
        Newdiv.className = 'News'
        Newdiv.style.paddingLeft = '	1em'
        Newdiv.style.marginBottom = '1rem'
        let btndel = document.createElement('button')
        btndel.style.float = 'right'
        btndel.style.margin = '10px'
        btndel.innerHTML = "Удалить"
        btndel.onclick = () => {
            delNews(this.id, newsRool)
        }
        Newdiv.appendChild(btndel)
        let num = document.createElement('p')
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
        let tag = document.createElement('p')
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
    if (newsRool.newslist.length > 0 && z3v1.value !== '') {
        delNews(z3v1.value, newsRool
        )
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