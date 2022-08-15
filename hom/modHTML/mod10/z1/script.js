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
        let date = new Date
        if (select[i].selected == true && select[i].value == date.getFullYear()) {
            const month = document.querySelector('#month').getElementsByTagName('option');
            for (let i = 0; i < date.getMonth(); i++) {
                month[i].style.display = 'none';
            }
            month[date.getMonth()].selected = true;
            return
        }
        else {
            const month = document.querySelector('#month').getElementsByTagName('option');
            for (let i = 0; i < month.length; i++) {
                month[i].style.display = 'block';
            }
        }
    }
})
