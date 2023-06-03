<template>
    <div class=tasks>
        <div class=text>
            <h3>Размещайте задания в нашей группе WhatsApp</h3>
            <h5><span>Новые заказы</span> каждый день</h5>
        </div>
        <div class=arrow>
            <img src="@/assets/img/Arrow.svg" alt="arrow">
            <h5>Перейти в WhatsApp</h5>

        </div>
    </div>
</template>
<style  lang = 'scss'>
.tasks {
    @media screen and (min-width: 1400px) {
        >.text {
            >h3 {
                width: 49.2%;
            }

            >h5 {
                width: 18%;
                margin-right: 5.8%
            }
        }

        >.arrow {
            margin: 60px 0 150px;
        }
    }

    @media screen and (min-width: 960px) and (max-width: 1400px) {
        >.text {
            >h3 {
                width: 68.7%;
            }

            >h5 {
                width: 25.2%;
            }
        }

        >.arrow {
            margin: 30px 0 80px;
        }
    }

    @media screen and (min-width: 720px) and (max-width: 960px) {
        >.text {
            >h3 {
                width: 65.2%;
            }

            >h5 {
                width: 30.5%;
            }
        }

        >.arrow {
            margin: 30px 0 80px;
        }
    }

    @media screen and (max-width: 720px) {
        >.text {
            flex-direction: column-reverse;

            >h3 {
                width: 100%;
                margin-top: 20px;
            }
        }

        >.arrow {
            margin: 30px 0 70px;
        }
    }

    >.text {
        display: flex;
        justify-content: space-between;

        >h5 {
            >span {
                color: $accpurp;
            }
        }
    }

    >.arrow:hover {
        transition: box-shadow 300ms;
        box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
        cursor: pointer;

        >img {
            transform: rotate(-45deg);
            transition: all 300ms;
        }
    }

    >.arrow {
        transition: box-shadow 300ms;

        @media screen and (min-width: 960px) {
            height: 231px;
        }

        >img {
            transition: all 300ms;
        }

        @media screen and (max-width: 960px) {
            height: 200px;
        }

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 1px solid $stroke;
        border-radius: 12px;


        >h5 {
            margin-top: 20px;
            color: $accpurp;
        }

    }

    h5 {
        @media screen and (max-width: 960px) {
            font-size: 20px;
        }
    }
}
</style>