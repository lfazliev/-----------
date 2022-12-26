<template>
    <div class=colage>
        <div class="textcont">
            <h1>What we do.</h1>
            <p>The areas that we're specialized in.</p>
        </div>
        <div class="imgcont">
            <div class=gadgets></div>
            <div class="line"></div>
            <div class="forest"></div>
            <div class="deer"></div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.colage {
    background-color: black;
    padding-bottom: 100px;

    .textcont {
        color: azure;
        text-align: center;
        padding: 120px 0 40px 0;


        h1 {
            font-size: 40px;
            line-height: 42px;
            margin-bottom: 7px;
        }

        p {
            color: #C0C0C0;
            font-size: 23px;
            line-height: 30px;
        }
    }

    .imgcont {
        padding: 16px;
        margin: 0 auto;
        width: 81.11%;
        display: grid;
        grid-template: 50% 50% / 50% 50%;
        justify-items: stretch;

        div {
            padding-top: 104%;
            margin: 8px;
        }

        .gadgets {
            background: url("../assets/img/gadgets.png") center/cover no-repeat;

        }

        .deer {
            background: url('../assets/img/deer.png') center/cover no-repeat;
        }

        .line {
            background: url("../assets/img/line.png") center/cover no-repeat;
        }

        .forest {
            background: url("../assets/img/forest.png") center/cover no-repeat;
        }
    }
}
</style>