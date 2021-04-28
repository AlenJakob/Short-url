<template>
  <div id="app">
    <SearchBar />
    <Statistics />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SearchBar from "./components/SearchBar/SearchBar.vue";
import Statistics from "./components/statistics/Statistics.vue";

export default defineComponent({
  components: {
    SearchBar,
    Statistics,
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
}
</style>
