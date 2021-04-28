<template>
    <Navigation v-if="!Mobile" />
      <div class="Burger-menu" v-if="Mobile">
        <img alt="Site logo" src="./assets/logo.svg" width="121" height="33" class="site-logo"/>
        <img class="burger-icon" src="./assets/hamburger-menu-icon.svg" alt="burger-icon" @click="OpenNav = !OpenNav"/>
      </div>
    <div class="content" :class="{'open':OpenNav}">
       <MobileNav />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navigation from "./components/Navigation.vue";
import MobileNav from "./components/MobileNav.vue";


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
      this.Mobile = window.innerWidth <= 910;
    }
  },
  components: {
    MobileNav,
    Navigation,
  },
  created(): void{
    window.addEventListener("resize", this.MobileViev);
    this.MobileViev();
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.open{
      display: none;
  }
</style>
