
let td = document.querySelectorAll('td')
td.onmouseover = td.onmouseout
for (item of td) {
    item.addEventListener("mouseover", function () {
        this.style.backgroundColor = 'blue'
    })
    item.addEventListener("mouseout", function () {
        this.style.backgroundColor = null
    })
}