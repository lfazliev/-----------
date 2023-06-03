<template>
  <a href="/hom/modHTML/index.html" style="color: black;">Back</a>
  <nav>
    <div class="links">
      <NuxtLink to="/work">Work</NuxtLink>
      <NuxtLink to="/contact">Contact</NuxtLink>
    </div>
    <div class="logo">
      <NuxtLink to="/"><small>shevchenko mariia</small></NuxtLink>
    </div>
    <div class="socials fullsc">
      <a href="#"><img src="@/assets/img/social/pinterest.svg" alt="pinterest"></a>
      <a href="#"><img src="@/assets/img/social/insta.svg" alt="insta"></a>
      <a href="#"><img src="@/assets/img/social/linkedin.svg" alt="in"></a>
    </div>
    <div :class="('menubtn ' + rotate_cl)" @click="(polmenu = !polmenu);" id=menubtn></div>
    <transition name=fade class=transmenu>
      <div v-if='((polmenu == true) && (winwidth < 550))'>
        <ul>
          <li>
            <NuxtLink to="/work">Work</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact">Contact</NuxtLink>
          </li>
          <div class="socials">
            <a href="#"><img src="@/assets/img/social/pinterest.svg" alt="pinterest"></a>
            <a href="#"><img src="@/assets/img/social/insta.svg" alt="insta"></a>
            <a href="#"><img src="@/assets/img/social/linkedin.svg" alt="in"></a>
          </div>
        </ul>
      </div>
    </transition>
  </nav>
  <NuxtPage />
</template>

<script setup>
let winwidth = ref(0)
let polmenu = ref(false)
onMounted(() => {
  window.addEventListener("resize", myEventHandler);
})
onUnmounted(() => {
  window.removeEventListener("resize", myEventHandler);
})
const rotate_cl = computed(() => {
  if (polmenu.value == false) {
    return ''
  }
  else {
    return 'rotate'
  }
})
const myEventHandler = (e) => {
  winwidth.value = e.target.innerWidth
  if (winwidth.value > 720) {
    polmenu.value = false
  }
}
useHead({
  title: 'Portfolio',
})
</script>

<style scope lang="scss">
body {
  margin: 0;
  overflow-x: hidden;
}

.rotate {
  transform: rotate(90deg);
  transition: 300ms;
}

.menubtn {
  display: none;
  background-image: url(./assets/menu-svgrepo-com.svg);
  width: 20px;
  height: 20px;
  transition: 300ms;
}

.menubtn:hover {
  cursor: pointer;
}

.transmenu {
  z-index: 1;
  right: 0;
  width: 40%;
  top: 51px;
  position: absolute;
  background-color: #fde8e1;
}




.fade-enter-from {
  right: -40%;
}

.fade-enter-to {
  right: 0;
}

.fade-leave-from {
  right: 0;
}

.fade-leave-to {
  right: -40%;
}

.fade-enter-active,
.fade-leave-active {
  transition: right 0.8s;
}



nav {
  ul {
    list-style: none;
    padding: 5px;

    span {
      color: black
    }

    li {
      margin: 5px;
      padding: 10px;
    }

    li:hover {
      cursor: pointer;
      filter: brightness(40%)
    }

    ul:hover {
      cursor: pointer;
    }
  }

  a:hover {
    transition: color 300ms;
  }

  a {
    transition: color 300ms;
  }

  background-color: #fde8e1;
  height: 50px;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: $darkgreen;
}

li {
  a {
    text-decoration: none;
  }

  a::after {
    content: '';
    width: 0px;
    height: 1px;
    display: block;
    background: black;
    transition: 400ms;
  }

  a:hover::after {
    width: 100%;
  }

  a:-webkit-any-link {
    color: black
  }
}

.links>* {
  font-size: 15px;
  padding: 10px;

  text-decoration: none;
  color: $darkgreen;
  text-transform: uppercase;


  &:hover {
    color: white;
  }
}

.logo {
  &>* {
    color: $darkgreen;
    text-decoration: none;

    &:hover {
      color: white;
    }
  }

  small {
    letter-spacing: 10px;
  }
}

.socials {
  display: flex;

  >a {
    color: $darkgreen;
    margin: 0 10px;
    font-size: 17px;
    max-width: 40px;

    img {
      width: 100%;
    }
  }
}

@media screen and (max-width:550px) {
  .menubtn {
    display: inline
  }

  .fullsc,
  .links {
    display: none
  }

  nav {
    justify-content: space-around
  }
}

;
</style>
