<script></script>
<template>
  <a href="/hom/modHTML/index.html" style="color: aliceblue;">Back</a>
  <nav>
    <div class="links">
      <router-link to="/work">Work</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
    <div class="logo">
      <router-link to="/home"><small>shevchenko mariia</small></router-link>
    </div>
    <div class="socials fullsc">
      <a href="#"><font-awesome-icon icon="fa-brands fa-pinterest" /></a>
      <a href="#"><font-awesome-icon icon="fa-brands fa-instagram" /></a>
      <a href="#"><font-awesome-icon icon="fa-brands fa-linkedin" /></a>
    </div>
    <div :class="('menubtn ' + rotate_cl)" @click="(polmenu = !polmenu);" id=menubtn></div>
    <transition name=fade class=transmenu>
      <div v-if='((polmenu == true) && (winwidth < 550))'>
        <ul>
          <li>
            <router-link to="/work">Work</router-link>
          </li>
          <li>
            <router-link to="/contact">Contact</router-link>
          </li>
          <div class="socials">
            <a href="#"><font-awesome-icon icon="fa-brands fa-pinterest" /></a>
            <a href="#"><font-awesome-icon icon="fa-brands fa-instagram" /></a>
            <a href="#"><font-awesome-icon icon="fa-brands fa-linkedin" /></a>
          </div>
        </ul>
      </div>
    </transition>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      winwidth: 0,
      polmenu: false,
    }
  },
  created() {
  window.addEventListener("resize", this.myEventHandler);
  },
  destroyed() {
  window.removeEventListener("resize", this.myEventHandler);
  },
  computed:{
    rotate_cl(){
      if (this.polmenu == false) {
        return ''
      }
      else {
        return 'rotate'
      }
    },
    mobmenu_class(){
      if (this.polmenu == false) {
        return unshow
      }
    }
  },
  methods: {
    myEventHandler(e) {
      this.winwidth = e.target.innerWidth
      if (this.winwidth > 550) {
        this.polmenu = false
      }
    },
  }
}

</script>

<style lang="scss">
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

.socials>a {
  color: $darkgreen;
  margin: 0 10px;
  font-size: 17px;
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
