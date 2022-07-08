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
class news {
    constructor(header, text, taglist, date) {
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
    }
    printnews(rez) {

        let h2 = document.createElement('h2')
        h2.style.paddingBottom = '1rem'
        let dat = document.createElement('p')
        dat.style.fontSize = '15px'
        dat.style.paddingBottom = '1rem'
        let text = document.createElement('p')
        text.style.paddingBottom = '1rem'
        let tag = document.createElement('p')
        h2.innerText = this.header
        rez.appendChild(h2)
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
        rez.appendChild(dat)
        text.innerText = this.text
        rez.appendChild(text)
        if (this.taglist !== 'Теги не указаны') {
            for (let i = 0; i < this.taglist.length; i++) {
                if (this.taglist[i]) tag.innerText += `#${this.taglist[i]} `
            }
        }
        else {
            tag.innerText = this.taglist
        }
        rez.appendChild(tag)
    }
}



//newsrool = new NewsRool()

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
        console.log('im here')
        r2.innerHTML = 'Нет значений'
    }
    else {
        let curnews = new news(header, text, tag, date)
        curnews.printnews(r2)
    }
}


// if (this.value.length > 20) {
//     z10v1Width += 5
//     z10v1.style.width = z8v1Width + 'px'
// }