let a
cardnum.addEventListener('keypress', function (e) {
    cardnum.focus();
    a = cardnum.selectionStart
    delprob()
    vozvrat(a + 1)
})
cardnum.addEventListener('keyup', logKey);
function logKey(e) {
    if (e.code == 'Backspace') {
        cardnum.focus();
        a = cardnum.selectionStart
        delprob()
        vozvrat(a)
    }
}
function delprob() {
    console.log(a)
    var cardCode = cardnum.value.replace(/[^\d]/g, '').substring(0, 16);
    cardCode = cardCode !== '' ? cardCode.match(/.{1,4}/g).join(' ') : '';
    cardnum.value = cardCode;
}
function vozvrat(pol) {
    cardnum.focus();
    cardnum.selectionStart = pol
    cardnum.selectionEnd = pol
}

year.addEventListener('change', function (e) {
    const select = document.querySelector('#year').getElementsByTagName('option');
    for (let i = 0; i < select.length; i++) {
        if (select[i].selected == true && ) select[i].selected = true;
    }
})
