select = document.getElementById('gender')
select.style.color = '#8d8d8d'
select.addEventListener('change', function (e) {
    select.style.color = null
})
let nonvalidinp = document.querySelectorAll('input')
sdub.onclick = function () {
    for (item of nonvalidinp) {
        if (!item.checkValidity()) {
            item.setAttribute('class', 'text_input_invalid')
        }
        else {
            item.removeAttribute('text_input_invalid')
            item.setAttribute('class', 'text_input_valid')
        }



    }
    for (item of gender) {
        if (item.selected == true && item.disabled == true) {
            let fiemass = gender.nextSibling.nextSibling
            fiemass.innerText = 'Выберите cтрану'
            fiemass.style.color = 'red'
            fiemass.style.position = 'absolute'
            // fiemass.style.bottom = '130px'
            fiemass.style.fontSize = '14px'
            gender.style.borderColor = 'red'

        }
    }
}
gender.addEventListener('change', function () {
    let fiemass = gender.nextSibling.nextSibling
    fiemass.style.display = 'none'
    gender.style.borderColor = null
})
copass.addEventListener('change', function (e) {
    if (copass.value !== pass.value) {
        copass.setAttribute('text_input_invalid')
        copass.setCustomValidity('Пароль должен совпадать')
    }
    else {
        copass.removeAttribute('text_input_invalid')
    }
})
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