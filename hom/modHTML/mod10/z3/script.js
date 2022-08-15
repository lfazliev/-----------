copass.addEventListener('change', function (e) {
    if (copass.value !== pass.value) {
        copass.setCustomValidity('Username should only contain lowercase letters. e.g. john')
    }
})