<template>
    <div class='footer'>
        <div class="maincont">
            <div class=first>
                <div class=textcont><img src="../assets/img/Combined-Shape.svg" alt="">
                    <p>Photographers & videographers capturing the world around us.</p>
                </div>
                <div class=linkcont>
                    <div class=business>
                        <h3>Business areas</h3>
                        <a href="">Product Photography</a>
                        <a href="">Architecture Photography</a>
                        <a href="">Drone Photography</a>
                        <a href="">Wildlife Photography</a>
                    </div>
                    <div class=pages>
                        <h3>Pages</h3>
                        <a href="">Gear cage</a>
                        <a href="">Featured images</a>
                        <a href="">Contact</a>
                        <a href="">Style guide</a>
                        <a href="">Instructions</a>
                        <a href="">Changelog</a>
                    </div>
                </div>
            </div>
            <hr>
            <div class=sec>
                <div>
                    <h2>Subscribe to our newsletter</h2>
                    <p>Read about all the things we do.</p>
                </div>
                <div class=inputcont><input type="email" name="youremail" id="">
                    <div></div>
                </div>
            </div>
            <hr>
            <div class=third>
                <div>
                    <p>© Aperture Photography, Inc. All rights reserved. </p><span>Licensing .</span>
                </div>
                <div></div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.footer {
    padding: 100px 0;

    h2 {
        text-transform: uppercase;
        color: #ffffff;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 2px;
    }

    p,
    span,
    h3 {
        color: #C0C0C0;
    }

    .maincont {
        margin: 0 auto;
        width: 81.11%;

        .first {
            display: flex;
            justify-content: space-between;

            .textcont {
                img {
                    margin-bottom: 20px;
                }

                p {
                    font-size: 13px;
                    line-height: 20px;
                }
            }

            .linkcont {
                display: flex;

                .pages {
                    a {
                        font-size: 13px;
                    }
                }

                .business {
                    a {
                        font-size: 14px;
                    }
                }

                >div {
                    min-width: 220px;
                    margin-left: 16px;
                    display: flex;
                    flex-direction: column;

                    h3 {
                        font-size: 14px;
                        line-height: 20px;
                        letter-spacing: 2px;
                        text-transform: uppercase;
                        margin-bottom: 10px;
                    }

                    a {
                        color: #ffffff;
                        text-decoration: none;
                        line-height: 20px;
                        margin-bottom: 10px;
                    }
                }
            }
        }

        .sec {
            display: flex;
            justify-content: space-between;

            .inputcont {
                display: flex;
                width: 39.21%;
                background: #F9FAFB;
                border: 1px solid #E5E7EB;
                border-radius: 12px;
                height: 52px;

                >input {
                    margin-left: 10px;
                    width: 86%;
                    outline: 0;
                    border: 0;
                    background-color: #c0c0c000;
                }

                >div {
                    background-color: black;
                    width: 14%;
                    margin: 11px 6px;
                    border-radius: 11px;
                    transition: 300ms;
                }

                >div:hover {
                    cursor: pointer;
                    background-color: #555555;
                    transition: 300ms;
                }
            }

            >div {
                p {
                    margin-top: 20px;
                    font-size: 13px;
                    line-height: 20px;
                }
            }
        }

        .third {
            margin-top: 20px;


            div {
                display: flex;
                align-items: flex-end;

                p {
                    font-size: 14px;
                    margin-right: 5px;
                }

                span {
                    font-size: 13px;
                }
            }
        }
    }
}
</style>