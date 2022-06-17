// function rezult(obj, text) {
//     let paddingR = (90 - text.length * 6 < 5) ? 5 : 90 - text.length * 6
//     // let paddingL = ()
//     obj.style.paddingRight = paddingR + 'px'
//     obj.innerHTML = text
// }

// 1
z1btn.onclick = function (e) {
    rez1(z1v1.value, z1v2.value)
}
for (item of document.querySelectorAll('#z1 input')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            rez1(z1v1.value, z1v2.value)
        }
    })
}
function rez1(a, b) {
    if (z1v1.value !== '' && z1v2.value !== '') {
        a = Number(a)
        b = Number(b)
        if (Number.isInteger(a)) {

        }
        else
            r1.innerHTML = 'Неверно'
    }
    else {
        r1.innerHTML = 'Нет зачений'
    }

}
//5
z5btn.onclick = function (e) {
    rez5(z5v1.value)
}
for (item of document.querySelectorAll('#z5 input')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            rez5(z5v1.value)
        }
    })
}
function rez5(a) {
    if (z5v1.value !== '') {
        a = Number(a)
        r5.innerHTML = ''
        if (Number.isInteger(a)) {
            for (let i = 1; i < 10; i++) {
                let div = document.createElement('div')
                div.className = 'rezdiv'
                r5.appendChild(div)
                div.innerHTML = String(`${i} * ${a} = ${a * i}`)
            }
        }
        else {

            r5.innerHTML = 'Неверно'
        }
    }
    else {

        r5.innerHTML = 'Нет зачений'
    }

}
// 6
z6btn.onclick = function (e) {
    rez6(z6v1.value, z6v2.value)
}
for (item of document.querySelectorAll('#z6 input')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            rez6(z6v1.value, z6v2.value)
        }
    })
}
function rez6(a, b) {
    if (z6v1.value !== '' && z6v2.value !== '') {
        a = Number(a)
        b = Number(b)
        if (Number.isInteger(a)) {
            let c
            let d
            c = Math.floor(a / b)
            d = (a / b - c) * b
            r6.innerHTML = d.toFixed(0)
        }
        else
            r6.innerHTML = 'Неверно'
    }
    else {
        r6.innerHTML = 'Нет зачений'
    }

}
// 7
z7btn.onclick = function (e) {
    rez7(z7v1.value, z7v2.value, z7v3.value, z7v4.value, z7v5.value)
}
for (item of document.querySelectorAll('#z7 input')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            rez7(z7v1.value, z7v2.value, z7v3.value, z7v4.value, z7v5.value)
        }
    })
}
function rez7(a, b, c, d, e) {
    let f = 0
    a = Number(a)
    b = Number(b)
    c = Number(c)
    d = Number(d)
    e = Number(e)
    if (z7v1.value !== '') {
        if (Number.isInteger(a)) {
            f += a
        }
        else {
            r7.innerHTML = 'Неверно'
        }
    }
    if (z7v2.value !== '') {
        if (Number.isInteger(b)) {
            f += b
        }
        else {
            r7.innerHTML = 'Неверно'
        }
    }
    if (z7v3.value !== '') {
        if (Number.isInteger(c)) {
            f += c
        }
        else {
            r7.innerHTML = 'Неверно'
        }
    }
    if (z7v4.value !== '') {
        if (Number.isInteger(d)) {
            f += d
        }
        else {
            r7.innerHTML = 'Неверно'
        }
    }
    if (z7v5.value !== '') {
        if (Number.isInteger(e)) {
            f += e
        }
        else {
            r7.innerHTML = 'Неверно'
        }
    }
    if (f == 0) { r8.innerText = "Нет значений" }
    else {
        r7.innerText = f
    }



}
// 8
z8btn.onclick = function (e) {
    rez8(z8v1.value, z8v2.value, z8v3.value, z8v4.value, z8v5.value)
}
for (item of document.querySelectorAll('#z8 input')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            rez8(z8v1.value, z8v2.value, z8v3.value, z8v4.value, z8v5.value)
        }
    })
}
function rez8(a, b, c, d, e) {
    let f = false
    a = Number(a)
    b = Number(b)
    c = Number(c)
    d = Number(d)
    e = Number(e)
    if (z8v1.value !== '') {
        if (Number.isInteger(a)) {
            if (f == false)
                f = a
            else
                if (a > f)
                    f = a
        }
        else {
            r8.innerHTML = 'Неверно'
            return
        }
    }
    if (z8v2.value !== '') {
        if (Number.isInteger(b)) {
            if (f == false)
                f = b
            else
                if (b > f)
                    f = b
        }
        else {
            r8.innerHTML = 'Неверно'
            return
        }
    }
    if (z8v3.value !== '') {
        if (Number.isInteger(c)) {
            if (f == false)
                f = c
            else
                if (c > f)
                    f = c
        }
        else {
            r8.innerHTML = 'Неверно'
            return
        }
    }
    if (z8v4.value !== '') {
        if (Number.isInteger(d)) {
            if (f == false)
                f = d
            else
                if (d > f)
                    f = d
        }
        else {
            r8.innerHTML = 'Неверно'
            return
        }
    }
    if (z8v5.value !== '') {
        if (Number.isInteger(e)) {
            if (f == false)
                f = e
            else
                if (e > f)
                    f = e
        }
        else {
            r8.innerHTML = 'Неверно'
            return
        }
    }
    if (f == false) { r8.innerText = "Нет значений" }
    else {
        r8.innerText = f
    }



}
// 9
z9btn.onclick = function (e) {
    rez9(z9v1.value, z9v2.value, document.querySelector('#z9 input[type="radio"]:checked').value)
}
for (item of document.querySelectorAll('#z9 input')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            rez9(z9v1.value, z9v2.value, document.querySelector('#z9 input[type="radio"]:checked').value)
        }
    })
}
function rez9(a, b, c) {
    if (z9v1.value !== '' && z9v2.value !== '') {
        a = Number(a)
        b = Number(b)
        if (Number.isInteger(a) && Number.isInteger(b)) {
            r9.innerHTML = ''
            if (c == 'false') {
                if (a > b) {
                    for (let i = b; i < a; i++) {
                        if (i % 2 !== 0)
                            r9.innerHTML += i + ' '
                    }
                }
                else {
                    for (let i = a; i < b; i++) {
                        if (i % 2 !== 0)
                            r9.innerHTML += i + ' '
                    }
                }
            }
            else {
                if (a > b) {
                    for (let i = b; i < a; i++) {
                        if ((i % 2) == 0)
                            r9.innerHTML += i + ' '
                    }
                }
                else {
                    for (let i = a; i < b; i++) {
                        if ((i % 2) == 0)
                            r9.innerHTML += i + ' '
                    }
                }
            }
        }
        else
            r9.innerHTML = 'Неверно'
    }
    else {
        r9.innerHTML = 'Нет зачений'
    }

}
// 10
z10btn.onclick = function (e) {
    rez10(z10v1.value, z10v2.value, z10v3.value)
}
for (item of document.querySelectorAll('#z10 input')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            rez10(z10v1.value, z10v2.value, z10v3.value)
        }
    })
}
function rez10(year, month, day) {
    if (z10v1.value !== '' && z10v2.value !== '' && z10v3.value !== '') {
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
                    if (day <= days && day > 0) {
                        r10.innerHTML = `${year}:${month}:${day}`
                    }
                    else {
                        r10.innerHTML = 'Неверно день'
                    }
                }
                else {
                    r10.innerHTML = 'Неверно мес'
                }

            }
            else {
                r10.innerHTML = 'Неверно год'
            }
        }
        else
            r10.innerHTML = 'Неверно тип'
    }
    else {
        r10.innerHTML = 'Нет зачений'
    }
}
// if (this.value.length > 20) {
//     z10v1Width += 5
//     z10v1.style.width = z8v1Width + 'px'
// }