<template>
  <Hero />
  <SearchBar />
  <Statistics />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Hero from "./components/hero/Hero.vue";
import SearchBar from "./components/SearchBar/SearchBar.vue";
import Statistics from "./components/statistics/Statistics.vue";

export default defineComponent({
  components: { Hero, SearchBar, Statistics },
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap");
@import "./src/styles/_variables.scss";
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

  font-family: "Poppins", sans-serif;
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
