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
function checked(year, month, day) {


    let mDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let days;
    let current;
    let t = [6, 2, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
    if (year > 1900 && year < 2035) {
        if (month >= 1 && month <= 12) {
            let y = year % 100;
            current = y / 12 + y % 12 + y % 12 / 4 + t[month - 1] + (20 - year / 100);
            if ((year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) && month <= 2)
                current--;
            current = current % 7;
            if (month == 2) {
                if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
                    days = 29;
                }
                else {
                    days = mDays[month - 1];
                }
            }
            else {
                days = mDays[month - 1];
            }
            if (day > days || day < 0) {

                r2.innerHTML = 'Неверно день'
            }

        }
        else {
            r2.innerHTML = 'Неверно мес'
        }
    }
    else {
        r2.innerHTML = 'Неверно год'
    }

}

z2btn.onclick = function (e) {
    rez2(z2v1.value, z2v2.value, z2v3.value, z2v4.value, z2v5.value, z2v6.value)
}
for (item of document.querySelectorAll('#z2 input')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            rez2(z2v1.value, z2v2.value, z2v3.value, z2v4.value, z2v5.value, z2v6.value)
        }
    })
}
function rez2(a, b, c, day, month, year) {
    r2.innerHTML = ''
    let h2 = document.createElement('h2')
    h2.style.paddingBottom = '1rem'
    let dat = document.createElement('p')
    dat.style.fontSize = '15px'
    dat.style.paddingBottom = '1rem'
    let text = document.createElement('p')
    text.style.paddingBottom = '1rem'
    let tag = document.createElement('p')
    h2.innerText = a
    r2.appendChild(h2)
    if (year !== '' && month !== '' && day !== '') {
        year = Number(year)
        month = Number(month)
        day = Number(day)
        if (Number.isInteger(year) && Number.isInteger(month) && Number.isInteger(day)) {
            date = new Date(year, month - 1, day)
            actualdate = new Date()
            checked(year, month, day)
            if (actualdate.getDate() == date.getDate() && actualdate.getMonth() == date.getMonth() && actualdate.getFullYear() == date.getFullYear()) {
                dat.innerText = 'Сегодня'
            } else {
                let pol = 0
                for (let i = 0; i < 6; i++) {
                    actualdate.setDate(actualdate.getDate() - 1)
                    if (actualdate.getDate() == date.getDate() && actualdate.getMonth() == date.getMonth() && actualdate.getFullYear() == date.getFullYear()) {
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
                    dat.innerText = date.getFullYear() + '.' + date.getMonth() + 1 + '.' + date.getDate()
                }

            }
            r2.appendChild(dat)
        }
        else {
            r2.innerHTML = 'Неверно тип даты'
        }

    }
    text.innerText = b
    r2.appendChild(text)
    if (c !== '') {
        let taglist = c.split(' ')
        for (let i = 0; i < taglist.length; i++) {
            tag.innerText += `#${taglist[i]} `
        }
        r2.appendChild(tag)
    }
}

// if (this.value.length > 20) {
//     z10v1Width += 5
//     z10v1.style.width = z8v1Width + 'px'
// }