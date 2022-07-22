like.onclick = function () {
    schet.innerHTML = Number(schet.innerHTML) + 1
}
let numP = document.querySelectorAll('.num > p')
for (item of numP) {
    item.onclick = function () {
        if (this.innerText == '=') {
            if (r3.innerHTML == '') {
                'Ничего нет'
            }
            else {
                r3.innerHTML = eval(r3.innerHTML)

            }
        }
        else {
            if (!Number.isInteger(Number(this.innerText))) {
                if (!Number.isInteger(Number(r3.innerHTML[r3.innerHTML.length - 1]))) {
                    if (r3.innerHTML.length > 1) {
                        r3.innerHTML = (r3.innerHTML).slice(0, -1)
                        r3.innerHTML += this.innerText
                    }
                    else {
                        if (this.innerText == '-' && r3.innerHTML[0] !== '-') {
                            r3.innerHTML += this.innerText
                        }
                    }

                }
                else
                    r3.innerHTML += this.innerText
            }
            else {
                r3.innerHTML += this.innerText
            }
        }
    }
    ster.onclick = function () {
        r3.innerHTML = (r3.innerHTML).slice(0, -1)
    }
}
menuelem = document.querySelectorAll('.elem')
document.onclick = function (e) {
    let clickel = document.elementFromPoint(e.clientX, e.clientY)
    if (clickel.className.indexOf('elem') == -1 &&
        clickel.parentElement.className.indexOf('elem') == -1 &&
        clickel.parentElement.parentElement.className.indexOf('elem') == -1) {
        for (item of menuelem) {
            let a = item.children[1]
            a.style.display = 'none'
            item.style.backgroundColor = null
        }
    }
}



for (item of menuelem) {
    item.onclick = function () {
        for (item of menuelem) {
            let a = item.children[1]
            a.style.display = 'none'
            item.style.backgroundColor = null
        }
        let a = this.children[1]
        a.style.display = 'block'
        this.style.backgroundColor = 'rgb(96, 96, 144)'

    }
}

window.addEventListener('scroll', function () {
    let a = scrollY + 'px';
    if (parseInt(a) > 100) {
        up.style.display = 'block'
    }
    else {
        up.style.display = 'none'
    }
})
up.onclick = function () {
    window.scrollTo(0, 0)
}
// if (this.value.length > 20) {
//     z10v1Width += 5
//     z10v1.style.width = z8v1Width + 'px'
// }