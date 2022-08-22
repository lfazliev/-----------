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
z2copass.addEventListener('change', function (e) {
    if (z2copass.value !== z2pass.value) {
        z2copass.setCustomValidity('Пароль должен совпадать')
    }
})
z2sub.onclick = function (e) {
    mass.style.display = 'block'
    mass.classList.add('mass-in')
    mass.innerHTML = `На почту
         отправлено письмо с подтверждением`


    setTimeout(disbl, 3000)
}
