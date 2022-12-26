<template>
    <div class=hill>
        <div class="textcont">
            <div class="text">
                <h3>Sunset at Mount Fuji
                </h3>
                <p>Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non.
                </p>
            </div>
        </div>
        <div class=iconcont>
            <div class=icon>
                <div><img src="../assets/img/time.svg" alt="excerpt">
                    <p>1''</p>
                </div>
                <div><img src="../assets/img/diaf.svg" alt="diaf">
                    <p>f/16</p>
                </div>
                <div><img src="../assets/img/iso.svg" alt="iso">
                    <p>400</p>
                </div>
                <div><img src="../assets/img/geo.svg" alt="geo">
                    <p>Japan</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.hill {
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    height: 600px;
    background: url("../assets/img/hill.png") center/cover no-repeat;
    flex-direction: column;

    .textcont {
        position: absolute;
        display: flex;
        align-items: center;
        margin-right: 60px;
        width: 20.8%;
        color: white;
        height: 100%;

        h3 {
            text-transform: uppercase;
            font-size: 14px;
            line-height: 20px;
            letter-spacing: 2px;
        }

        p {
            color: #C0C0C0;
            font-size: 14px;
            line-height: 20px;
        }

    }
}
</style>