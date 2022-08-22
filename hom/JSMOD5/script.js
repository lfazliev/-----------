function disbl() {
    mass.style.display = 'none'
}
let sub = document.getElementById('sub')
sub.onclick = function (e) {
    e.preventDefault()
    mass.style.display = 'block'
    if (remem.checked) {
        mass.innerHTML = "Я тебя запонил"
    }
    else {
        mass.innerHTML = "Я тебя не запонил"
    }
    setTimeout(disbl, 4000)
}