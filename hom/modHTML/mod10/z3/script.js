
copass.addEventListener('change', function (e) {
    if (copass.value !== pass.value) {
        copass.setCustomValidity('Пароль должен совпадать')
    }
})