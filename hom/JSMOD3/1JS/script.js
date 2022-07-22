// 1
container.style.width = '100%'
number.style.width = "1%"
number.style.fontSize = '25px'
number.style.color = 'red'
number.style.margin = "0 auto"
number.onclick = function (e) {
    this.innerText = Math.floor(Math.random() * 101)
}
// 2
track.style.width = '100%'
track.style.height = '100px'
track.style.padding = 'auto auto'
track.addEventListener("mousemove", function (e) {
    r2.innerHTML = `X:${e.clientX} Y:${e.clientY}`
})
track.onclick = function () {
    r2cl.innerHTML = `<br> Левая`
}
track.oncontextmenu = function (e) {
    e.preventDefault()
    r2cl.innerHTML = `<br> Правая`
    //return false;
}
// 3
z3btn.onclick = function () {
    if (z3text.style.display == 'none') {
        z3text.style.display = 'block'
        z3btn.innerHTML = 'Скрыть'
    }
    else {
        z3btn.innerHTML = 'Показать'
        z3text.style.display = 'none'
    }
}
// 4
p1btn.onclick = function () {
    p1cont.style.display = 'block'
    p2cont.style.display = 'none'
}
p2btn.onclick = function () {
    p2cont.style.display = 'block'
    p1cont.style.display = 'none'
}
// 5
zapoln.style.width = '0%'
z5btn.onclick = function () {

    zapoln.style.width = (zapoln.style.width != '100%') ? `${parseInt(zapoln.style.width) + 5}%` : '100%'
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