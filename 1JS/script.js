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

// inta()
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
        r1.innerText = (Number(a) ** 2)
    } else {
        r1.innerText = 'Не все данные'
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
        r2.innerText = ((Number(a) + Number(b)) / 2)
    } else {
        r2.innerText = 'Не все данные'
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
        r3.innerText = (Number(a) * Number(a))
    } else {
        r3.innerText = 'Не все данные'
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
        r4.innerText = (z4v1.value * mile).toFixed(2)
    } else {
        r4.innerText = 'Не все данные'
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
        r5v1.innerText = `Сложение - ${a + b}`
        r5v2.innerHTML = `Вычитание- ${a - b}<br>`
        r5v3.innerText = `Умножение - ${a * b}`
        r5v4.innerText = `Деление - ${c}`
    } else {
        r5.innerText = 'Не все данные'
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
        r6.innerText = 'Не все данные'
    }

}
// 7
z7btn.onclick = function (e) {
    rez7(z7v1.value, z7v2.value)
}
for (item of document.querySelectorAll('#z7 input')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            rez2(z7v1.value, z7v2.value)
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
                b = Number(((c -a)/ 60).toFixed(0))
                r7.innerText = `${b} : ${(a==0)?"00":a}`
            }
        }

    } else {
        r7.innerText = 'Не все данные'
    }

}

// let hour
// let min
// let a
// do {
//    hour = Number(prompt("Введите час"))
// }while (hour > 23 || hour < 0)
// do {
//     min = Number(prompt("Введите минуту"))
// }while (min > 59 || min < 0)
// min = hour * 60 + min
// min = 60*24 - min
// a = min % 60
// hour = Number(((min -a)/ 60).toFixed(0))
// alert(`${hour} : ${a}`)
// 8
// let a
// do {
//         a = Number(prompt("Введите число"))
//      }while (a > 999 || a < 100)
// alert(a = (a%100 - ((a % 100)%10))/10)
// 9
// let a
// let b
// do {
//     a = prompt("Введите число")
// } while (a > 99999 || a < 10000)
// b = a[a.length-1]
// for(let i =0;i<a.length-1;i++)
//     b+=a[i]
// console.log(b)

// 10
// let sale
// do{
//     sale = Number(prompt("Введите сумму продаж за месяц"))
// }while (sale < 0)
// alert(`${250 + (sale * 0.10)}\$`)
