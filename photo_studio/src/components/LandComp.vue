<template>
    <div class=land>
        <div class="text">
            <p style="text-transform: uppercase; letter-spacing: 2px; margin: 10px 0 0 0;">Photographer & Filmmaker</p>
            <h1 style="margin: 0px 0 8px 0;">Aperture Studios</h1>
            <p style="margin: 10px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius
                enim in
                eros elementum
                tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae
                erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique
                posuere.</p>
        </div>
        <div class=iconcont>
            <div class=icon>
                <div><img src="../assets/img/time.svg" alt="excerpt">
                    <p>1/2000s</p>
                </div>
                <div><img src="../assets/img/diaf.svg" alt="diaf">
                    <p>f/11</p>
                </div>
                <div><img src="../assets/img/iso.svg" alt="iso">
                    <p>100</p>
                </div>
                <div><img src="../assets/img/geo.svg" alt="geo">
                    <p>Iceland</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.land {
    height: 716px;
    background: url(../assets/img/land.png) center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;


    .text {
        @media screen and (max-width:1100px) {
            width: 60%;
        }

        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 41.6%;

        align-items: center;
        text-align: center;
        margin-bottom: 61px;

        h1 {
            color: #FFFFFF;
            font-size: 54px;
            line-height: 59px;
        }

        p {
            color: #C0C0C0;
            font-size: 14px;
            line-height: 20px;
        }
    }


}
</style>