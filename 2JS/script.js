
// 1
function rezult(obj, text) {
    let paddingR = (90 - text.length * 6 < 5) ? 5 : 90 - text.length * 6
    obj.style.paddingRight = paddingR + 'px'
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
        a = Number(a)
        switch (true) {
            case a == 0:
                rezult(r1, 'Ноль');
                break;
            case a < 0:
                rezult(r1, 'Отрицательное');
                break;
            case a > 0:
                rezult(r1, 'Положительное');
                break;
            default:
                rezult(r1, 'Неверно');
                break;
        }
    }
    else {
        rezult(r1, 'Не все данные')
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
        if (a > 0 && a < 120)
            rezult(r2, 'Всё в порядке')
        else
            rezult(r2, "Неверно")
    }
    else {
        rezult(r2, 'Не все данные')
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
        a = Number(a)
        if (Number.isInteger(a)) {
            if (a < 0)
                rezult(r3, String(a * -1))
            else
                rezult(r3, String(a));
        }
        else { rezuult(r3, 'Неверный тип') }
    }
    else {
        rezult(r3, 'Не все данные')
    }
}
// 4
z4btn.onclick = function (e) {
    rez4(z4v1.value, z4v2.value, z4v3.value)
}
for (item of document.querySelectorAll('#z4 input')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            rez4(z4v1.value, z4v2.value, z4v3.value)
        }
    })
}
function rez4(a, b, c) {
    if (z4v1.value !== '' && z4v2.value !== '' && z4v3.value !== '') {

        if (a <= 23 && a >= 0)
            if (b <= 59 && b >= 0)
                if (c <= 59 && c >= 0)
                    rezult(r4v1, `${a} : ${(b == 0) ? "00" : (b < 10) ? '0' + b : b} ${c} sec`)
                else
                    rezult(r4v1, "Неверные значения");
            else
                rezult(r4v1, "Неверные значения");
        else
            rezult(r4v1, "Неверные значения")

    } else {
        rezult(r4v1, 'Не все данные')
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
        a = Number(a)
        b = Number(b)
        if (Number.isInteger(a) && Number.isInteger(b)) {
            if (a > 0) {
                if (b > 0) {
                    rezult(r5v1, `1 - (${a};${b})`)
                }
                else {
                    if (b == 0) {
                        rezult(r5v1, `1,4 - (${a};${b})`)
                    }
                    else {
                        rezult(r5v1, `4 - (${a};${b})`)
                    }
                }
            }
            else {
                if (a < 0) {
                    if (b < 0) {
                        rezult(r5v1, `3 - (${a};${b})`)
                    }
                    else {
                        if (b == 0) {
                            rezult(r5v1, `2,3 - (${a};${b})`)
                        }
                        else
                            rezult(r5v1, `2 - (${a};${b})`)
                    }
                }
                else {
                    if (a == 0) {
                        if (b == 0) {
                            rezult(r5v1, `1,2,3,4 - (${a};${b})`)
                        }
                        else {
                            if (b < 0) {
                                rezult(r5v1, `3,4 - (${a};${b})`)
                            }
                            else {
                                rezult(r5v1, `1,2 - (${a};${b})`)
                            }
                        }
                    }
                }
            }
        }
        else {
            rezult(r5v1, 'Неверный тип')
        }


    } else {
        rezult(r5v1, 'Не все данные')
    }
}
// 6
z6btn.onclick = function (e) {
    rez6(z6v1.value)
}
let z6v1Width = 200
z6v1.style.width = z6v1Width + 'px'
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
            switch (a) {
                case 1:
                    rezult(r6v1, 'Январь')
                    break;
                case 2:
                    rezult(r6v1, 'Февраль')
                    break;
                case 3:
                    rezult(r6v1, 'Март')
                    break;
                case 4:
                    rezult(r6v1, 'Апрель')
                    break;
                case 5:
                    rezult(r6v1, 'Май')
                    break;
                case 6:
                    rezult(r6v1, 'Июнь')
                    break;
                case 7:
                    rezult(r6v1, 'Июль')
                    break;
                case 8:
                    rezult(r6v1, 'Август')
                    break;
                case 9:
                    rezult(r6v1, 'Сентябрь')
                    break;
                case 10:
                    rezult(r6v1, 'Октябрь')
                    break;
                case 11:
                    rezult(r6v1, 'Ноябрь')
                    break;
                case 12:
                    rezult(r6v1, 'Декабрь')
                    break;
            }
        }
        else {
            rezult(r6v1, 'Неверный тип')
        }
    } else {
        rezult(r6v1, 'Не все данные')
    }
}
// 7
z7btnpl.onclick = function (e) {
    rez7(z7v1.value, z7v2.value, c = '+')
}
z7btnmin.onclick = function (e) {
    rez7(z7v1.value, z7v2.value, c = '-')
}
z7btndel.onclick = function (e) {
    rez7(z7v1.value, z7v2.value, c = '/')
}
z7btnumn.onclick = function (e) {
    rez7(z7v1.value, z7v2.value, c = '*')
}
for (item of document.querySelectorAll('#z7 input')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            rez7(z7v1.value, z7v2.value, c)
        }
    })
}
function rez7(a, b, c) {
    if (z7v1.value !== '' && z7v2.value !== '') {
        a = Number(a)
        b = Number(b)

        switch (true) {
            case c == '+':
                rezult(r7v1, `${(a + b).toFixed(3)}`)
                break;
            case c == '-':
                rezult(r7v1, `${(a - b).toFixed(3)}`)
                break;
            case c == '/':
                if (b != 0)
                    rezult(r7v1, `${(a / b).toFixed(3)}`)
                else
                    rezult(r7v1, `На ноль не делится`)
                break;
            case c == '*':
                rezult(r7v1, `${(a * b).toFixed(3)}`)
                break;
        }
    }
    else {
        rezult(r7v1, 'Не все данные')
    }

}
// 8
z8btn.onclick = function (e) {
    rez8(z8v1.value, z8v2.value)
}
for (item of document.querySelectorAll('#z8 input')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            rez8(z8v1.value, z8v2.value)
        }
    })
}
function rez8(a, b) {
    if (z8v1.value !== '' && z8v2.value !== '') {
        a = Number(a)
        b = Number(b)
        if (Number.isInteger(a) && Number.isInteger(b)) {
            if (a > b)
                rezult(r8v1, a)
            else
                rezult(r8v1, b)
        }
        else {
            rezult(r8v1, 'Неверный тип')
        }
    } else {
        rezult(r8v1, 'Не все данные')
    }
}
// 9
z9btn.onclick = function (e) {
    rez9(z9v1.value)
}
for (item of document.querySelectorAll('#z9 input')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            rez9(z9v1.value)
        }
    })
}
function rez9(a) {
    if (z9v1.value !== '') {
        a = Number(a)
        if (Number.isInteger(a)) {
            if (a % 5 == 0)
                rezult(r9v1, 'Кратно пяти')
            else
                rezult(r9v1, 'Не кратно пяти')
        }
        else {
            rezult(r9v1, 'Неверный тип')
        }
    } else {
        rezult(r9v1, 'Не все данные')
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
function rez10(a) {
    if (z10v1.value !== '') {
        if (a == 'Земля' || a == 'земля')
            rezult(r10v1, 'Привет, землянин!')
        else
            rezult(r10v1, 'Привет, инопланетянин!')
    } else {
        rezult(r10v1, 'Кратно пяти')
    }
}