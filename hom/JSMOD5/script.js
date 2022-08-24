function disbl() {
    mass.classList.remove('mass-in')
    mass.classList.add('mass-out')
    setTimeout(() => { mass.style.display = 'none'; mass.classList.remove('mass-out') }, 385);

}
let z1sub = document.getElementById('z1sub')
z1sub.onclick = function (e) {
    // e.preventDefault()
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
z2sub.onclick = function (e) {
    if (z2v1.checkValidity() && z2v2.checkValidity() && z2v3.checkValidity() && z2v4.checkValidity())
        mass.style.display = 'block'
    mass.classList.add('mass-in')
    mass.innerHTML = `На почту ${z2v2.value} отправлено письмо с подтверждением`


    setTimeout(disbl, 3000)
}
z3sub.onclick = function () {
    let gendsel = document.getElementsByClassName('gender')
    if (!gendsel[0].checked && !gendsel[1].checked) {

        let errmas = document.createElement('div')
        let after = document.createElement('div')
        after.id = 'after';
        errmas.style.position = 'absolute'
        errmas.style.left = '100px'
        errmas.style.padding = '3px'
        errmas.style.bottom = '-30px'
        errmas.style.borderRadius = '5px'
        errmas.style.backgroundColor = 'red'
        errmas.innerHTML = 'Укажите пол'
        errmas.appendChild(after)
        gender.appendChild(errmas)
    }
}
