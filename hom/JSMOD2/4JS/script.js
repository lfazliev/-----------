class PrintMachine {
    constructor(fontsize, color, fontfamily) {
        this.fontsize = fontsize
        this.color = color
        this.fontfamily = fontfamily
    }
    print(text, el) {
        el.innerHTML = ''
        let p = document.createElement('p')
        p.style.fontSize = this.fontsize
        p.style.color = this.color
        p.style.fontFamily = this.fontfamily
        p.innerText = text
        el.appendChild(p)
    }
}
// 1
z1btn.onclick = function (e) {
    rez1(z1v1.value, z1v2.value, z1v3.value, z1v4.value)
}
for (item of document.querySelectorAll('#z1 input')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            rez1(z1v1.value, z1v2.value, z1v3.value, z1v4.value)
        }
    })
}
function rez1(a, b, c, d) {
    if (z1v1.value !== '') {
        const content = new PrintMachine(b, c, d)
        content.print(a, r1)

    }
    else {
        r1.innerHTML = 'Нет зачений'
    }
}
// 2
z2btn.onclick = function (e) {
    rez1(z2v1.value, z2v2.value, z2v3.value, z2v4.value, z2v5.value, z2v6.value)
}
for (item of document.querySelectorAll('#z1 input')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            rez1(z1v1.value, z1v2.value, z1v3.value, z1v4.value)
        }
    })
}
function rez1(a, b, c, d, e, f) {
    if (z1v1.value !== '') {
        date = new date(d, e, f)
        acdate = new Date()
        if (date.get)
            for (let index = 0; index < array.length; index++) {
                const element = array[index];

            }

    }
    else {
        r1.innerHTML = 'Нет зачений'
    }
}
// if (this.value.length > 20) {
//     z10v1Width += 5
//     z10v1.style.width = z8v1Width + 'px'
// }