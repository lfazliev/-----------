// function rezult(obj, text) {
//     let paddingR = (90 - text.length * 6 < 5) ? 5 : 90 - text.length * 6
//     // let paddingL = ()
//     obj.style.paddingRight = paddingR + 'px'
//     obj.innerHTML = text
// }

// 1
function task1(a, b, c, d) {
    b = b * a
    a -= 1
    d++
    if (d < c) {
        task1(a, b, c, d)
    }
    else { r1.innerHTML = b }
}
z1btn.onclick = function (e) {
    rez1(z1v1.value)
}
for (item of document.querySelectorAll('#z1 input')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {

            rez1(z1v1.value)
        }
    })
}
function rez1(a) {
    if (z1v1.value !== '') {
        a = Number(a)
        if (Number.isInteger(a)) {
            if (a > 0) {
                let b = 1
                let c = a
                let d = 0
                task1(a, b, c, d)
                rezult(r1, b)
            } else {
                r5.innerHTML = 'Неверно'
            }
        } else { r5.innerHTML = 'Неверный тип данных' }
    }
    else {
        rezult(r1, 'Нет зачений')
    }
}
//2
function task2a(a, b, c) {
    if (a > b) {
        [a, b] = [b, a]
    }
    c = String(c)
    c += (a++)
    c += ' '
    if (a <= b) {
        task2a(a, b, c)
    }
    else {
        r2.innerHTML = c
    }

}
function task2b(a, b, c) {

    c = String(c)
    c += (a--)
    c += ' '
    if (a >= b) {
        task2b(a, b, c)
    }
    else {
        r2.innerHTML += `<br><br>${c}`
    }
}
z2btn.onclick = function (e) {
    rez2(z2v1.value, z2v2.value)
}
for (item of document.querySelectorAll('#z2 input')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            rez2(z2v1.value, z2v2.value)
        }
    })
}
function rez2(a, b) {
    if (z2v1.value !== '' && z2v2.value !== '') {
        a = Number(a)
        b = Number(b)
        let c = ''
        task2a(a, b, c)
        if (a < b) {
            [a, b] = [b, a]
        }
        task2b(a, b, c)
    }
    else {

        r2.innerHTML = 'Нет зачений'
    }

}
// 3
function task3(a, b, i) {
    b += a[i--]
    if (i >= 0) {
        task3(a, b, i)
    }
    else {
        r3.innerHTML = b
    }
}
z3btn.onclick = function (e) {
    rez3(z3v1.value)
}
for (item of document.querySelectorAll('#z3 input')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            rez3(z3v1.value)
        }
    })
}
function rez3(a) {
    if (z3v1.value !== '') {
        a = Number(a)
        let b = ''
        if (Number.isInteger(a)) {
            if (a > 0) {
                a = String(a)
                let i = a.length - 1
                task3(a, b, i)
            } else {
                r5.innerHTML = 'Неверно'
            }
        } else { r5.innerHTML = 'Неверный тип данных' }
    }
    else {

        r3.innerHTML = 'Нет зачений'
    }

}
// 4
function task4(a, b, i) {
    b += (Number(a[i++]))
    if (i < a.length) {
        task4(a, b, i)
    }
    else {
        r4.innerHTML = b
    }
}
z4btn.onclick = function (e) {
    rez4(z4v1.value)
}
for (item of document.querySelectorAll('#z4 input')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            rez4(z4v1.value)
        }
    })
}
function rez4(a) {
    if (z4v1.value !== '') {
        a = Number(a)
        if (Number.isInteger(a)) {
            if (a > 0) {
                a = String(a)
                let b = 0
                let i = 0
                task4(a, b, i)
            } else {
                r5.innerHTML = 'Неверно'
            }
        } else { r5.innerHTML = 'Неверный тип данных' }
    }
    else {

        r4.innerHTML = 'Нет зачений'
    }

}
// 5
function task5(a, b, i) {
    if (i == 0) {
        r5.innerHTML += "("
        b++
        if (a == b)
            i = 1
    }
    else {
        r5.innerHTML += ")"
        b--
        if (b == 0) { i = 2 }
    }
    if (i == 1 || i == 0)
        task5(a, b, i)
}
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
        if (Number.isInteger(a)) {
            if (a > 0) {
                r5.innerHTML = ''
                let i = 0
                let b = 0
                task5(a, b, i)
            } else {
                r5.innerHTML = 'Неверно'
            }
        } else { r5.innerHTML = 'Неверный тип данных' }
    }
    else {

        r5.innerHTML = 'Нет зачений'
    }

}
// if (this.value.length > 20) {
//     z10v1Width += 5
//     z10v1.style.width = z8v1Width + 'px'
// }