up.style.display = 'none'
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
