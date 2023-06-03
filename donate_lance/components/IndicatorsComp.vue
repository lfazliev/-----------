<template>
    <div class=indicators>
        <div class="text">
            <h3>Ключевые показатели платформы</h3>
            <h5><span class="accpurp">Статистика</span> платформы</h5>
        </div>
        <div class="details">
            <div class=noborder>
                <p class='p64px p40px'>1 954</p>
                <p class='p18px p16px black50'>Посетителей в день</p>
            </div>
            <div>
                <p class='p64px p40px'>90%</p>
                <p class='p18px p16px black50'>Довольных заказчиков</p>
            </div>
            <div>
                <p class='p64px p40px'>698</p>
                <p class='p18px p16px black50'>Заказов сделано</p>
            </div>
            <div>
                <p class='p64px p40px'>95 254</p>
                <p class='p18px p16px black50'>Часов отработано</p>
            </div>
        </div>
    </div>
</template>
<style scope  lang = 'scss'>
.indicators {

    @media screen and (min-width: 1400px) {
        padding: 0 17px;

        >.text {
            margin-bottom: 70px;

            >h5 {
                margin-right: 0.6%;
            }

            >h3 {
                width: 41%
            }
        }
    }

    @media screen and (min-width: 960px) and (max-width: 1400px) {
        >.text {
            margin-bottom: 50px;

            >h3 {
                width: 58.4%;

            }
        }
    }

    @media screen and (min-width: 720px) and (max-width: 960px) {
        >.text {
            margin-bottom: 30px;

            >h3 {
                margin-right: 30px;
                width: 65.2%;
            }
        }
    }

    @media screen and (max-width: 720px) {
        >.text {
            margin-bottom: 30px;
            flex-direction: column-reverse;

            >h3 {
                margin-top: 20px;
            }
        }

        >.details {
            flex-direction: column;

            >.noborder {
                padding-top: 0px;
                margin-top: 0px;
                border-top: 0px solid $stroke;
            }

            >div {
                padding-top: 20px;
                margin-top: 20px;
                border-top: 1px solid $stroke;
            }
        }
    }

    >.text {
        justify-content: space-between;
        display: flex;
    }

    >.details {
        @media screen and (min-width: 720px) {
            border-top: 1px solid $stroke;

            >.noborder {
                border: 0px !important;
                padding: 30px 0 0 0 !important;

            }

            >div {
                padding: 30px 0 0 30px;
                border-left: 1px solid $stroke;
            }
        }

        display: flex;
        justify-content: space-between;

        >div {
            >.black50 {
                margin-top: 20px;
            }
        }
    }

    @media screen and (max-width: 960px) {
        h5 {
            font-size: 20px;
        }
    }
}
</style>
<script setup lang="ts">

</script>