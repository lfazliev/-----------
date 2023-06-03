<template>
    <div class=cover>
        <div class=maintext>
            <h1>Дизайн</h1>
            <p class=fordonate>за донат</p>
        </div>
        <div class=textcont>
            <h3 style="white-space: nowrap;">Решайте <span>сами</span> <br> сколько платить</h3>
            <div>
                <h5>Находите исполнителей среди начинающих дизайнеров</h5>
                <div class=list>
                    <h5>Направления</h5>
                    <p class="p18px p16px">Графический дизайн</p>
                    <p class="p18px p16px">Веб-дизайн</p>
                    <p class="p18px p16px">Анимация и видео</p>
                    <p class="p18px p16px">Дизайн интерьера</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

</script>
<style scope  lang = 'scss'>
.cover {

    >.maintext {
        >.fordonate {
            font-style: normal;
            font-weight: 500;
            font-size: 80px;
            line-height: 90%;
            color: $accpurp
        }


        display: flex;

        @media screen and (min-width: 1400px) {
            flex-direction: row;
            align-items: flex-end;

            >p {
                margin-left: 30px;
            }

        }

        @media screen and (min-width: 960px) and (max-width: 1400px) {
            flex-direction: column;

            >p {
                margin-top: 30px;
            }
        }

        @media screen and (max-width: 720px) {
            flex-direction: column;

            >p {
                margin-top: 30px;
            }
        }

        @media screen and (max-width: 720px) {


            .fordonate {
                font-size: 40px !important;
            }
        }

        @media screen and (min-width: 720px) and (max-width: 960px) {
            align-items: flex-end;

            .fordonate {
                font-size: 40px !important;
                margin-left: 20px;
            }
        }
    }

    .textcont {
        display: flex;

        >div {
            >h5 {

                @media screen and (max-width: 960px) {
                    font-size: 20px;
                }

                @media screen and (max-width: 720px) {
                    padding: 20px 0px 30px;
                    border-bottom: 1px $stroke solid;
                }

                @media screen and (min-width: 720px) and (max-width: 1400px) {
                    padding: 30px;
                    border-bottom: 1px $stroke solid;
                }

                @media screen and (min-width: 1400px) {
                    height: 124px;
                    width: 34.5%;
                    padding: 30px 0 0 30px;
                    border-left: 1px $stroke solid;
                }

            }

            display: flex;

            @media screen and (min-width: 1400px) {
                justify-content: space-evenly;
            }

            @media screen and (min-width: 720px) and (max-width: 1400px) {
                border-left: 1px $stroke solid;
                width: 50%;
                flex-direction: column;
            }

            @media screen and (max-width: 720px) {
                flex-direction: column;
            }

            >.list {
                @media screen and (min-width: 720px) {
                    padding: 30px 10.6% 30px 30px;
                }

                @media screen and (max-width: 720px) {
                    margin-top: 20px;
                }

                @media screen and (min-width: 1400px) {
                    border-left: 1px $stroke solid;
                }

                >h5 {
                    @media screen and (max-width: 960px) {
                        font-size: 20px;
                    }

                    margin-bottom: 20px;
                }

                >p {
                    color: $black50;
                    margin-bottom: 10px;
                }

                >p:hover {
                    cursor: pointer;
                    color: $accpurp;
                }
            }
        }

        >h3 {
            padding: 30px 0;

            @media screen and (min-width: 960px) and (max-width: 1400px) {
                padding: 30px 30px 0 0px;
            }

            @media screen and (max-width: 720px) {
                padding: 30px 30px 0 0px;
            }

            @media screen and (min-width: 1400px) {
                padding-right: 15.1%;
            }
        }

        justify-content: space-between;

        @media screen and (max-width: 720px) {
            flex-direction: column;
        }

        >h3>span {
            color: $accpurp;
        }

        @media screen and (min-width: 960px) {
            margin-top: 60px;
        }

        @media screen and (max-width: 960px) and (min-width: 720px) {
            margin-top: 40px;
        }

        @media screen and (max-width: 720px) {
            margin-top: 30px;
        }

        border-top: 1px $stroke solid;
    }


}
</style>