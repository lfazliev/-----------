<template>
  <div class="offer">
    <h1>What I can Offer you?</h1>
    <p>{{ learnMore }}</p>
    <div class="items">
      <div class="item">
        <!--Empty blocks for design purpose-->
        <div class="rectangleLeft" />
        <img src="@/assets/portfolio/sketches/GIRL.png" alt="sketch">
        <h1>Consulting</h1>
        <button>Learn More</button>
      </div>
      <div class="item">
        <img src="@/assets/portfolio/sketches/NOTEBOOK.png" alt="sketch">
        <h1>Content Creation</h1>
        <button>Let's do it</button>
      </div>
      <div class="item">
        <div class="rectangleRight" />
        <img src="@/assets/portfolio/sketches/PHONE.png" alt="sketch">
        <h1>Copywriting</h1>
        <button>I'm in</button>
      </div>
    </div>
    <img src="@/assets/portfolio/sketches/scetch.png" alt="sketch" id="sketch1">
    <img src="@/assets/portfolio/sketches/scetch.png" alt="sketch" id="sketch2">
    <img src="@/assets/portfolio/sketches/scetch.png" alt="sketch" id="sketch3">
  </div>
</template>

<script>
export default {
  name: "OfferComp",
  data() {
    return {
      learnMore: "Learn more about how you, " +
        "your team, or organization can go from beginner to industry" +
        " influencer with real strategies and customized content"
    }
  }
}
</script>

<style lang="scss">
@media screen and (max-width: 950px) {
  .offer {
    p {
      font-size: 20px;
    }

    .items {
      display: flex;
      flex-direction: column;


      .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 70% !important;

        h1 {
          color: $black-color
        }
      }
    }
  }
}


.offer {
  position: relative;

  h1 {
    text-align: center;
    text-transform: uppercase;
    color: $global;

    font-weight: 500;

  }

  p {
    text-align: center;
    color: black;
    margin: auto;
    width: 35%;

  }

  .items {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    .item {
      width: 30%;
      text-align: center;

      .rectangleLeft {
        height: 60px;
        position: absolute;
        width: 15%;
        background-color: #ECC0B2FF;
        left: 0;
        bottom: 50%;
        z-index: -1;
        transform: translateY(-50%);
      }

      .rectangleRight {
        height: 60px;
        position: absolute;
        width: 15%;
        background-color: #ECC0B2FF;
        right: 0;
        bottom: 50%;
        z-index: -1;
        transform: translateY(-50%);
      }

      img {
        width: 100%;
      }

      h1 {

        text-transform: uppercase;
        font-weight: 500;
        color: $black-color
      }

      button {
        padding: 19px;
        color: white;
        background-color: $global;
        border: none;
        border-radius: 30px;
        text-transform: uppercase;
        font-size: 20px;
        width: 275px;

        &:hover {
          background-color: black;
          color: $global;
          cursor: pointer;
        }
      }
    }
  }

  #sketch1,
  #sketch2,
  #sketch3 {
    position: absolute;
    z-index: 1;
  }

  #sketch1 {
    top: -85px;
    left: -280px;
    transform: rotate(12deg);
  }

  #sketch2 {
    top: -42px;
    right: -301px;
    transform: rotate(172deg);
  }

  #sketch3 {
    bottom: 56px;
    left: -275px;
    transform: rotate(30deg);
  }
}
</style>