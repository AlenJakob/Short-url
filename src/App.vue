<template>
    <Navigation v-if="!Mobile" />
      <div class="Burger-menu" v-if="Mobile">
        <img alt="Site logo" src="./assets/logo.svg" width="121" height="33" class="site-logo"/>
        <img class="burger-icon" src="./assets/hamburger-menu-icon.svg" alt="burger-icon" @click="OpenNav = !OpenNav"/>
      </div>
    <div class="content" :class="{'open':OpenNav}">
       <Navigation />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navigation from "./components/Navigation.vue";
//import MobileNav from "./components/MobileNav.vue";


export default defineComponent({
  name: "App",
  data: (): { Mobile: boolean; OpenNav: boolean; } => {
    return{
      Mobile: true,
      OpenNav: true
    }
  },
  methods:{
    MobileViev(): void{
//      console.log(window.innerWidth);
      this.Mobile = window.innerWidth <= 920;
    }
  },
  components: {
   // MobileNav,
    Navigation,
  },
  created(): void{
    window.addEventListener("resize", this.MobileViev);
    this.MobileViev();
    window.onresize = function(){location.reload();}
  }
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap");

body {
  margin: 0;
}
#app {
  width: 100%;
  background: #ffff;
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 18px;
  text-align: center;
  color: hsl(257, 27%, 26%);
  width: 100%;
}

.main {
  display: block;
}

body {
  margin: 0;
  padding: 0;
  width: 100%;
  .burger-icon {
    height: 48px;
    width: 48px;
    position: absolute;
    right: 15px;
    top: 5px;
    cursor: pointer;
  }
  .site-logo {
    margin-top: 15px;
    margin-left: 15px;
  }
}
@media only screen and (max-width: 920px) {
  .site-logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    margin-top: 15px;
    margin-left: 15px;
  }
}
.open {
  display: none;
}
.btn {
  cursor: pointer;
  border-radius: 6px;
  margin: 0 8px;
  background: hsl(180, 66%, 49%);
  color: #fff;
  border: none;
  &:hover {
    background: #9be3e2;
  }
}
</style>





