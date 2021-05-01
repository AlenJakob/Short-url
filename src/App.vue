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
.burger-icon{
  height: 48px;
  width: 48px;
  position: absolute;
  right: 15px;
  top: 25px;
  cursor: pointer ;
}
.site-logo{
  margin-top: 15px;
  margin-left: 15px;
}
#app {
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;900&display=swap');
  font-family: Poppins, sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: hsl(0, 0%, 75%);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
  text-align: left;
}
.open{
      display: none;
  }
</style>
