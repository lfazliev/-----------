let arr10 = []
let arr5 = []
arrcrbtn.onclick = function (e) {
    arrcreate10()
}
function arrcreate10() {
    for (let i = 0; i < 10; i++) {
        arr10[i] = (Math.floor(Math.random() * 100))
    }
    rez1(arr10); rez2(arr10); rez3(arr10); rez4(arr10);

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
    rez5(z5v1.value, arr)

}
for (item of document.querySelectorAll('#z111 input')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            rez5(z5v1.value, arr)



        }
    })
}
function rez5(a, arr) {
    if (z5v1.value !== '') {
        if (Number.isInteger(Number(a))) {
            if (arr.length >= a && 0 <= a) {
                arr.splice(a, 0, (Math.floor(Math.random() * 10)))
                rez1(arr); rez2(arr); rez3(arr); rez4(arr); rez7(arr5); rez8(arr5); rez9(arr5)
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
    rez6(z6v1.value, arr)

}
for (item of document.querySelectorAll('#z111 input')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            rez6(z6v1.value, arr)



        }
    })
}
function rez6(a, arr) {
    if (z6v1.value !== '') {
        if (Number.isInteger(Number(a))) {
            if (arr.length >= a && 0 <= a) {
                arr.splice(a, 1)
                rez1(arr); rez2(arr); rez3(arr); rez4(arr); rez7(arr5); rez8(arr5); rez9(arr5)
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
        arr5[i] = (Math.floor(Math.random() * 100))
        a += `${arr5[i]} `
        r79.innerHTML = a

    }
    rez7(); rez8(arr5); rez9(arr5)

}
arrcreate5()
// 7
function rez7() {
    let a
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 5; j++) {
            if (arr10[i] == arr5[j]) {
                a += arr5[i]
            }
            else {
                a += arr5[j];
                a += arr10[i]
            }
            r7.innerHTML = a
        }

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