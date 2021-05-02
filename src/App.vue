<template>
  <div>
    <Navigation v-if="!Mobile" />
    <div class="Burger-menu" v-if="Mobile">
      <img
        alt="Site logo"
        src="./assets/logo.svg"
        width="121"
        height="33"
        class="site-logo"
      />
      <img
        class="burger-icon"
        src="./assets/hamburger-menu-icon.svg"
        alt="burger-icon"
        @click="OpenNav = !OpenNav"
      />
    </div>
    <div class="content" :class="{ open: OpenNav }">
      <Navigation />
    </div>
  </div>
  <div class="main">
    <SearchBar />
    <Statistics />
    <Boost />
  </div>
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navigation from "./components/Navigation.vue";
import SearchBar from "./components/SearchBar/SearchBar.vue";
import Statistics from "./components/statistics/Statistics.vue";
import Boost from "./components/boost/Boost.vue";
import Footer from "./components/footer/Footer.vue";

export default defineComponent({
  components: {
    Navigation,
    SearchBar,
    Statistics,
    Boost,
    Footer,
  },

  data: (): { Mobile: boolean; OpenNav: boolean } => {
    return {
      Mobile: true,
      OpenNav: true,
    };
  },
  methods: {
    MobileViev(): void {
      //      console.log(window.innerWidth);
      this.Mobile = window.innerWidth <= 920;
    },
  },

  created(): void {
    window.addEventListener("resize", this.MobileViev);
    this.MobileViev();
    window.onresize = function () {
      location.reload();
    };
  },
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap");

body {
  margin: 0;
}
#app {
  // margin: 0  auto;
  width: 100%;
  background: #eff0f5;
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 18px;
  text-align: center;
  color: hsl(257, 27%, 26%);
  width: 100%;
}

.main {
  max-width: 1440px;
  margin: 0 auto;
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
    top: 25px;
    cursor: pointer;
  }
  .site-logo {
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
