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
console.log(pipet)
for (item of pipet) {
    item.onclick = function () {
        z3text.style.color = this.dataset.backgroundColor
    }
}
// if (this.value.length > 20) {
//     z10v1Width += 5
//     z10v1.style.width = z8v1Width + 'px'
// }