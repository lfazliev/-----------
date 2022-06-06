// Проверка на int
// function inta() {
//     let x = Number(prompt("Введите первое число"))
//     if (Number.isInteger(x)) {

//     }
//     else {
//         while (Number.isInteger(x)) {
//             let x = Number(prompt("Введите первое число"))
//         }
//     }
// }
// 1
z1.onkeypress = function (e) {
    if (e.key == 'Enter') {
        let a = Number(this.value)
        switch (a) {
            case 0:
                r1.innerText = 'Ноль'
                break;
            default: if (a < 0) {
                r1.innerText = 'Отрицательное'
            }
            else {
                r1.innerText = 'Положительное'
            }
                break;
        }
    }
}
// 2
// let a
// do{
// a = Number(prompt("Введите свой возраст"))
// }while (a > 120 || a < 18)
// alert(a)
// 3
// a = Number(prompt("Введите число"))
// if(a < 0)
//     alert(a = a * -1)
// else
//     alert(a)
// 4
// let hours
// let min
// let sec
// do {
//     hours = Number(prompt("Введите часы"))
// } while (hours > 23 || hours < 0)
// do {
//     min = Number(prompt("Введите минуты"))
// } while (min > 59 || min < 0)
// do {
//     sec = Number(prompt("Введите секунды"))
// } while (sec > 59 || sec < 0)
// alert(`${hours}:${min} ${sec} sec`)
// 5
// let x
// let y
// if (x > 0) {
//     if (y > 0)
//     {
//         alert(`1 - (${x};${y})`)
//     }
//     else{
//         alert(`4 - (${x};${y})`)
//     }
// }
// if(x < 0)
// {
//     if (y < 0)
//     {
//         alert(`3 - (${x};${y})`)
//     }
//     else{
//         alert(`2 - (${x};${y})`)
//     }
// }
// if(x = 0){
//     if (y = 0) {
//         `1,2,3,4 - (${x};${y})`
//     }
//     else{
//         if(y < 0){
//             `3,4 - (${x};${y})`
//         }
//         else{
//             `1,2 - (${x};${y})`
//         }
//     }
// }
// if(y=0){
//     if(x < 0){
//         `2,3 - (${x};${y})`
//     }
//     else{
//         `1,4 - (${x};${y})`
//     }
// }
