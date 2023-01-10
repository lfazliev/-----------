<template>
  <div class="home">
    <GreetingComp />
    <OfferComp />
    <EducationComp />
  </div>
</template>

<script>
import GreetingComp from "@/components/GreetingComp";
import OfferComp from "@/components/OfferComp";
import EducationComp from "@/components/EducationComp";

export default {
  name: 'HomeView',
  components: {
    GreetingComp,
    OfferComp,
    EducationComp
  }
}
</script>
<style scoped lang="scss">
@media screen and (max-width:550px) {
  p {
    font-size: 20px
  }
}


.home {
  background-color: white;

}
</style>
