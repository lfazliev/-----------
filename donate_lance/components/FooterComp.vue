<template>
    <footer>
        <div>
            <img src="@/assets/img/DZD2.svg" alt="dzd2">
            <div>
                <p class='p18pxB p16pxB'>Разместить заказ</p>
                <p class='p18pxB p16pxB'>Популярные вопросы</p>
                <p class='p18pxB p16pxB'>Ключевые показатели</p>
                <p class='p18pxB p16pxB'>О платформе</p>
            </div>
        </div>
        <p class='p18px p16px black50'>© DonutLance, 2022</p>
    </footer>
</template>
<style scope lang = 'scss'>
footer {
    padding: 30px;
    border-top: 1px solid $stroke;
    text-align: center;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    min-height: 160px;



    >div {
        p:hover {
            color: $accpurp;
            cursor: pointer;
        }

        >img {
            margin-bottom: 30px;
        }

        >div {
            display: flex;
            // width: 100%;
            justify-content: space-between;
        }
    }

    @media screen and (min-width: 1400px) {
        >div {
            width: 57.3%;
        }

    }

    @media screen and (min-width: 960px) and (max-width: 1400px) {
        >div {
            width: 78.3%;
        }
    }

    @media screen and (min-width: 720px) and (max-width: 960px) {
        >div {
            width: 84.1%;
        }
    }

    @media screen and (min-width: 720px) {
        >div {
            >div>p {
                padding: 0 10px;
            }
        }
    }

    @media screen and (max-width: 720px) {
        >div {
            >div {
                flex-direction: column;

                >p {
                    margin-bottom: 30px;
                }
            }

            >img {
                margin-bottom: 40px !important;
            }
        }
    }
}
</style>