// Определение объекта
rectangle = {
    ax: 0,
    ay: 0,
    cx: 0,
    cy: 0
}
function app() { rez1(); rez2(); rez3(); rez4(); rez5(); }
function apprr() {
    if (z111v1.value !== '' && z111v2.value !== '' && z111v3.value !== '' && z111v4.value) {
        if (Number(z111v1.value) < Number(z111v3.value) && Number(z111v2.value) < Number(z111v4.value)) {
            rectangle = {
                ax: Number(z111v1.value),
                ay: Number(z111v2.value),
                cx: Number(z111v3.value),
                cy: Number(z111v4.value)
            }
            app()
        } else {
            r1.innerHTML = 'Неверное значение'
        }
    }
    else {
        r1.innerHTML = 'Нет зачений'
    }
}
z111btn.onclick = function (e) {
    apprr()
}
for (item of document.querySelectorAll('#z111 input')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            if (z111v1.value !== '' && z111v2.value !== '' && z111v3.value !== '' && z111v4.value) {
                if (Number(z111v1.value) < Number(z111v3.value) && Number(z111v2.value) < Number(z111v4.value)) {
                    rectangle = {
                        ax: Number(z111v1.value),
                        ay: Number(z111v2.value),
                        cx: Number(z111v3.value),
                        cy: Number(z111v4.value)
                    }
                    app()
                } else {
                    r1.innerHTML = 'Неверное значение'
                }
            }
            else {
                r1.innerHTML = 'Нет зачений'
            }

        }
    })
}
function rez1() {
    r1.innerHTML = `A(${rectangle.ax};${rectangle.ay})<br>C(${rectangle.cx};${rectangle.cy})`
}
function rez2() {
    r2.innerHTML = rectangle.cx - rectangle.ax
}
function rez3() {
    r3.innerHTML = rectangle.cy - rectangle.ay
}
function rez4() {
    r4.innerHTML = (rectangle.cx - rectangle.ax) * (rectangle.cy - rectangle.ay)
}
function rez5() {
    r5.innerHTML = (rectangle.cx + rectangle.ax + rectangle.cy + rectangle.ay) * 2
}
// 6
z6btn.onclick = function (e) {
    if (z6v1.value !== '') {
        rez6(z6v1.value)
    }
}
for (item of document.querySelectorAll('#z111 input')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            if (z6v1.value !== '') {
                rez6(z6v1.value)
            }

        }
    })
}
function rez6(a) {
    if (z111v1.value !== '' && z111v2.value !== '' && z111v3.value !== '' && z111v4.value) {
        if (Number.isInteger(Number(a))) {
            if (a < 0) {
                if (((Number(z111v3.value) - Number(z111v1.value)) + Number(a)) > 0) {

                    z111v3.value = Number(z111v3.value) + Number(a)
                    apprr()
                }
            }
            else {
                z111v3.value = Number(z111v3.value) + Number(a)
                apprr()
            }

        }
    }
}
// 7
z7btn.onclick = function (e) {
    if (z7v1.value !== '') {
        rez7(z7v1.value)
    }
}
for (item of document.querySelectorAll('#z111 input')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            if (z7v1.value !== '') {
                rez7(z7v1.value)
            }

        }
    })
}
function rez7(a) {
    if (z111v1.value !== '' && z111v2.value !== '' && z111v3.value !== '' && z111v4.value) {
        if (Number.isInteger(Number(a))) {
            if (a < 0) {
                if (((Number(z111v4.value) - Number(z111v2.value)) + Number(a)) > 0) {

                    z111v4.value = Number(z111v4.value) + Number(a)
                    apprr()
                }
            }
            else {
                z111v4.value = Number(z111v4.value) + Number(a)
                apprr()
            }

        }
    }
}
// 8
z8btn.onclick = function (e) {
    if (z8v1.value !== '' && z8v2.value !== '') {
        rez8(z8v1.value, z8v2.value)
    }
}
for (item of document.querySelectorAll('#z111 input')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            if (z8v1.value !== '') {
                rez8(z8v1.value, z8v2.value)
            }

        }
    })
}
function rez8(a, b) {

    if (z111v1.value !== '' && z111v2.value !== '') {
        if (Number.isInteger(Number(a))) {
            if (a > 0) {
                z111v3 = Number(z111v1) + a
                apprr()
            }


        }
        if (Number.isInteger(Number(b))) {
            if (b > 0) {
                z111v4.value = Number(z111v2) + b
                apprr()
            }


        }
    }
}
// 9
z9btn.onclick = function (e) {
    if (z9v1.value !== '') {
        rez9(z9v1.value)
    }
}
for (item of document.querySelectorAll('#z111 input')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            if (z9v1.value !== '') {
                rez9(z9v1.value)
            }

        }
    })
}
function rez9(a) {

    if (z111v1.value !== '' && z111v2.value !== '' && z111v3.value !== '' && z111v4.value) {
        if (Number.isInteger(Number(a))) {
            if (a > 0) {
                z111v1.value = a
                z111v3.value = a
            }
        }
    }
}
// 10
z10btn.onclick = function (e) {
    if (z10v1.value !== '') {
        rez10(z10v1.value)
    }
}
for (item of document.querySelectorAll('#z111 input')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            if (z10v1.value !== '') {
                rez10(z10v1.value)
            }

        }
    })
}
function rez10(a) {

    if (z111v1.value !== '' && z111v2.value !== '' && z111v3.value !== '' && z111v4.value) {
        if (Number.isInteger(Number(a))) {
            if (a > 0) {
                z111v2.value = a
                z111v4.value = a
            }
        }
    }
}

// if (this.value.length > 20) {
//     z10v1Width += 5
//     z10v1.style.width = z8v1Width + 'px'
// }