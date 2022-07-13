// 1
container.style.width = '100%'
number.style.width = "1%"
number.style.fontSize = '25px'
number.style.color = 'red'
number.style.margin = "0 auto"
number.onclick = function () {
    this.innerText = Math.floor(Math.random() * 101)
}
// 2
track.style.width = '100%'
track.style.height = '100px'
track.style.padding = 'auto auto'
track.addEventListener("mouseover", function (e) {

// if (this.value.length > 20) {
//     z10v1Width += 5
//     z10v1.style.width = z8v1Width + 'px'
// }