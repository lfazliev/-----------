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
@media screen and (max-width:1200px) {
    .frame {
        .textbox {
            h5 {
                display: none;
            }
        }
    }
}

@media screen and (max-width:985px) {
    .frame {
        .textbox {
            h5 {
                display: none;
            }
        }
    }
}

.frame {
    white-space: nowrap;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 20px;

    @media screen and (max-width:985px) {
        padding: 0 30px;
    }

    @media screen and (max-width:760px) {
        justify-content: center
    }

    @media screen and (max-width:580px) {
        flex-direction: column;
        align-items: stretch;
        padding: 0 10px;
    }

    .textbox {
        @media screen and (max-width:985px) {
            margin-right: 0px
        }

        @media screen and (max-width:580px) {
            button {
                display: none;

            }

            justify-content: space-between;

            p {
                margin-right: 0px !important;
            }
        }

        color: #FFFFFF;
        margin-right: 140px;
        display: flex;
        align-items: center;

        h5 {
            margin-right: 56px;
        }

        h5:hover,
        p:hover {
            cursor: pointer;
        }

        p {
            margin: 0 0 1px 0;
            font-size: 15px;
            margin-right: 32px;
        }

    }



    .imgbox {
        @media screen and (max-width:985px) {
            margin-left: 0px
        }

        @media screen and (max-width:760px) {
            display: none;
        }

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