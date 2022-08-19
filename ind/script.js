let textbub = speechbubble.children
for (item of document.getElementsByClassName('prof')) {

    item.addEventListener('click', function () {
        for (item of document.getElementsByClassName('prof')) {
            item.style.backgroundColor = null
        }
        for (item of textbub) {
            item.style.display = 'none'
        }
        after.style.display = 'block'
        after.style.top = `${this.getAttribute('datpol')}%`
        this.style.backgroundColor = 'rgba(0, 0, 0, 0.367)'
        textbub[Number(this.getAttribute('textpol'))].style.display = 'block'
    })
}
