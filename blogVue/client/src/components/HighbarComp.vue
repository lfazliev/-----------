<template>
    <hr>
    <div id="highbar">
        <nav>
            <ul>
                <li>
                    <RouterLink to="/" class=button>Home</RouterLink>
                </li>
                <li>
                    <RouterLink to="/blog" class=button>Blog</RouterLink>
                </li>
            </ul>
        </nav>
    </div>
</template>
<style scoped>
#head {
    transition: 300ms;
    background: url('img/channels4_banner.jpg') 54% center/cover no-repeat;
    height: 300px;
}

#head>a {
    display: block;
    width: 100%;
    height: 100%
}

#highbar nav ul {
    list-style: none;
}

#highbar a.button {
    left: 50%;
    transform: translate(-50%, 0);
    text-align: center;
    width: 100%;
}

@media screen and (max-width:900px) {

    #head {
        height: 200px;
    }
}

#highbar nav {
    width: 35%;
    max-width: 350px;
    margin: 0 auto;
}

#highbar {
    transition: 300ms;
    width: 100%;
    padding: 1px 0 1px 0;
    background-color: rgb(126, 110, 68);
}

#highbar nav ul li {
    padding: 3px 0px;
    margin: 0 auto;
}
</style>