<template>
    <div class=frame>
        <div class="imgbox"><img src="../assets/img/Combined-Shape.svg" alt="aperture"></div>
        <div class=textbox>

            <h5>Business areas</h5>
            <p>Featured images</p>
            <p>Gear cage</p>
            <p>Contact</p>

            <button>Get tamplate</button>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.frame {
    white-space: nowrap;
    height: 90px;
    display: flex;
    background-color: black;
    align-items: center;
    justify-content: space-between;
    line-height: 20px;

    .textbox {
        color: #FFFFFF;
        margin-right: 140px;
        display: flex;
        align-items: center;

        h5 {
            margin-right: 56px;
        }

        p {
            margin: 0 0 1px 0;
            font-size: 15px;
            margin-right: 32px;
        }

    }



    .imgbox {
        margin-left: 152px;
        height: 31px;
        width: 128px;

        img {
            width: 100%;
            height: 100%;
        }
    }
}
</style>