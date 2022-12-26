<template>
    <div class=gadgets>
        <div class=cont>
            <div>
                <h3>The Gear cage</h3>
                <h2>The tools that we use.</h2>
                <p>The say that "no place is boring if you've had a good night's sleep and have a pocket full of
                    unexposed film". While we don't shoot (a lot) of film these days — these are the tools that we
                    actually use everyday to capture the amazing things around us.</p>
                <button class=btnround>
                    <div></div>
                    <p>Check it out</p>
                </button>
            </div>
        </div>
        <div class=gadgimg>
            <div class=iconcont>
                <div class=icon>
                    <div><img src="../assets/img/time.svg" alt="excerpt">
                        <p>0,8''</p>
                    </div>
                    <div><img src="../assets/img/diaf.svg" alt="diaf">
                        <p>f/5,6</p>
                    </div>
                    <div><img src="../assets/img/iso.svg" alt="iso">
                        <p>100</p>
                    </div>
                    <div><img src="../assets/img/geo.svg" alt="geo">
                        <p>Sweden</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.gadgets {
    height: 540px;
    display: flex;
    background-color: black;

    .cont {
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;


        >div {
            color: #ffffff;
            padding: 60px 40px 40px;
            width: 71.38%;

            >h3 {
                color: #C0C0C0;
                font-size: 14px;
                line-height: 20px;
                letter-spacing: 2px;
                text-transform: uppercase;
                margin-bottom: 6px;
            }

            >h2 {
                margin-bottom: 14px;
                font-weight: 400;
                font-size: 28px;
                line-height: 32px;
            }

            >p {
                font-size: 14px;
                line-height: 20px;
                margin-bottom: 20px;
            }
        }
    }

    .gadgimg {
        align-items: flex-end;
        display: flex;
        background: url(../assets/img/gadgimg.png) center/cover no-repeat;
        height: 100%;
        width: 50%;
    }
}
</style>