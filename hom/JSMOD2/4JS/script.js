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
    year = Number(year)
    month = Number(month)
    day = Number(day)
    if (Number.isInteger(year) && Number.isInteger(month) && Number.isInteger(day)) {
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
                    return 0
                }

            }
            else {
                r2.innerHTML = 'Неверно мес'
                return 0
            }
        }
        else {
            r2.innerHTML = 'Неверно год'
            exit
        }
    }
    else {
        r2.innerHTML = 'Неверно тип'
        return 0
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
    if (z2v5.value !== '') {
        date = new Date(year, month - 1, day)
        actualdate = new Date()
        checked(year, month, day)
        if (actualdate.getDate() == date.getDate() && actualdate.getMonth() == date.getMonth() && actualdate.getFullYear() == date.getFullYear()) {
            r2.innerHTML = 'YJHV'
        }
        else {
            let pol
            for (let i = 0; i < 7; i++) {
                actualdate.setDate(actualdate.getDate() - 1)
                if (actualdate.getDate() == date.getDate() && actualdate.getMonth() == date.getMonth() && actualdate.getFullYear() == date.getFullYear()) { r2.innerHTML = i + 1 }
            }

        }
    }
    else {
        r2.innerHTML = 'Нет зачений'
    }
}
// if (this.value.length > 20) {
//     z10v1Width += 5
//     z10v1.style.width = z8v1Width + 'px'
// }