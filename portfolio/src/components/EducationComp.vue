<template>
  <div class="education">
    <h1>Education history</h1>

    <div class="items">
      <div class="item">
        <div class="year">2020</div>
        <h2>Russian Presidential Academy of National Economy and Public Administration</h2>
        <h2>Digital Media Bachelor's Degree</h2>
      </div>
      <div class="item">
        <div class="year top">2021</div>
        <h2>Gahan Academy</h2>
        <h2>Course "Top-SMM specialist" 2021</h2>
      </div>
      <div class="item">
        <div class="year">2022</div>
        <h2>Fanshawe College</h2>
        <h2>Interactive Media Design</h2>
        <img src="@/assets/portfolio/paper.png" alt="paper image" id="paperImg">
      </div>
    </div>

    <div class="end">
      <h2>I occasionally take on freelance opportunities.</h2>
      <p>
        Have an exciting project where you need some help? <br>
        Send me over a message, and <u @click="goToContact">let's chat.</u>
      </p>
    </div>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "EducationComp",
  methods: {
    goToContact: () => {
      router.replace("/contact");
    }
  }
}
</script>

<style lang="scss">
button:hover {
  transition: background-color 300ms;
}

button {
  transition: background-color 300ms;
}

@media screen and (max-width: 800px) {
  .education {
    .items {
      flex-direction: column;
    }
  }
}

.education {
  padding-bottom: 40px;
  background-color: $global;
  margin-top: 20px;

  h1:first-of-type {
    text-align: center;
    color: white;

    margin: 0 0 100px 0;
    position: relative;
    top: 20px;
    font-weight: 500;
    text-transform: uppercase;
  }

  .items {
    display: flex;
    align-items: center;
    justify-content: center;

    .item {
      width: 260px;
      padding: 40px;
      border: 2px solid white;
      border-radius: 80px;
      color: white;
      position: relative;
      height: 350px;
      margin: 40px 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;

      .year {
        position: absolute;
        bottom: -30px;
        font-size: 33px;
        background-color: white;
        border-radius: 50%;
        padding: 10px;

        font-weight: 500;
        text-shadow:
          -1px 0 $global,
          0 1px $global,
          1px 0 $global,
          0 -1px $global;
      }

      .top {
        top: -30px;
        bottom: auto;
      }

      h2 {

        font-weight: 500;
        font-size: 20px;
      }

      #paperImg {
        width: 150px;
        position: absolute;
        top: -65px;
        right: 8px;
        transform: rotate(150deg);
      }
    }
  }

  .end {
    text-align: center;
    color: white;

    width: 435px;
    margin: 100px auto;

    h2 {
      font-size: 32px;
    }

    u:hover {
      cursor: pointer;
      color: black;
    }
  }
}
</style>