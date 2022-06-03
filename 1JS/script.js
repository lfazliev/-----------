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
z1.onkeypress = function (e) {
    if (e.key == 'Enter') {
        let a = this.value
        r1.innerText = (a ** 2)
    }
}
// 2
for (item of document.querySelectorAll('#z2 input')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            rez2(v1.value-0,v2.value-0)      
        }
    })
}
function rez2(a,b) {
    if(a!=''&&b!='') {
        r2.innerText = ((a + b) / 2)
    } else {
        r2.innerText = 'Не все данные'
    }  
}

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
// let hour
// let min
// let a
// do {
//    hour = Number(prompt("Введите час"))
// }while (hour > 23 || hour < 0)
// do {
//     min = Number(prompt("Введите минуту"))
// }while (min > 59 || min < 0)
// min = hour * 60 + min
// min = 60*24 - min
// a = min % 60
// hour = Number(((min -a)/ 60).toFixed(0))
// alert(`${hour} : ${a}`)
// 8
// let a
// do {
//         a = Number(prompt("Введите число"))
//      }while (a > 999 || a < 100)
// alert(a = (a%100 - ((a % 100)%10))/10)
// 9
// let a
// let b
// do {
//     a = prompt("Введите число")
// } while (a > 99999 || a < 10000)
// b = a[a.length-1]
// for(let i =0;i<a.length-1;i++)
//     b+=a[i]
// console.log(b)

// 10
// let sale
// do{
//     sale = Number(prompt("Введите сумму продаж за месяц"))
// }while (sale < 0)
// alert(`${250 + (sale * 0.10)}\$`)
