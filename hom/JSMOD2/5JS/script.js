class Button {
    constructor(width, height, text) {
        this.width = width;
        this.height = height;
        this.text = text;
    }
}
class BootstrapButton extends Button {
    constructor(width, height, text, color) {
        super(width, height, text)
        this.color = color
    }
    showBtn(rez) {
        rez.innerHTML = ''
        let button = document.createElement('button')
        button.style.backgroundColor = this.color
        button.style.height = this.height
        button.style.width = this.width
        button.innerHTML = this.text
        rez.appendChild(button)
    }
}
z1btn.onclick = function (e) {
    rez1(z1v1.value, z1v2.value, z1v3.value, z1v4.value)
}
for (item of document.querySelectorAll('#z1 input')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            rez1(z1v1.value, z1v2.value, z1v3.value, z1v4.value)
        }
    })
}
function rez1(height, width, text, color) {
    let btnc = new BootstrapButton(height, width, text, color)
    btnc.showBtn(r1)
}
// if (this.value.length > 20) {
//     z10v1Width += 5
//     z10v1.style.width = z8v1Width + 'px'
// }