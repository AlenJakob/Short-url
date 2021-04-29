<template>
  <div id="app">
    <SearchBar />
    <Statistics />
    <Footer />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import SearchBar from "./components/SearchBar/SearchBar.vue";
import Statistics from "./components/statistics/Statistics.vue";
import Footer from "./components/footer/Footer";

export default defineComponent({
  components: {
    SearchBar,
    Statistics,
    Footer,
  },
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap");
@import "./src/styles/_variables.scss";
#app {
  margin: 0 auto;
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 18px;
  text-align: center;
  color: hsl(257, 27%, 26%);
  margin-top: 60px;
  max-width: 1440px;
  font-family: "Poppins", sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

body {
  margin: 0;
  padding: 0;
}
</style>
