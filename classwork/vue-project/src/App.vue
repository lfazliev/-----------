<template>
  <HeaderC></HeaderC>
  <HighbarC></HighbarC>
  <RouterView></RouterView>
  <FooterC></FooterC>
</template>

<script>
import { RouterView } from 'vue-router'
import HighbarC from '@/components/HighbarComp.vue'
import HeaderC from '@/components/HeaderComp.vue'
import FooterC from '@/components/FooterComp.vue'
export default {
  data() { return {} },
  beforeMount: async function () { },
  methods: {},
  computed: {},
  components: {
    HeaderC,
    FooterC,
    HighbarC,
    RouterView,
  },
}
</script>

<style>

</style>
