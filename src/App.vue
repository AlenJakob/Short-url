<template>
    <Navigation v-if="!Mobile" />
    <div class="Burger-menu" v-if="Mobile">
      <img alt="Site logo" src="./assets/logo.svg" width="121" height="33" class="site-logo"/>
      <img class="burger-icon" src="./assets/hamburger-menu-icon.svg" alt="burger-icon"/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navigation from "./components/Navigation.vue";


export default defineComponent({
  name: "App",
  data: (): { Mobile: boolean; OpenNav: boolean; } => {
    return{
      Mobile: true,
      OpenNav: false
    }
  },
  methods:{
    MobileViev(): void{
      this.Mobile = window.innerWidth <= 990;
    }
  },
  components: {
    Navigation,
  },
  created(): void{
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
</style>
