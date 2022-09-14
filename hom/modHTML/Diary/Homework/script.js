let files = document.querySelectorAll('input[type="file"]')
for (let item of files) {
    item.addEventListener('change', function () {
        let sib = this.nextSibling.nextSibling
        sib = sib.querySelector('span')
        sib.innerHTML = this.value.split(/[\\/]/g).pop()
    })
}