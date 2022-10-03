<script setup>
import { RouterView } from 'vue-router'
import MainHeader from '@/components/MainHeader.vue'
import AdminHeader from '@/components/AdminHeader.vue'
</script>

<template>
  <!-- https://preview.colorlib.com/#personal -->
  <MainHeader v-if="!isAdmin"></MainHeader>
  <AdminHeader v-else></AdminHeader>
  <RouterView />
</template>

<script>
  export default {
    computed: {
      isAdmin: function() {
        return this.$route.path.includes('admin')
      }
    }
  }
</script>

<style>
  header, main {
    max-width: 1140px;
    margin: 0 auto;
  }
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
