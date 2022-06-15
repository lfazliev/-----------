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
            if (a > b) {
                r1.innerHTML = String(b)
            }
            else {
                r1.innerHTML = String(a)
            }
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
            c = (a / b).toFixed(0)
            d = ((Number(a / b) - c) * b).toFixed(0)
            r6.innerHTML = d
        }
        else
            r6.innerHTML = 'Неверно'
    }
    else {
        r6.innerHTML = 'Нет зачений'
    }

}
// 7
// z7btn.onclick = function (e) {
//     rez7(z7v1.value, z7v2.value)
// }
// for (item of document.querySelectorAll('#z7 input')) {
//     item.addEventListener('keypress', function (e) {
//         if (e.key == 'Enter') {
//             rez7(z7v1.value, z7v2.value)
//         }
//     })
// }
// function rez7(a, b) {
//     if (z7v1.value !== '' && z7v2.value !== '') {
//         a = Number(a)
//         b = Number(b)
//         c = Number(b)
//         d = Number(b)
//         e = Number(b)
//         if (Number.isInteger(a)) {

//         }
//         else
//             r7.innerHTML = 'Неверно'
//     }
//     else {
//         r7.innerHTML = 'Нет зачений'
//     }

// }
// z6btn.onclick = function (e) {
//     rez6(z6v1.value, z6v2.value)
// }
// for (item of document.querySelectorAll('#z6 input')) {
//     item.addEventListener('keypress', function (e) {
//         if (e.key == 'Enter') {
//             rez6(z6v1.value, z6v2.value)
//         }
//     })
// }
// function rez6(a, b) {
//     if (z6v1.value !== '' && z6v2.value !== '') {
//         a = Number(a)
//         b = Number(b)
//         if (Number.isInteger(a)) {
//             let c
//             for (let i = a; i < b; i++) {
//                 if (i % 2 == 0)
//             }
//         }
//         else
//             r6.innerHTML = 'Неверно'
//     }
//     else {
//         r6.innerHTML = 'Нет зачений'
//     }

// }
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
            if (year > 1900 || year < 2035) {
                if (month > 1 || month < 12) {
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
                    if (day < days || day > 0) {
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