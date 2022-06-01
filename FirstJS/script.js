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

// inta()
// 1
// let a = prompt("Введите число")
// alert(a**2)
// 2
// let a = Number(prompt("Введите первое число"))
// let b = Number(prompt("Введите второе число"))
// alert((a+b)/2)
// 3
// let a = prompt("Введите сторону квадрата")
//  alert(`Площадь квадрата: ${a * a}`)
// 4
// const mile = 0.621371
// let km = prompt("Введите данные в КМ")
// alert(`${(km * mile).toFixed(2)} миль`)
// 5
// let a = Number(prompt("Введите первое число"))
// let b = Number(prompt("Введите второе число"))
// let c
// if (b != 0) {
//     c = a/b
// }
// else{
//     c = "Деление на ноль невозможно"
// }
// alert(`Сложение - ${a + b}\nВычитание- ${a - b}\nУмножение - ${a * b}\nДеление - ${c}`)
// 6
// let a = Number(prompt("Введите первое число"))
// let b = Number(prompt("Введите второе число"))
// let c
// if (a == 0) {
//     c = "Неудача"
// }
// else{
//     c = (b/(0-a)).toFixed(2)
// }
// alert(`ax + b = 0\n${(a)}x + ${b} = 0\nx = ${c}`)
// 7
let hour
let min
let a
do {
   hour = Number(prompt("Введите час"))
}while (hour > 24 || hour < 0)
do {
    min = Number(prompt("Введите минуту"))
}while (min > 59 || min < 1)
hour = hour * 60 + min
hour = 1440 - hour
alert(a = hour % 60)
hour = (hour / 60).toFixed(0)
alert(hour = hour + a)