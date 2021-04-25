<template>
  <div id="app">
    <Statistics />
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import Statistics from "./components/statistics/Statistics.vue";

export default defineComponent({
  name: "App",
  components: {
    Statistics,
  },
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #ecedf4;
  font-family: "Poppins", sans-serif;
}
</style>
