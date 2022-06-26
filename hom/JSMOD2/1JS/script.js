// Определение объекта
rectangle = {
    ax: 0,
    ay: 0,
    cx: 0,
    cy: 0
}
function app() { rez1(); rez2(); rez3(); rez4(); rez5(); }
function apprr() {
    if (z111v1.value !== '' && z111v2.value !== '' && z111v3.value !== '' && z111v4.value !== '') {
        if (Number(z111v1.value) < Number(z111v3.value) && Number(z111v2.value) < Number(z111v4.value)) {
            rectangle = {
                ax: Number(z111v1.value),
                ay: Number(z111v2.value),
                cx: Number(z111v3.value),
                cy: Number(z111v4.value)
            }
            app()
        } else {
            alert('Invalid value')
        }
    }
    else {
        alert('Нет зачений прямоугольника')
    }
}
z111btn.onclick = function (e) {
    apprr()
}
for (item of document.querySelectorAll('#z111 input')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            if (z111v1.value !== '' && z111v2.value !== '' && z111v3.value !== '' && z111v4.value !== '') {
                if (Number(z111v1.value) < Number(z111v3.value) && Number(z111v2.value) < Number(z111v4.value)) {
                    rectangle = {
                        ax: Number(z111v1.value),
                        ay: Number(z111v2.value),
                        cx: Number(z111v3.value),
                        cy: Number(z111v4.value)
                    }
                    app()
                }
                else {
                    alert('Invalid value')
                }
            }
            else {
                alert('Нет зачений прямоугольника')
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
    else {
        alert('Нет зачений')
    }
}
for (item of document.querySelectorAll('#z111 input')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            if (z6v1.value !== '') {
                rez6(z6v1.value)
            }
            else {
                alert('Нет зачений')
            }

        }
    })
}
function rez6(a) {
    if (z111v1.value !== '' && z111v2.value !== '' && z111v3.value !== '' && z111v4.value !== '') {
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
        else {
            alert('Invalid value')
        }
    }
    else {
        alert('Нет зачений прямоугольника')
    }
}
// 7
z7btn.onclick = function (e) {
    if (z7v1.value !== '') {
        rez7(z7v1.value)
    }
    else {
        alert('Нет зачений')
    }
}
for (item of document.querySelectorAll('#z111 input')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            if (z7v1.value !== '') {
                rez7(z7v1.value)
            }
            else {
                alert('Нет зачений')
            }

        }
    })
}
function rez7(a) {
    if (z111v1.value !== '' && z111v2.value !== '' && z111v3.value !== '' && z111v4.value !== '') {
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
        else {
            alert('Invalid value')
        }
    }
    else {
        alert('Нет зачений прямоугольника')
    }
}
// 8
z8btn.onclick = function (e) {
    if (z8v1.value !== '' && z8v2.value !== '') {
        rez8(z8v1.value, z8v2.value)
    }
    else {
        alert('Нет зачений')
    }
}
for (item of document.querySelectorAll('#z111 input')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            if (z8v1.value !== '') {
                rez8(z8v1.value, z8v2.value)
            }
            else {
                alert('Нет зачений')
            }

        }
    })
}
function rez8(a, b) {

    if (z111v1.value !== '' && z111v2.value !== '') {
        if (Number.isInteger(Number(a)) && Number.isInteger(Number(b))) {
            if (a > 0) {
                z111v3.value = Number(z111v1.value) + Number(a)
                apprr()
            }
            if (b > 0) {
                z111v4.value = Number(z111v2.value) + Number(b)
                apprr()
            }


        }
        else {
            alert('Invalid value')
        }
    }
    else {
        alert('Нет зачений прямоугольника')
    }
}
// 9
z9btn.onclick = function (e) {
    if (z9v1.value !== '') {
        rez9(z9v1.value)
    }
    else {
        alert('Нет зачений')
    }
}
for (item of document.querySelectorAll('#z111 input')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            if (z9v1.value !== '') {
                rez9(z9v1.value)
            }
            else {
                alert('Нет зачений')
            }

        }
    })
}
function rez9(a) {

    if (z111v1.value !== '' && z111v2.value !== '' && z111v3.value !== '' && z111v4.value !== '') {
        if (Number.isInteger(Number(a))) {
            z111v1.value = Number(z111v1.value) + Number(a)
            z111v3.value = Number(z111v3.value) + Number(a)
            apprr()
        }
        else {
            alert('Invalid value')
        }
    }
    else {
        alert('Нет зачений прямоугольника')
    }
}
// 10
z10btn.onclick = function (e) {
    if (z10v1.value !== '') {
        rez10(z10v1.value)
    }
    else {
        alert('Нет зачений')
    }
}
for (item of document.querySelectorAll('#z111 input')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            if (z10v1.value !== '') {
                rez10(z10v1.value)
            }
            else {
                alert('Нет зачений')
            }

        }
    })
}
function rez10(a) {

    if (z111v1.value !== '' && z111v2.value !== '' && z111v3.value !== '' && z111v4.value !== '') {
        if (Number.isInteger(Number(a))) {

            z111v2.value = Number(z111v2.value) + Number(a)
            z111v4.value = Number(z111v4.value) + Number(a)
            apprr()

        }
        else {
            alert('Invalid value')
        }
    }
    else {
        alert('Нет зачений прямоугольника')
    }
}
// 11
z11btn.onclick = function (e) {
    if (z11v1.value !== '' && z11v2.value !== '') {
        rez11(z11v1.value, z11v2.value)
    }
    else {
        alert('Нет зачений')
    }
}
for (item of document.querySelectorAll('#z111 input')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            if (z11v1.value !== '' && z11v2.value !== '') {
                rez11(z11v1.value, z11v2.value)
            }
            else {
                alert('Нет зачений')
            }

        }
    })
}
function rez11(a, b) {

    if (z111v1.value !== '' && z111v2.value !== '' && z111v3.value !== '' && z111v4.value !== '') {
        if (Number.isInteger(Number(a)) && Number.isInteger(Number(b))) {
            z111v1.value = Number(z111v1.value) + Number(a)
            z111v3.value = Number(z111v3.value) + Number(a)
            z111v2.value = Number(z111v2.value) + Number(b)
            z111v4.value = Number(z111v4.value) + Number(b)
            apprr()

        }
        else {
            alert('Invalid value')
        }
    }
    else {
        alert('Нет зачений прямоугольника')
    }
}
// 12
z12btn.onclick = function (e) {
    if (z12v1.value !== '' && z12v2.value !== '') {
        rez12(z12v1.value, z12v2.value)
    }
    else {
        alert('Нет зачений')
    }
}
for (item of document.querySelectorAll('#z121 input')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            if (z12v1.value !== '' && z12v2.value !== '') {
                rez12(z12v1.value, z12v2.value)
            }
            else {
                alert('Нет зачений')
            }

        }
    })
}
function rez12(a, b) {

    if (z111v1.value !== '' && z111v2.value !== '' && z111v3.value !== '' && z111v4.value !== '') {
        if (Number.isInteger(Number(a)) && Number.isInteger(Number(b))) {
            apprr()
            if (a > rectangle.ax && a < rectangle.cx && b > rectangle.ay && b < rectangle.cy) {
                r12.innerHTML = 'Подходит'
            }
            else {
                r12.innerHTML = 'Не подходит'
            }
        }
        else {
            alert('Invalid value')
        }
    }
    else {
        alert('Нет зачений прямоугольника')
    }
}
// if (this.value.length > 20) {
//     z10v1Width += 5
//     z10v1.style.width = z8v1Width + 'px'
// }