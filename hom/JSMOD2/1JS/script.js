// function rezult(obj, text) {
//     let paddingR = (90 - text.length * 6 < 5) ? 5 : 90 - text.length * 6
//     // let paddingL = ()
//     obj.style.paddingRight = paddingR + 'px'
//     obj.innerHTML = text
// }

// 1

function createObject(a, b) {
    return { a, b }
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
// if (this.value.length > 20) {
//     z10v1Width += 5
//     z10v1.style.width = z8v1Width + 'px'
// }