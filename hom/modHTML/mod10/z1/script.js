for (item of document.querySelectorAll('input')) {
    item.addEventListener('keypress', function (e) {
        setTimeout(delprob, 20)
    })
}
function delprob() {
    cardnum.value = cardnum.value.replace(/ /g, '')
    if (cardnum.value[4] != ' ' && cardnum.value.length >= 4) {
        let drum = Array.from(cardnum.value)
        drum.splice(4, 0, ' ')
        cardnum.value = drum.join('')
    }
    if (cardnum.value[9] != ' ' && cardnum.value.length >= 9) {
        let drum = Array.from(cardnum.value)
        drum.splice(9, 0, ' ')
        cardnum.value = drum.join('')
    }
    if (cardnum.value[14] != ' ' && cardnum.value.length >= 14) {
        let drum = Array.from(cardnum.value)
        drum.splice(14, 0, ' ')
        cardnum.value = drum.join('')
    }
}