// 1
btnup.onclick = function () {
    number.innerHTML = Number(number.innerHTML) + 1
    if (Number(number.innerHTML) > 99) {
        container.style.width = 90 + 'px'
    }
    else {
        if (Number(number.innerHTML) < 0 || Number(number.innerHTML) > 9) {
            container.style.width = 75 + 'px'
        }
        else {
            container.style.width = null
        }
    }
}
btndwn.onclick = function () {
    number.innerHTML = Number(number.innerHTML) - 1
    if (Number(number.innerHTML) < 100 && Number(number.innerHTML) > 9) {
        container.style.width = 75 + 'px'
    }
    else {
        if (Number(number.innerHTML) < 0) {
            container.style.width = 75 + 'px'
        }
        else if (Number(number.innerHTML) < 10) {
            container.style.width = null
        }
    }
}
let appDivcol
z2btn.onclick = function () {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    let divcol = document.createElement('div');
    divcol.style.width = '30px';
    divcol.style.height = '30px';
    divcol.style.backgroundColor = color
    divcol.style.cursor = 'pointer';
    divcol.style.border = '1px solid black';
    colholder.appendChild(divcol)
    appDivcol = document.querySelectorAll('#colholder>div')
    for (item of appDivcol) {
        item.onclick = function () { this.remove() }
    }
}
let pipet = document.querySelectorAll('#colplace>div')
for (item of pipet) {
    item.onclick = function () {
        z3text.style.color = this.dataset.backgroundColor
    }
}
for (item of document.querySelectorAll('#z4 input')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            rez4(z4v1.value, z4v2.value)
        }
    })
}
z4btn.onclick = function (e) {
    rez4(z4v1.value, z4v2.value)
}
function rez4(a, b) {
    if (a !== '' && b !== '') {
        if (comlist.innerHTML == 'Нет комментариев') {
            comlist.innerHTML = ''
        }
        let com = document.createElement('div')
        let name = document.createElement('p')
        name.style.fontWeight = 'bold'
        name.style.paddingBottom = '5px'
        let hr = document.createElement('hr')
        hr.style.height = 2 + 'px'
        name.innerHTML = a
        let date = document.createElement('div')
        let nowdate = new Date()
        date.innerHTML = nowdate.toLocaleDateString()
        date.style.fontSize = '12px'
        date.style.paddingBottom = '5px'
        let text = document.createElement('p')
        text.innerHTML = b
        com.appendChild(name)
        com.appendChild(date)
        com.appendChild(text)
        com.style.padding = '20px 0 20px 0'
        comlist.appendChild(com)
        comlist.appendChild(hr)
    }
}
// if (this.value.length > 20) {
//     z10v1Width += 5
//     z10v1.style.width = z8v1Width + 'px'
// }