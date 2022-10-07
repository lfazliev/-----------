<template>
    <div>
        <div id="head"><a href=""></a></div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
#head {
    transition: 300ms;
    background: url('img/channels4_banner.jpg') 54% center/cover no-repeat;
    height: 300px;
}

#head>a {
    display: block;
    width: 100%;
    height: 100%
}

@media screen and (max-width:900px) {
    html {
        transition: all 300ms
    }

    #head {
        height: 200px;
    }
}
</style>
