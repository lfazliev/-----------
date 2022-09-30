<template>
    <div id=visibl>
        <h1>Lenar Fazliev</h1>
        <h2>Junior, full stack web, backend developer <br> My stack: </h2>
        <div id=menu>
            <ul>
                <li class="prof" datpol="7" textpol=0 style='background-color:rgba(0, 0, 0, 0.367);'>
                    <a><img src="img/c-.png" alt="C++"><span>C++</span></a>
                </li>
                <li class="prof" datpol="27" textpol=1>
                    <a><img src="img/js.png" alt="JS"><span>JS</span></a>
                </li>
                <li class="prof" datpol="47" textpol=2>
                    <a><img src="img/css-3.png" alt="CSS"><span>CSS</span></a>
                </li>
                <li class="prof" datpol="66" textpol=3>
                    <a><img src="img/html-5.png" alt="HTML"><span>HTML</span></a>
                </li>
                <li class="prof" datpol="86" textpol=4>
                    <a><img src="img/c-sharp.png" alt="C#"><span>C#</span></a>
                </li>
            </ul>
            <div id="speechbubble">
                <p style="display: block;">C++ (произносится «си плюс плюс» ) — компилируемый статически типизированный
                    язык программирования
                    общего назначения. Поддерживая разные парадигмы программирования , сочетает свойства как
                    высокоуровневых , так и низкоуровневых языков . В сравнении с его предшественником— языком C , —
                    наибольшее внимание уделено поддержке объектно-ориентированного и обобщённого программирования.</p>
                <p>
                    JavaScript это язык, который позволяет вам применять сложные вещи на web странице — каждый раз,
                    когда на
                    web странице происходит что-то большее, чем просто её статичное отображение — отображение
                    периодически
                    обновляемого контента, или интерактивных карт, или анимация 2D/3D графики, или прокрутка видео в
                    проигрывателе, и т.д. — можете быть уверены, что скорее всего, не обошлось без JavaScript.
                </p>
                <p>
                    CSS (Cascading Style Sheets) — это код, который вы используете для стилизации вашей веб-страницы.
                    Основы
                    CSS помогут вам понять, что вам нужно для начала работы. Мы ответим на такие вопросы как: Как
                    сделать
                    мой текст черным или красным? ... CSS (Cascading Style Sheets) — это код, который вы используете для
                    стилизации вашей веб-страницы. Основы CSS помогут вам понять, что вам нужно для начала работы.
                </p>
                <p>
                    HTML — это стандартизированный язык, позволяющий составлять форматированный текст. Браузер
                    интерпретирует его и отображает на экране элементы веб-страниц. Из чего состоит форматированный
                    текст
                    HTML? В первую очередь, HTML — это контент и теги. Теги позволяют задать способ отображения контента
                    на
                    веб-страницах.
                </p>
                <p>изучаю</p>
                <div id="after"></div>
            </div>
        </div>
    </div>
</template>
<style scoped>
/* body {
    animation: left 1s;
} */

#visibl h1 {
    text-align: center;
    font-size: 50px
}

#visibl h2 {
    font-size: 35px;
    font-weight: bold;
    margin-left: 15px;
    color: rgb(0, 0, 0)
}

#menu {
    display: flex;
    margin-left: 15px;
}

#menu span {
    color: rgb(0, 0, 0);
    padding: 0 50px 0 0;
    font-size: 30px;
    transition: 300ms;
}

#menu img {
    width: 70px;
    padding: 0 10px 0 10px;
    transition: 300ms;
    mix-blend-mode: darken;
}

#menu a {
    display: flex;
    align-items: center;
}

#menu p {
    display: none
}

#menu li {
    padding-right: 50px;
    list-style: none;
    background: rgb(255, 255, 255);
    transition: 300ms;
}

#menu li:hover {
    background-color: rgba(0, 0, 0, 0.25);
    cursor: pointer;
    transition: 300ms;
}


li.prof {
    padding: 5px;
    margin: 10px 0px;
    border: 1px solid black;
    border-radius: 10px;
}

#speechbubble {
    position: relative;
    background-color: #292929c2;
    width: 70%;
    height: 465px;
    color: white;
    border-radius: 10px;
    margin: 15px 10px 15px 20px;
    max-width: 470px
}

#speechbubble>::-webkit-scrollbar {
    border-radius: 10px
}

#speechbubble>p {
    margin: 5px;
    overflow: auto;
    height: 95%;
}

#after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border: 15px solid;
    border-right-color: #292929c2;
    top: 12%;
    right: 100%;
    margin-right: 0px;
    z-index: -1;
    transition: top 300ms;
}

@media screen and (max-width:900px) {
    #visibl img {
        width: 50px;
        transition: 300ms;
    }

    #menu li {
        padding-right: 0px;
    }

    #menu span {
        padding-right: 10px;
    }

    #visibl span {
        font-size: 15px;
        transition: 300ms;
    }

    #speechbubble {
        height: 365px;
    }

}

p {
    animation: anim 400ms;
}

@media screen and (max-width:600px) {
    #speechbubble {
        height: 465px;
    }

    #menu span {
        padding: 0 0px 0 0;
    }

    #menu li {
        padding-right: 5px;
    }

    #menu a {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
}
</style>

<script>
let textbub = speechbubble.children
for (item of document.getElementsByClassName('prof')) {

    item.addEventListener('click', function () {
        for (item of document.getElementsByClassName('prof')) {
            item.style.backgroundColor = null
        }
        for (item of textbub) {
            item.style.display = 'none'
        }
        after.style.display = 'block'
        after.style.top = `${this.getAttribute('datpol')}%`
        this.style.backgroundColor = 'rgba(0, 0, 0, 0.367)'
        textbub[Number(this.getAttribute('textpol'))].style.display = 'block'
    })
}
</script> 