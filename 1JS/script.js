// Проверка на int
// function inta() {
//     let x = Number(prompt("Введите первое число"))
//     if (Number.isInteger(x)) {

//     }
//     else {
//         while (Number.isInteger(x)) {
//             let x = Number(prompt("Введите первое число"))
//         }
//     }
// }

// 1

function rezult(obj, text) {
    let paddingR = (90-text.length*6<5)?5:90-text.length*6
    // let paddingL = ()
    obj.style.paddingRight = paddingR+'px'
    obj.innerHTML = text
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
        //r1.innerText = (Number(a) ** 2)
        rezult(r1, String((Number(a) ** 2)))
    } else {
        rezult(r1, 'Не все данные')
        //r1.innerText = 'Не все данные'
    }

}
// 2
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
        rezult(r2, String((Number(a) + Number(b)) / 2))
    } else {
        rezult(r2,'Не все данные')
    }

}
// 3
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
        rezult(r3, String(Number(a) * Number(a)))
    } else {
        rezult(r3, 'Не все данные')
    }

}


// 4
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
        const mile = 0.621371
        rezult(r4, String(z4v1.value * mile).toFixed(2))
    } else {
        rezult(r4,'Не все данные')
    }

}
// 5
z5btn.onclick = function (e) {
    rez5(z5v1.value, z5v2.value)
}
for (item of document.querySelectorAll('#z5 input')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            rez5(z5v1.value, z5v2.value)
        }
    })
}
function rez5(a, b) {
    if (z5v1.value !== '' && z5v2.value !== '') {
        let c
        a = Number(a)
        b = Number(b)
        if (b != 0) {
            c = a / b
        }
        else {
            c = "Деление на ноль невозможно"
        }
        rezult(r5v1, `Сложение -> ${a + b}`)
        rezult(r5v2 ,`Вычитание -> ${a - b}`)
        rezult(r5v3,`Умножение -> ${a * b}<br>`)
        rezult(r5v4, `Деление -> ${c}`)
    } else {
        rezult(r5v1,'Не все данные')
        r5v2.innerText = ''
        r5v3.innerText = ''
        r5v4.innerText = ''
    }

}
// 6
z6btn.onclick = function (e) {
    rez6(z6v1.value, z6v2.value)
}
for (item of document.querySelectorAll('#z6 input')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            rez6(z6v1.value, z2v2.value)
        }
    })
}
function rez6(a, b) {
    if (z6v1.value !== '' && z6v2.value !== '') {
        let c
        if (a == 0) {
            c = "Неудача"
        }
        else {
            a = Number(a)
            b = Number(b)
            c = (b / (0 - a)).toFixed(2)
        }
        r6v1.innerText = `${(a)}x + ${b} = 0`
        r6v2.innerText = `x = ${c}`
    } else {
        r6v1.innerText = 'Не все данные'
        r6v2.innerText = ""
    }

}
// 7
z7btn.onclick = function (e) {
    rez7(z7v1.value, z7v2.value)
}
for (item of document.querySelectorAll('#z7 input')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            rez7(z7v1.value, z7v2.value)
        }
    })
}
function rez7(b, c) {
    if (b !== '' && c !== '') {
        let a
        c = Number(c)
        b = Number(b)
        if (b > 23 || b < 0) {
            r7.innerText = "Неверные данные"
        }
        else {
            if (c > 59 || c < 0) {
                r7.innerText = "Неверные данные"
            }
            else {
                c = b * 60 + c
                c = 60 * 24 - c
                a = c % 60
                b = Number(((c - a) / 60).toFixed(0))
                r7.innerText = `${b} : ${(a == 0) ? "00" : a}`
            }
        }

    } else {
        r7.innerText = 'Не все данные'
    }

}
// 8
z8btn.onclick = function (e) {
    rez8(z8v1.value)
}
let z8v1Width = 200
z8v1.style.width = z8v1Width + 'px'
for (item of document.querySelectorAll('#z8 input')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            rez8(z8v1.value)
        }
    })
}
function rez8(a) {
    if (z8v1.value !== '') {
        if (a > 999 || a < 100) {
            r8.innerText = 'Неверное значение'
        }
        else {
            a = Number(a)
            r8.innerText = ((a % 100 - ((a % 100) % 10)) / 10)
        }
    } 
    else {
        r8.innerText = 'Не все данные'
    }

}
// 9
z9btn.onclick = function (e) {
    rez9(z9v1.value)
}
let z9v1Width = 200
z9v1.style.width = z9v1Width + 'px'
for (item of document.querySelectorAll('#z9 input')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            rez9(z9v1.value)
        }
    })
}
function rez9(a) {
    if (z9v1.value !== '') {
        if (a > 99999 || a < 10000) {
            r9.innerText = 'Неверное значение'
        }
        else {
            let b = (a[a.length - 1])
            for (let i = 0; i < a.length - 1; i++) {
                b += a[i]

            }
            b = Number(b)
            if (Number.isInteger(b)) {
                r9.innerText = b
            } else {
                r9.innerText = 'Неверное значение'
            }

        }
    } 
    else {
        r9.innerText = 'Не все данные'
    }

}
// 10
z10btn.onclick = function (e) {
    rez10(z10v1.value)
}
let z10v1Width = 200
z10v1.style.width = z10v1Width + 'px'
for (item of document.querySelectorAll('#z10 input')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            rez10(z10v1.value)
        }
    })
}
function rez10(a) {
    if (z10v1.value !== '') {
        if (a < 0) {
            r10.innerText = 'Неверное значение'
        }
        else {
            r10.innerText = `${(250 + (a * 0.10)).toFixed(1)}\$`
        }
    } 
    else {
        r10.innerText = 'Не все данные'
    }

}
// if (this.value.length > 20) {
//     z10v1Width += 5
//     z10v1.style.width = z8v1Width + 'px'
// }