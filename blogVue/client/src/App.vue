<script setup>
import { RouterView } from 'vue-router'
import HeaderC from '@/components/HeaderComp.vue'
import FooterC from '@/components/FooterComp.vue'
</script>
<template>
  <main>
    <HeaderC></HeaderC>
    <MainHeader v-if="!isAdmin"></MainHeader>
    <AdminHeader v-else></AdminHeader>
    <RouterView></RouterView>
    <FooterC></FooterC>
  </main>
</template>

<script>
export default {
  computed: {
    isAdmin: function () {
      return this.$route.path.includes('admin')
    }
  }
}
</script>

<style>
header {
  display: flex;
}

nav {
  margin-left: auto;
}

nav a {
  margin-left: 10px;
  color: black;
  text-decoration: none;
}

header img {
  width: 100px;
}
</style>
