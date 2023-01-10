<template>
  <div class="greeting">
    <div>
      <h4>Hi, I'm Masha</h4>
      <h1>Let's raise your profit <br> via Social Media</h1>
      <button @click="goToWork">
        See my projects
      </button>
    </div>
    <img class=myphoto src="@/assets/portfolio/photoProfile.png" alt="photoProfile" @click="goToWork">
    <img src="@/assets/portfolio/bookHand.png" alt="picture" id="bookHand">
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "GreetingComp",
  methods: {
    goToWork: () => {
      router.push("/work");
    }
  }
}
</script>

<style scoped lang="scss">
@media screen and (max-width: 800px) {
  .myphoto {
    display: none;
  }

  .greeting div {
    margin: 0 !important;
  }

}



.greeting {
  height: 600px;
  background-color: #eec2b3;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;

  div {
    margin-right: 50px;
  }

  img:first-of-type {
    width: 20%;
    transition: ease 1s;
    margin-left: 50px;

    &:hover {
      cursor: pointer;
      width: 21%;
    }
  }

  h4,
  h1 {
    margin: 20px 0;
    color: white;
    text-transform: uppercase;

  }

  button {
    background: none;
    border: 2px solid white;
    padding: 22px;
    color: white;
    border-radius: 40px;
    width: 60%;
    margin: auto;

    &:hover {
      background-color: white;
      color: black;
      cursor: pointer;
    }
  }
}

#bookHand {
  position: absolute;
  width: 300px;
  transform: rotate(30deg);
  bottom: -25px;
  left: 0;
}
</style>