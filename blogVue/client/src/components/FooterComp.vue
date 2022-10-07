<template>
    <footer>
        <div id=center>
            <div>
                <ul>
                    <li>
                        <a class="caps" href="../romiju/index.html">Home</a>
                    </li>
                    <li>
                        <a class="caps" href="../romiju/index.html">About</a>
                    </li>
                    <li>
                        <a class="caps" href="../romiju/index.html">Gallery</a>
                    </li>
                    <li>
                        <a class="caps" href="../romiju/index.html">News</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a class="caps" href="../romiju/index.html">Blog</a>
                    </li>
                    <li>
                        <a class="caps" href="../romiju/index.html">FAQ</a>
                    </li>
                    <li>
                        <a class="caps" href="../romiju/index.html">Contacts</a>
                    </li>
                    <li>
                        <a class="caps" href="../romiju/index.html">Privacy & cookies</a>
                    </li>
                </ul>
            </div>
            <ul id=social>
                <li>
                    <a class="fb" href="https://vk.ru/lfazliev"></a>
                </li>
                <li>
                    <a class="yt" href="https://www.youtube.com/c/WarLenar"></a>
                </li>
                <li>
                    <a class="ins" href="../ind/index.html"></a>
                </li>
            </ul>
        </div>
        <hr>
        <p style="color : white">Copyright Lenar 2005-2022</p>
    </footer>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@1000&display=swap');










@media screen and (max-width:900px) {

    #footer li {
        margin: 5px 10px;
    }
}

footer>div {
    margin-bottom: 5px
}

#center div {
    display: flex;
    width: 50%;
}

@media screen and (max-width:600px) {
    footer #center {
        justify-content: space-between
    }

    footer {
        padding: 40px 35px !important;
    }

    footer #social li {
        margin-bottom: 10px
    }

    footer #social {
        display: flex;
        flex-direction: column;
    }

    footer #center div {
        width: 100%;
    }
}

a.caps {
    color: rgb(255, 255, 255);
    text-decoration: none;
    font-size: 14px;
    /* max-width: 20px */
}


footer {
    background-color: rgb(126, 110, 68);
    padding: 40px 50px;
}

footer ul {
    list-style-type: none;
    max-width: 20%;
    margin-bottom: 3px;
}

footer>p {
    padding-top: 10px;
}

footer #social {
    max-width: 100%
}

#social {
    margin-top: 30px
}

#social li {
    margin: 0 10px;
    display: inline-block;
}

#social li a {
    background-repeat: no-repeat;
    width: 50px;
    height: 50px;
    display: block;
}

footer p {
    text-align: center;
    font-size: 14px;
    color: white
}

footer div {
    display: flex;
    justify-content: space-around
}

a.fb {
    background: url('imgfoot/fb_gray.png') center/cover no-repeat;
    transition: 300ms;
}

a.fb:hover {
    background: url('imgfoot/fb.png') center/cover no-repeat;
    transition: 300ms;
}

a.yt {
    background: url('imgfoot/youtube_gray.png') center/cover no-repeat;
    transition: 300ms;
}

a.yt:hover {
    background: url('imgfoot/youtube.png') center/cover no-repeat;
    transition: 300ms;
}

a.ins {
    background: url('imgfoot/insta_gray.png') center/cover no-repeat;
    transition: 300ms;
}

a.caps::after {
    content: '';
    width: 0px;
    height: 1px;
    display: block;
    background: black;
    transition: 400ms;
}

a.caps:hover::after {
    width: 100%;
}

a.ins:hover {
    background: url('imgfoot/insta.png') center/cover no-repeat;
    transition: 300ms;
}







@media screen and (min-width:600px) {
    footer div {
        justify-content: space-around
    }

}
</style>
