function disbl() {
    mass.classList.remove('mass-in')
    mass.classList.add('mass-out')
    setTimeout(() => { mass.style.display = 'none'; mass.classList.remove('mass-out') }, 385);

}
let nonvalidinpz1 = z1.querySelectorAll('input[type="text"], input[type="password"]')
for (item of nonvalidinpz1) {
    item.addEventListener('keyup', function () {
        for (item of nonvalidinpz1) {
            if (!this.checkValidity()) {
                this.setAttribute('class', 'text_input_invalid')
            }
            else {
                this.removeAttribute('text_input_invalid')
                this.setAttribute('class', 'text_input_valid')
            }
        }
    })
}
let z1sub = document.getElementById('z1sub')
z1sub.onclick = function (e) {
    // e.preventDefault()
    for (item of nonvalidinpz1) {
        if (!item.checkValidity()) {
            item.setAttribute('class', 'text_input_invalid')

        }
    }
    if (z1username.checkValidity()) {
        if (z1pwrd.checkValidity()) {

            mass.style.display = 'block'
            mass.classList.add('mass-in')
            if (z1remem.checked) {
                mass.innerHTML = `Привет ${z1username.value}, я тебя запомнил`
            }
            else {
                mass.innerHTML = `Привет ${z1username.value}, я тебя не запомнил`
            }
            setTimeout(disbl, 3000)
        }
    }
    else {
        z1username.setCustomValidity('Введите корректное имя пользователя')
    }
}
z2v4.addEventListener('change', function (e) {
    if (z2v4.value == '') {
        z2v4.setCustomValidity('Заполните это поле')
    }
    else if (z2v4.value !== z2v3.value) {
        z2v4.setCustomValidity('Пароль должен совпадать')
    }
})
let nonvalidinpz2 = z2.querySelectorAll('input[type="text"], input[type="password"] , input[type="email"]')
for (item of nonvalidinpz2) {
    item.addEventListener('keyup', function () {
        for (item of nonvalidinpz1) {
            if (!this.checkValidity()) {
                this.setAttribute('class', 'text_input_invalid')
            }
            else {
                this.removeAttribute('text_input_invalid')
                this.setAttribute('class', 'text_input_valid')
            }
        }
    })
}
z2sub.onclick = function (e) {
    for (item of nonvalidinpz2) {
        if (!item.checkValidity()) {
            item.setAttribute('class', 'text_input_invalid')
        }
    }
    if (z2v1.checkValidity() && z2v2.checkValidity() && z2v3.checkValidity() && z2v4.checkValidity())
        mass.style.display = 'block'
    mass.classList.add('mass-in')
    mass.innerHTML = `На почту ${z2v2.value} отправлено письмо с подтверждением`
    setTimeout(disbl, 3000)
}
gendsel = gender.getElementsByClassName('gender')
let nonvalidinp = z3.querySelectorAll('input[type="text"], input[type="date"]')
for (item of nonvalidinp) {
    item.addEventListener('keyup', function () {
        for (item of nonvalidinp) {
            if (!this.checkValidity()) {
                this.setAttribute('class', 'text_input_invalid')
            }
            else {
                this.removeAttribute('text_input_invalid')
                this.setAttribute('class', 'text_input_valid')
            }
        }
    })
}
z3sub.onclick = function () {
    for (item of nonvalidinp) {
        if (!item.checkValidity()) {
            item.setAttribute('class', 'text_input_invalid')
        }
    }
    if (!gendsel[0].checked && !gendsel[1].checked) {
        let fiemass = gender.getElementsByClassName('text-field__message')
        fiemass[0].innerText = 'Выберите пол'
        fiemass[0].style.color = 'red'
        fiemass[0].style.position = 'absolute'
        fiemass[0].style.bottom = '-15px'
        fiemass[0].style.fontSize = '14px'

    }
    count = country.children
    for (item of count) {
        if (item.selected == true && item.disabled == true) {
            let fiemass = country.nextSibling.nextSibling
            fiemass.innerText = 'Выберите cтрану'
            fiemass.style.color = 'red'
            fiemass.style.position = 'absolute'
            fiemass.style.bottom = '-11px'
            fiemass.style.fontSize = '14px'
            country.style.borderColor = 'red'

        }
    }
    cit = city.children
    for (item of cit) {
        if (item.selected == true && item.disabled == true) {
            let fiemass = city.nextSibling.nextSibling
            fiemass.innerText = 'Выберите город'
            fiemass.style.color = 'red'
            fiemass.style.position = 'absolute'
            fiemass.style.bottom = '-11px'
            fiemass.style.fontSize = '14px'
            city.style.borderColor = 'red'

        }
    }

}
count = document.getElementById('country')
count.addEventListener('change', function () {
    let fiemass = country.nextSibling.nextSibling
    fiemass.style.display = 'none'
    country.style.borderColor = null
})
cit = document.getElementById('city')
cit.addEventListener('change', function () {
    let fiemass = city.nextSibling.nextSibling
    fiemass.style.display = 'none'
    city.style.borderColor = null
})
gendsel[0].addEventListener('change', function () {
    let fiemass = gender.getElementsByClassName('text-field__message')
    fiemass[0].style.display = 'none'
})
gendsel[1].addEventListener('change', function () {
    let fiemass = gender.getElementsByClassName('text-field__message')
    fiemass[0].style.display = 'none'
})
