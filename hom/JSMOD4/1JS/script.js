// 1
function checknum() {
    if (Number(number.innerHTML) > 9 || Number(number.innerHTML) < 0) {
        if (Number(number.innerHTML) < -9 || Number(number.innerHTML) > 99) {
            if (Number(number.innerHTML) < -99 || Number(number.innerHTML) > 999) {
                container.style.width = 105 + 'px'
            }
            else {
                container.style.width = 90 + 'px'
            }
        }
        else {
            container.style.width = 75 + 'px'
        }
    }
    else {
        container.style.width = null
    }
}


btnup.onclick = function () {
    number.innerHTML = Number(number.innerHTML) + 1
    checknum()
}
btndwn.onclick = function () {
    number.innerHTML = Number(number.innerHTML) - 1
    checknum()
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
let city = ['Москва', "Ижевск", 'Сочи', 'Санкт-петербург', 'Новосибирск', 'Екатеринбург', 'Казань', 'Нижний Новгород']
z5v1.addEventListener('input', function () {
    for (let i = 0; i < 10; i++) {
        let b = character.children[i]
        b.value = ''
    }
    if (z5v1.value != '') {
        let a = city.filter(e => {
            b = e.toLowerCase()
            if (b.match(z5v1.value.toLowerCase())) {
                return e
            }
        })
        console.log(a)
        for (let i = 0; i < 10; i++) {
            let b = character.children[i]
            b.value = a[i]
        }
    }
})


// if (this.value.length > 20) {
//     z10v1Width += 5
//     z10v1.style.width = z8v1Width + 'px'
// }