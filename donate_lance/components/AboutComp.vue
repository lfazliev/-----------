<template>
    <div class=about>
        <h5 class=accpurp>Наши главные тезисы</h5>
        <div>
            <h3>Немного о данной платформе</h3>

            <div>
                <div class=one>
                    <h4>Миссия</h4>
                    <p class='p18px p16px black50'>Мы - фриланс биржа для студентов. Наша платформа помогает студентам
                        зарабатывать деньги и получать ценный опыт работы во время учебы, а заказчикам - быстро и
                        качественно получать готовые проекты.
                    </p>
                </div>
                <div class=two>
                    <h4>Бесплатно</h4>
                    <p class='p18px p16px black50'>Наша платформа предлагает заказчикам получать проекты бесплатно. Вы
                        оплачиваете только выполненную работу и никаких скрытых комиссий или платежей не взимается.</p>
                </div>
                <div class=three>
                    <h4>Легко</h4>
                    <p class='p18px p16px black50'>Наша платформа проста в использовании. Заказчики могут разместить свой
                        проект всего за несколько минут и получить предложения от опытных студентов. Мы также предоставляем
                        поддержку в случае возникновения вопросов или проблем.</p>
                </div>

            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

</script>
<style scope lang = 'scss'>
.about {
    >h5 {
        @media screen and (max-width: 960px) {
            font-size: 20px;
        }
    }

    @media screen and (min-width: 1400px) {
        >div {
            >h3 {
                padding-top: 30px;
                padding-right: 25px;
                width: 48.5%;
                border-right: 1px solid $stroke;
            }

            display: flex;

            border-top: 1px solid $stroke;

            >div {
                display: grid;
                grid-template-rows: 1fr 43.4%;
                grid-template-columns: 1fr 1fr;
                width: 50%;

                >div {

                    padding: 30px 0 30px 30px;

                    >h4 {
                        margin-bottom: 20px;
                    }
                }

                >.one {
                    border-right: 1px solid $stroke;
                    grid-row: 1 / 2;
                    grid-column: 1 / 2;

                    >p {
                        width: 80%;
                    }
                }

                >.two {
                    grid-row: 1 / 2;
                    grid-column: 2 / 3;

                    >p {
                        width: 80%;
                    }
                }

                >.three {
                    border-top: 1px solid $stroke;
                    grid-row: 2 / 3;
                    grid-column: 1 / 3;
                }
            }

        }
    }

    @media screen and (max-width: 960px) {
        >div {
            >h3 {}
        }
    }

    @media screen and (min-width: 720px) {
        >h5 {
            margin-bottom: 30px;
        }
    }

    @media screen and (max-width: 1400px) and (min-width: 720px) {
        >div {
            >h3 {
                padding-top: 30px;
                padding-right: 25px;
                border-top: 1px solid $stroke;
                width: 46.8%;
            }

            display: flex;


            >div {
                display: flex;
                width: 50%;
                flex-direction: column;
                border-left: 1px solid $stroke;

                >div {
                    padding: 30px 0 30px 30px;
                    border-top: 1px solid $stroke;

                    >h4 {
                        margin-bottom: 20px;
                    }
                }

            }

        }

    }


    @media screen and (max-width: 720px) {
        >h5 {
            margin-bottom: 20px;
        }

        >div {
            >h3 {
                padding-top: 20px;
                border-top: 1px solid $stroke;
            }

            display: flex;
            flex-direction: column;

            >div {
                display: flex;
                flex-direction: column;
                // border-left: 1px solid $stroke;

                >div {
                    padding: 30px 0 30px;
                    border-bottom: 1px solid $stroke;

                    >h4 {
                        margin-bottom: 10px;
                    }
                }

                >.three {
                    border: 0
                }

            }

        }

    }




}
</style>