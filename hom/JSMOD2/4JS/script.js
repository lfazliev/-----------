class PrintMachine {
    constructor(fontsize, color, fontfamily) {
        this.fontsize = fontsize
        this.color = color
        this.fontfamily = fontfamily
    }
    print(text, el) {
        el.innerHTML = ''
        let p = document.createElement('p')
        p.style.fontSize = this.fontsize
        p.style.color = this.color
        p.style.fontFamily = this.fontfamily
        p.innerText = text
        el.appendChild(p)
    }
}
// 1
z1btn.onclick = function (e) {
    rez1(z1v1.value, z1v2.value, z1v3.value, z1v4.value)
}
for (item of document.querySelectorAll('#z1 input')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            rez1(z1v1.value, z1v2.value, z1v3.value, z1v4.value)
        }
    })
}
function rez1(a, b, c, d) {
    if (z1v1.value !== '') {
        const content = new PrintMachine(b, c, d)
        content.print(a, r1)

    }
    else {
        r1.innerHTML = 'Нет зачений'
    }
}
// 2

class newsRool {
    constructor() {
        this.newslist = []
        this.rand = []
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
            this.taglist = taglist.split(' ')
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

function delNews(id, roll) {
    for (let i = 0; i < roll.newslist.length; i++) {
        if (roll.newslist[i].id == id) {
            roll.newslist.splice(i, 1)
            roll.printRool(r3)
            roll.rand.splice(roll.rand.indexOf(id), 1)
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
function rez2(header, text, tag, date) {
    r2.innerHTML = ''
    r2.style.display = 'block'
    if (header == '' && text == '' && tag == '') {
        r2.innerHTML = 'Нет значений'
    }
    else {
        newsRool.rand.push(Math.floor(Math.random() * 99999))
        pol = 0
        do {
            if (newsRool.rand.lastIndexOf(newsRool.rand[newsRool.rand.length - 1], -2) == -1) {
                let curnews = new news(header, text, tag, date, newsRool.rand[newsRool.rand.length - 1])
                curnews.printnews(r2)
                newsRool.addNews(curnews)
                pol = 1
            }
            else {
                newsRool.rand[newsRool.rand.length - 1] = Math.floor(Math.random() * 99999)
            }
        } while (pol == 0)

    }
}
// 3
z3btndel.onclick = function (e) {
    if (newsRool.newslist.length > 0 && z3v1.value !== '') {
        delNews(z3v1.value, newsRool)
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

// if (this.value.length > 20) {
//     z10v1Width += 5
//     z10v1.style.width = z8v1Width + 'px'
// }