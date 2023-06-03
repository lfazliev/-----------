<template>
    <header>
        <img class=ico src="@/assets/img/DZD.svg" alt="DZD">
        <div class=textcont>
            <p class='p18pxB p16pxB'>Разместить заказ</p>
            <p class='p18pxB p16pxB'>Популярные вопросы</p>
            <p class='p18pxB p16pxB'>Ключевые показатели</p>
            <p class='p18pxB p16pxB'>О платформе</p>
        </div>
        <img v-if='!polmenu && (winwidth < 720)' class=btnmenu src="@/assets/img/menu.svg" @click="polmenu = !polmenu"
            alt="menu">
        <img v-else-if="(winwidth < 720)" @click="polmenu = !polmenu" class=btnmenu src="@/assets/img/close.svg"
            alt="close">
        <transition name=fade>
            <div v-if=polmenu class=menu>
                <div>
                    <p class=p16pxB>Разместить заказ</p>
                    <p class=p16pxB>Популярные вопросы</p>
                    <p class=p16pxB>Ключевые показатели</p>
                    <p class=p16pxB>О платформе</p>
                </div>
            </div>
        </transition>
    </header>
</template>
<script setup>
let polmenu = ref(false)
let winwidth = ref(0)
const myEventHandler = (e) => {
    winwidth.value = e.target.innerWidth
    if (winwidth.value > 720) {
        polmenu.value = false
    }
}

onMounted(() => {
    window.addEventListener("resize", myEventHandler);
})
onUnmounted(() => {
    window.removeEventListener("resize", myEventHandler);
})
</script>
<style scope  lang = 'scss'>
header {
    position: relative;


    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 300ms ease;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }

    >.ico {
        height: 43px;
    }

    .menu {
        background-color: $white;

        >div {
            margin: 40px 16px;

            >p {
                margin-bottom: 30px;
            }

            >p:hover {
                color: $accpurp;
                cursor: pointer;
            }
        }

        display: none;
    }


    >.btnmenu {
        display: none;
        padding: 12px;
    }

    @media screen and (min-width: 1400px) {
        padding: 0 30px;


    }

    @media screen and (min-width: 960px) and (max-width:1400px) {
        padding: 0 16px 0 30px;
    }

    @media screen and (min-width: 720px) and (max-width:960px) {
        padding: 0 24px;

        >.textcont>p {
            margin-left: 20px !important;
        }

        >.ico {
            height: 35px;
        }
    }

    @media screen and (max-width:720px) {
        padding: 0 12px 0 16px;
        height: 60px !important;

        .menu {
            position: absolute;
            display: block !important;
            height: calc(100vh - 60px);
            top: 60px;
            width: 100%;
            left: 0px;

        }

        >.ico {
            height: 20px;
        }

        >.btnmenu {
            display: block;
        }

        >.btnmenu:hover {
            cursor: pointer;

        }

        >.textcont {
            display: none !important;
        }
    }

    height: 130px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    >.textcont {
        >p {
            margin-left: 30px;
        }

        >p:hover {
            color: $accpurp;
            cursor: pointer;
        }

        display: flex;
    }
}
</style>