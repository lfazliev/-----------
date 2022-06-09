
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
        switch (true) {
            case a > 0 && a < 120:
                rezult(r2, 'Всё в порядке');
                break;
            default:
                rezult(r2, "Неверно");
                break;
        }
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
            switch (true) {
                case a < 0: rezult(r3, String(a * -1)); break;
                default:
                    rezult(r3, String(a));
                    break;
            }
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
function rez5(x, y) {
    if (z5v1.value !== '' && z5v2.value !== '') {
        x = Number(x)
        y = Number(y)
        if (Number.isInteger(x) && Number.isInteger(y)) {
            if (x > 0) {
                if (y > 0) {
                    rezult(r5v1, `1 - (${x};${y})`)
                }
                else {
                    if (y == 0) {
                        rezult(r5v1, `1,4 - (${x};${y})`)
                    }
                    else {
                        rezult(r5v1, `4 - (${x};${y})`)
                    }
                }
            }
            else {
                if (x < 0) {
                    if (y < 0) {
                        rezult(r5v1, `3 - (${x};${y})`)
                    }
                    else {
                        if (y == 0) {
                            rezult(r5v1, `2,3 - (${x};${y})`)
                        }
                        else
                            rezult(r5v1, `2 - (${x};${y})`)
                    }
                }
                else {
                    if (x == 0) {
                        if (y == 0) {
                            rezult(r5v1, `1,2,3,4 - (${x};${y})`)
                        }
                        else {
                            if (y < 0) {
                                rezult(r5v1, `3,4 - (${x};${y})`)
                            }
                            else {
                                rezult(r5v1, `1,2 - (${x};${y})`)
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