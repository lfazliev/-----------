function rezult(obj, text) {
    let paddingR = (90 - text.length * 6 < 5) ? 5 : 90 - text.length * 6
    // let paddingL = ()
    obj.style.paddingRight = paddingR + 'px'
    obj.style.display = 'inline-block'
    obj.innerHTML = text
}

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
                rezult(r1, String(b))
            }
            else {
                rezult(r1, String(a))
            }
        }
        else
            rezult(r1, 'Неверно')
    }
    else {
        rezult(r1, 'Нет зачений')
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
    r5.innerHTML = ''
    if (z5v1.value !== '') {
        a = Number(a)

        if (Number.isInteger(a)) {

            for (let i = 1; i < 10; i++) {
                let el = r5.appendChild(document.createElement('span'))
                rezult(el, String(`${i}*${a} = ${a * i}`))
            }
        }
        else {
            let el = r5.appendChild(document.createElement('span'))
            rezult(el, 'Неверно')
        }
    }
    else {
        let el = r5.appendChild(document.createElement('span'))
        rezult(el, 'Нет зачений')
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
    if (z6v1.value !== '') {
        a = Number(a)
        b = Number(b)


    }
    else {
        rezult(r6, 'Нет зачений')
    }

}
// if (this.value.length > 20) {
//     z10v1Width += 5
//     z10v1.style.width = z8v1Width + 'px'
// }