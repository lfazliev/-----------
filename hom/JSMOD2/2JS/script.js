let arr10 = []
let arr5 = []
arrcrbtn.onclick = function (e) {
    arrcreate10()
}
function arrcreate10() {
    for (let i = 0; i < 10; i++) {
        arr10[i] = (Math.floor(Math.random() * 10))
    }
    rez1(arr10); rez2(arr10); rez3(arr10); rez4(arr10);
    rez7(); rez8(); rez9()

}
arrcreate10()
// 1
function rez1(arr) {
    let a = ''
    for (let i = 0; i < arr.length; i++) {
        a += `${arr[i]} `
    }
    r1.innerHTML = a
}
// 2
function rez2(arr) {
    let a = ''
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0)
            a += `${arr[i]} `
    }
    r2.innerHTML = a
}
// 3
function rez3(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    r3.innerHTML = `${sum} `
}
// 4
function rez4(arr) {
    r4.innerHTML = Math.max.apply(Math, arr)
}
// 5
z5btn.onclick = function (e) {
    rez5(z5v1.value, arr10)
}
for (item of document.querySelectorAll('#z111 input')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            rez5(z5v1.value, arr10)
        }
    })
}
function rez5(a, arr) {
    if (z5v1.value !== '') {
        if (Number.isInteger(Number(a))) {
            if (arr.length >= a && 0 <= a) {
                arr.splice(a, 0, (Math.floor(Math.random() * 10)))
                rez1(arr); rez2(arr); rez3(arr); rez4(arr); rez7(); rez8(); rez9()
                r5.innerHTML = 'Успех'
            }
        }
        else {
            r5.innerHTML = 'Invalid value'
        }
    }
    else {
        r5.innerHTML = 'Нет зачений'
    }
}
// 6
z6btn.onclick = function (e) {
    rez6(z6v1.value, arr10)
}
for (item of document.querySelectorAll('#z111 input')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            rez6(z6v1.value, arr10)
        }
    })
}
function rez6(a, arr) {
    if (z6v1.value !== '') {
        if (Number.isInteger(Number(a))) {
            if (arr.length >= a && 0 <= a) {
                arr.splice(a, 1)
                rez1(arr); rez2(arr); rez3(arr); rez4(arr); rez7(); rez8(); rez9()
                r6.innerHTML = 'Успех'
            }
        }
        else {
            r6.innerHTML = 'Invalid value'
        }
    }
    else {
        r6.innerHTML = 'Нет зачений'
    }
}
arrcrbtn2.onclick = function (e) {
    arrcreate5()
}
function arrcreate5() {
    let a = ''
    for (let i = 0; i < 5; i++) {
        arr5[i] = (Math.floor(Math.random() * 10))
        a += `${arr5[i]} `
        r79.innerHTML = a
    }
    rez7(); rez8(); rez9()
}
arrcreate5()
// 7
function rez7() {
    const newArr = []
    for (let i = 0; i < Math.max(arr5.length, arr10.length); i++) {
        if (i < arr5.length) {
            if (newArr.indexOf(arr5[i]) < 0) {
                newArr.push(arr5[i])
            }
        }
        if (i < arr10.length) {
            if (newArr.indexOf(arr10[i]) < 0) {
                newArr.push(arr10[i])
            }
        }
    }
    r7.innerHTML = newArr
}
function rez8() {
    const newArr = []
    let maxArr
    let minArr
    if (arr5.length > arr10.length) {
        maxArr = arr5
        minArr = arr10
    } else {
        maxArr = arr10
        minArr = arr5
    }
    for (let i = 0; i < Math.max(arr5.length, arr10.length); i++) {
        if (minArr.indexOf(maxArr[i]) > 0 && newArr.indexOf(maxArr[i]) < 0) {
            newArr.push(maxArr[i])
        }
    }
    r8.innerHTML = newArr
}
function rez9() {
    const newArr = []
    let maxArr
    let minArr
    if (arr5.length > arr10.length) {
        maxArr = arr5
        minArr = arr10
    } else {
        maxArr = arr10
        minArr = arr5
    }
    for (let i = 0; i < Math.max(arr5.length, arr10.length); i++) {
        if (minArr.indexOf(maxArr[i]) < 0) {
            newArr.push(maxArr[i])
        }
    }
    r9.innerHTML = newArr
}
let fruits = ['apple', 'orange', 'pineapple', 'cherry', 'pear']
function rez10() {
    ulEl = document.createElement('ul')
    for (fruit of fruits) {
        liEl = document.createElement('li')
        liEl.innerHTML = fruit
        ulEl.appendChild(liEl)
    }
    r10.appendChild(ulEl)
}
rez10()
// 11
z11btn.onclick = function (e) {
    rez11(z11v1.value)

}
for (item of document.querySelectorAll('#z11 input')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            rez11(z11v1.value)


        }
    })
}
function rez11(a) {
    let b = a.toLowerCase()
    r11.innerHTML = ''
    if (z11v1.value !== '') {
        for (let i = 0; i < fruits.length; i++) {
            if (fruits[i] == b) {
                r11.innerHTML = i
                return 0
            }
        }
        if (r11.innerHTML == '') {
            r11.innerHTML = '-1'
        }
    }
    else {
        r11.innerHTML = 'Нет зачений'
    }
}
// 5
// z5btn.onclick = function (e) {
//     if (z5v1.value !== '') {
//         rez5(z5v1.value)
//     }
//     else {
//         alert('Нет зачений')
//     }
// }
// for (item of document.querySelectorAll('#z111 input')) {
//     item.addEventListener('keypress', function (e) {
//         if (e.key == 'Enter') {
//             if (z5v1.value !== '') {
//                 rez5(z5v1.value)
//             }
//             else {
//                 alert('Нет зачений')
//             }

//         }
//     })
// }
// function rez5(a) {
//     if (z111v1.value !== '' && z111v2.value !== '' && z111v3.value !== '' && z111v4.value !== '') {
//         if (Number.isInteger(Number(a))) {
//             if (a < 0) {
//                 if (((Number(z111v3.value) - Number(z111v1.value)) + Number(a)) > 0) {

//                     z111v3.value = Number(z111v3.value) + Number(a)
//                     apprr()
//                 }
//             }
//             else {
//                 z111v3.value = Number(z111v3.value) + Number(a)
//                 apprr()
//             }

//         }
//         else {
//             alert('Invalid value')
//         }
//     }
//     else {
//         alert('Нет зачений прямоугольника')
//     }
// }

// if (this.value.length > 20) {
//     z10v1Width += 5
//     z10v1.style.width = z8v1Width + 'px'
// }