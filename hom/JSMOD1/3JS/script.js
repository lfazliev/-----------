function rezult(obj, text) {
    let paddingR = (90 - text.length * 6 < 5) ? 5 : 90 - text.length * 6
    obj.style.paddingRight = paddingR + 'px'
    obj.innerHTML = text
}
// 1
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
            r1.innerHTML = ""
            a = Number(a)
            let b = 0
            while (b < a) {
                b++
                rezult(r1, r1.innerHTML += "# ")
            }
        }
        else
            rezult(r1, 'Неверно')
    }
    else {
        rezult(r1, 'Нет зачений')
    }
}
// 2
z2btn.onclick = function (e) {
    rez2(z2v1.value)
}
for (item of document.querySelectorAll('#z2 input')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            rez2(z2v1.value)
        }
    })
}
function rez2(a) {
    if (z2v1.value !== '') {
        a = Number(a)

        let i = a
        if (Number.isInteger(a)) {
            if (a > 0) {
                let b = -1
                r2.innerHTML = ""
                while (b < a) {

                    b++
                    rezult(r2, r2.innerHTML += (i + ' '))
                    i--
                }
            }
            else {
                let b = 1
                r2.innerHTML = ""
                while (b > a) {

                    b--
                    rezult(r2, r2.innerHTML += (i + ' '))
                    i++
                }
            }
        }
        else
            rezult(r2, 'Неверно')
    }
    else {
        rezult(r2, 'Нет зачений')
    }
}
// 3

z3btn.onclick = function (e) {
    rez3(z3v1.value, z3v2.value)
}
for (item of document.querySelectorAll('#z3 input')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            rez3(z3v1.value, z3v2.value)
        }
    })
}
function rez3(a, b) {
    if (z3v1.value !== '' && z3v2.value !== '') {
        a = Number(a)
        b = Number(b)
        if (Number.isInteger(a) && Number.isInteger(b)) {
            rezult(r3, a = a ** b)
        }
        else
            rezult(r3, 'Неверно')
    }
    else {
        rezult(r3, 'Нет зачений')
    }
}
// 4
z4btn.onclick = function (e) {
    rez4(z4v1.value, z4v2.value)
}
for (item of document.querySelectorAll('#z4 input')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            rez4(z4v1.value, z4v2.value)
        }
    })
}
function rez4(a, b) {
    if (z4v1.value !== '' && z4v2.value !== '') {
        a = Number(a)
        b = Number(b)
        let c = ''
        if (Number.isInteger(a) && Number.isInteger(b)) {
            for (let i = 0; i < ((a > b) ? a : b); i++) {
                if (a % i == 0 && b % i == 0)
                    c += String(i + ' ')
            }
            rezult(r4, c)
        }
        else
            rezult(r4, 'Неверно')
    }
    else {
        rezult(r4, 'Нет зачений')
    }
}
// 5
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
            let b = 1
            let c = a
            for (let i = 0; i < c; i++) {
                b = b * a
                console.log(a)
                a -= 1
            }
            rezult(r5, b)
        }
        else
            rezult(r5, 'Неверно')
    }
    else {
        rezult(r5, 'Нет зачений')
    }
}
// 6
z6btn.onclick = function (e) {
    rez6(z6v1.value)
}
for (item of document.querySelectorAll('#z6 input')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            rez6(z6v1.value)
        }
    })
}
function rez6(a) {
    if (z6v1.value !== '') {
        a = Number(a)
        if (Number.isInteger(a)) {
            if (a != 6)
                rezult(r6, 'Решено не верно')
            else
                rezult(r6, 'Верно!')
        }
        else
            rezult(r6, 'Неверный тип')
    }
    else {
        rezult(r6, 'Нет зачений')
    }
}
// 7
z7btn.onclick = function (e) {
    rez7()
}
function rez7() {
    let a = 1000
    r7.innerHTML = '1000 '
    for (let i = 0; a > 50; i++) {
        rezult(r7, r7.innerHTML += ((a /= 2) + ' '))

    }
}
// 8
z8btn.onclick = function (e) {
    rez8(z8v1.value)
}
for (item of document.querySelectorAll('#z8 input')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            rez8(z8v1.value)
        }
    })
}
function rez8(a) {
    if (z8v1.value !== '') {
        a = Number(a)
        if (Number.isInteger(a)) {
            r8.innerHTML = ''
            for (let i = 1; i < 100; i++) {
                if (i % a == 0) {
                    rezult(r8, r8.innerHTML += i + " ")
                }
            }
            if (r8.innerHTML == "") {
                rezult(r8, "Нету значений кратных " + a)
            }
        }
        else
            rezult(r8, 'Неверный тип')
    }
    else {
        rezult(r8, 'Нет зачений')
    }
}
// 9
z9btn.onclick = function (e) {
    rez9(z9v1.value, z9v2.value)
}
for (item of document.querySelectorAll('#z9 input')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            rez9(z9v1.value, z9v2.value)
        }
    })
}
function rez9(a, b) {
    r9.innerText = ''
    if (z9v1.value !== '' && z9v2.value !== '') {
        a = Number(a)
        b = Number(b)
        if (Number.isInteger(a) && Number.isInteger(b)) {
            if (a > b) {

            }
            else {
                for (let i = a; i < b;) {
                    for (let j = 0; j < 4; j++, i++) {
                        if (j == 3)
                            rezult(r9, r9.innerHTML += i + ' ')
                    }
                }
            }
        }
        else
            rezult(r9, 'Неверный тип')
    }
    else {
        rezult(r9, 'Нет зачений')
    }
}
// 10
z10btn.onclick = function (e) {
    rez10(z10v1.value)
}
for (item of document.querySelectorAll('#z10 input')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            rez10(z10v1.value)
        }
    })
}
// function rez10(a) {
//     if (z10v1.value !== '') {
//         a = Number(a)
//         if (Number.isInteger(a)) {
//             for (let i = 0; i < a; i++) {
//                 if (a % i == 0)
//                     if (i != a && i != 1) {
//                         return rezult(r10, 'Число не простое')
//                     }
//             }
//             rezult(r10, 'Число простое')
//         }
//         else
//             rezult(r10, 'Неверный тип')
//     }
//     else {
//         rezult(r10, 'Нет зачений')
//     }
// }
function rez10(a) {
    if (z10v1.value !== '') {
        a = Number(a)
        if (Number.isInteger(a)) {
            for (let i = 2; i < a; i++) {
                if (a % i == 0) {
                    return rezult(r10, 'Число не простое')
                }
            }
            rezult(r10, 'Число простое')
        }
        else rezult(r10, 'Неверный тип')
    }
    else rezult(r10, 'Нет зачений')
}