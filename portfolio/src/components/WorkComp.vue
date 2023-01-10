<template>
  <div class="work">
    <img src="@/assets/portfolio/gif/main.gif" alt="gif">
    <button>Take a look at projects</button>
  </div>
  <div class="content">
    <div id="bon_she">
      <div class="text">
        <h2>What Is It?</h2>
        <h4>Korean Cosmetics Brand</h4>
        <h2>What is The Goal?</h2>
        <h4>Increase the Brand Awareness in the Russian Market</h4>
        <div class="bon_she_border">
          <h2 style="font-weight: 700">RESULT</h2>
          <ul class="first_list">
            <li>+1000 followers without using paid methods of promotion</li>
            <li>acquaintance with the product of more than 10,000 people</li>
            <li>monthly sales were increased by 5 times</li>
          </ul>
        </div>
        <h2>My tasks:</h2>
        <ul class="second_list">
          <li>Instagram (Content Creating)</li>
          <li>Connection With Potential Customers</li>
          <li>Production Of Filming</li>
          <li>Copy-writing</li>
          <li>Working With Marketplaces</li>
        </ul>
      </div>
      <swiper :spaceBetween="30" :centeredSlides="true" :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }" :pagination="{
  clickable: true,
}" :navigation="true" :modules="modules" class="mySwiper">

        <swiper-slide class="slide">
          <img src="@/assets/portfolio/bonshes/1.png">
        </swiper-slide>
        <swiper-slide class="slide"><img src="@/assets/portfolio/bonshes/2.png"></swiper-slide>
        <swiper-slide class="slide"><img src="@/assets/portfolio/bonshes/3.png"></swiper-slide>
        <swiper-slide class="slide"><img src="@/assets/portfolio/bonshes/4.png"></swiper-slide>
      </swiper>
      <div class="logo">
        <img src="@/assets/portfolio/bonshes/bonshe.png" alt="logo">
      </div>
    </div>
    <div class=accupd>
      <h1>PROFILE`S UPGRADING</h1>
      <p>Sometimes clients want just make their pages look better (modern, fashionable) and I happy to help with it.
        It usually takes 3-4 working days to complete the task. Before the work I ask what the Clint want to leave,
        portraits of their clients and specific colours.</p>
      <div>
        <hr class=line>
        <div><img src="@/assets/portfolio/before_after/1before.jpg"></div>
        <div><img src="@/assets/portfolio/before_after/2after.jpg"></div>
      </div>
    </div>
    <div class=pinshare>
      <h2>You can find my design works here</h2> <img src="@/assets/portfolio/pinterest.png">
    </div>
    <div>
      <h2 style="color:white; text-align: center; margin: 100px;">I occasionally take on freelance opportunities.</h2>
    </div>
  </div>
</template>

<script>
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination'
export default {
  name: "WorkComp",
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation]
    }
  }
}
</script>

<style lang="scss">
.swiper {
  width: 30%;
  max-height: 950px;
  min-width: 450px;
  margin: 0;
}

:root {
  --swiper-theme-color: #EEC2B3
}

.pinshare {
  padding: 0 20px;
  margin-top: 100px;
  background-color: $white-color;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;



  >img {
    margin: 20px;
    width: 100px;
    object-fit: contain;

  }
}

.swiper-slide {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  height: 100%;
  transform: translate(-55px, -30px);
  object-fit: cover;
}

.work {
  height: 800px;
  position: relative;

  h1 {
    color: white;
    margin: 0;
    text-align: center;
    width: 100%;
    position: relative;
    top: 50px;
    font-size: 45px;
    text-transform: uppercase;
  }



  img {
    position: absolute;
    top: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  button {
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    padding: 20px;
    border: none;
    border-radius: 30px;
    background-color: antiquewhite;
    font-size: 22px;

    &:hover {
      background-color: black;
      color: white;
      cursor: pointer;
    }
  }
}

.accupd {
  h1 {
    font-size: 50px;
    text-align: center;
    color: $white-color;
    margin: 50px 0 0px 0;
    position: relative;
    top: 20px;
    font-weight: 500;
  }

  p {
    margin: 50px 7% 35px;
    text-align: center;
    color: white;
    font-size: 23px;
  }

  .line {
    background-color: $white-color;
    height: 80px;
    width: 100%;
    position: absolute;
    z-index: -1;
  }

  >div {
    position: relative;
    display: flex;
    align-items: center;

    justify-content: space-around;

    >div {
      padding: 5%;
      border: 3px $white-color solid;
      width: 30%;

      img {
        margin: 5px;
        width: 100%;
      }
    }
  }
}

#bon_she {
  h2 {
    font-size: 30px;
  }

  background-color: #1c1c1cff;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: space-around;

  .text {
    align-self: center;
    color: white;
    text-align: center;

    width: 50%;
    padding: 15px;

    h2 {
      margin: 10px 0 15px 0 !important;
    }

    h4 {
      margin-bottom: 25px !important;
    }

    h3,
    h4,
    h2 {
      margin: 0;
      font-weight: 500;
    }

    .bon_she_border {
      padding: 10px 30px;
      border: 1px solid #c9a397;
      border-radius: 140px;

      .first_list {
        li {
          line-height: 3;
          letter-spacing: 1px;
          font-size: 20px;
        }

        display: flex;
        flex-direction: column;
        align-items: center;
        list-style-type: '\2713\ ';
      }
    }

    .second_list {
      list-style: none;
      padding: 0;
      columns: 2;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      li {
        display: inline-block;
        padding: 10px;
        flex-basis: 43%;
      }
    }
  }

  .logo {
    position: absolute;
    top: -35px;
    left: -50px;
    width: 300px;

    img {
      width: 100%;
    }
  }

}

@media screen and (max-width: 900px) {
  #bon_she {
    flex-direction: column !important;
    align-items: center;

    .text {
      .second_list {
        li {
          flex-basis: 95%;
          font-weight: 400;
          font-size: 17px;
        }
      }

      width: 90%;
    }
  }

  .swiper-slide img {
    transform: translate(-25px, -25px);
  }

  .accupd {
    >div {
      flex-direction: column;

      >div {
        width: 60%;
        margin-top: 15%;

        margin-bottom: 60px;
      }
    }

    p {
      margin-bottom: 100px;
    }

    .line {
      height: 100%;
      width: 60px;
      position: absolute;
      z-index: -1;
      padding: 60px 0;
    }
  }

  .work {
    height: 350px;
  }

  .swiper {
    width: 100%;
    height: 500px;
    max-height: 950px;
    min-height: 0
  }
}
</style>