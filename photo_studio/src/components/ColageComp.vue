<template>
    <div class=colage>
        <div class=content>
            <div class="textcont">
                <h1>What we do.</h1>
                <p>The areas that we're specialized in.</p>
            </div>
            <div class="imgcont">
                <div class=gadgets>
                    <div class="imgtxt">
                        <h5>Product Photography</h5>
                        <p>Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor
                            hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.</p>
                        <button class=btnround>
                            <div></div>
                            <p>Read more</p>
                        </button>
                    </div>
                </div>
                <div class="line">
                    <div class="imgtxt">
                        <h5>Architecture Photography</h5>
                        <p>Aenean porta neque eget consequat fringilla. Vestibulum ultrices, orci nec egestas pharetra,
                            ligula est semper enim, nec auctor sapien leo nec purus. Fusce tincidunt aliquet sapien, sit
                            amet rhoncus leo imperdiet nec.</p>
                        <button class=btnround>
                            <div></div>
                            <p>Read more</p>
                        </button>
                    </div>
                </div>
                <div class="forest">
                    <div class="imgtxt">
                        <h5>Drone Photography</h5>
                        <p>Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt. Duis tristique sed lorem a
                            vestibulum. Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur
                            auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.</p>
                        <button class=btnround>
                            <div></div>
                            <p>Read more</p>
                        </button>
                    </div>
                </div>
                <div class="deer">
                    <div class="imgtxt">
                        <h5>Wildlife Photography</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et
                            faucibus. Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus
                            congue et, vulputate ut ligula. Vestibulum sit amet urna turpis.</p>
                        <button class=btnround>
                            <div></div>
                            <p>Read more</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.colage {
    @media screen and (max-width:1000px) {
        padding: 113px 20px 100px;
    }

    padding: 113px 120px 100px;

    .content {
        padding: 0 8px 0px;

        .textcont {
            color: #FFFFFF;
            text-align: center;
            margin-bottom: 40px;


            h1 {
                margin: 0;
                font-size: 40px;
                line-height: 42px;
            }

            p {
                margin: 0;
                margin: 15px 0 2px;
                color: #C0C0C0;
                font-size: 23px;
                line-height: 30px;
            }
        }


        .imgcont {
            @media screen and (max-width:750px) {
                grid-template: 25% 25% 25% 25%/ 100%;
            }

            display: grid;
            grid-template: 50% 50% / 50% 50%;

            >div {
                aspect-ratio: 24/25;
                margin: 8px;
                padding: 15px 45px 30px 30px;

                @media screen and (max-width: 500px) {
                    padding: 15px 10px 30px 15px;
                }

                display: flex;
                align-items: flex-end;

                .imgtxt {
                    color: #FFFFFF;

                    h5 {
                        text-transform: uppercase;
                        font-size: 14px;
                        line-height: 20px;
                        letter-spacing: 2px;
                        margin-bottom: 10px;
                    }

                    >p {
                        margin-bottom: 17px;
                        font-size: 14px;
                        line-height: 20px;
                        color: #C0C0C0;

                    }
                }


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
}
</style>