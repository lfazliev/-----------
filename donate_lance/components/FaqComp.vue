<template>
    <div class=faq>
        <h3>Список <span class=accpurp>частых</span> вопросов и ответов</h3>
        <div>
            <div class="panel" @click="isPanelOpen = !isPanelOpen;">
                <div class="panel-header">
                    <h4>Что такое Дизайн За Донат?</h4>
                    <img src="@/assets/img/Arrowpanel.svg" :class="{ open: isPanelOpen }">
                </div>
                <transition name="fadeHeight">
                    <div class="panel-content" v-if="isPanelOpen">
                        <p class="p18px p16px black50">
                            Дизайн За Донат - это онлайн биржа для начинающих дизайнеров, которая позволяет им делать
                            бесплатный дизайн и получать опыт
                        </p>
                    </div>
                </transition>
            </div>
            <div class="panel" @click="isPanel1Open = !isPanel1Open;">
                <div class="panel-header">
                    <h4>Кто может использовать Дизайн За Донат?</h4>
                    <img src="@/assets/img/Arrowpanel.svg" :class="{ open: isPanel1Open }">
                </div>
                <transition name="fadeHeight">
                    <div class="panel-content" v-if="isPanel1Open">
                        <p class="p18px p16px black50">
                            Дизайн За Донат предназначен для студентов, которые хотят получить опыт в дизайне и заказчиков,
                            которые хотят получить проект за бесплатно
                        </p>
                    </div>
                </transition>
            </div>
            <div class="panel" @click="isPanel2Open = !isPanel2Open;">
                <div class="panel-header">
                    <h4>Как работает Дизайн За Донат?</h4>
                    <img src="@/assets/img/Arrowpanel.svg" :class="{ open: isPanel2Open }">
                </div>
                <transition name="fadeHeight">
                    <div class="panel-content" v-if="isPanel2Open">
                        <p class="p18px p16px black50">
                            Заказы размещаются в группе в whats up. В группе находятся исполнители, которые отзываются на
                            задания. В случае если исполнитель подходит, исполнитель и заказчик догвориваются о срока и
                            условиях выполнения заказа.
                        </p>
                    </div>
                </transition>
            </div>
            <div class="panel" @click="isPanel3Open = !isPanel3Open;">
                <div class="panel-header">
                    <h4>Какие проекты можно размещать на Дизайн За Донат?</h4>
                    <img src="@/assets/img/Arrowpanel.svg" :class="{ open: isPanel3Open }">
                </div>
                <transition name="fadeHeight">
                    <div class="panel-content" v-if="isPanel3Open">
                        <p class="p18px p16px black50">
                            На Дизайн За Донат можно размещать различные проекты в области дизайна, включая логотипы,
                            брендинг, веб-дизайн и многое другое.
                        </p>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>
<script setup>
let isPanelOpen = ref(false);
let isPanel1Open = ref(false);
let isPanel2Open = ref(false);
let isPanel3Open = ref(false);

</script>
<style scope  lang = 'scss'>
.faq {
    display: flex;

    justify-content: space-between;

    @media screen and (min-width: 1400px) {
        >div {
            width: 49.2%;
        }


        >h3 {
            width: 40.3%;
        }
    }

    @media screen and (min-width: 960px) and (max-width: 1400px) {
        flex-direction: column;

        >h3 {
            width: 73.2%;
            margin-bottom: 50px;
        }
    }

    @media screen and (min-width: 720px) and (max-width: 960px) {
        flex-direction: column;

        >h3 {
            width: 65.3%;
            margin-bottom: 30px;
        }
    }

    @media screen and (max-width: 720px) {
        flex-direction: column;

        >h3 {
            margin-bottom: 30px;
        }
    }



    >div {

        >.panel {
            padding-bottom: 30px;
            margin-bottom: 30px;
            border-bottom: 1px solid $stroke;

            .fadeHeight-enter-active,
            .fadeHeight-leave-active {
                transition: all 300ms;
                max-height: 200px;
                margin-top: 20px !important;
            }

            .fadeHeight-enter-from,
            .fadeHeight-leave-to {
                max-height: 0;
                opacity: 0;
                margin: 0 !important;
                transition: all 300ms;
            }

            .panel-header>img {
                transition: transform 300ms;
            }

            .panel-header>img.open {
                transform: rotate(180deg);
            }

            .panel-content {
                overflow: hidden;
                margin-top: 20px;
            }

            .panel-header {
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
        }
    }
}
</style>