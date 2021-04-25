<template>
  <div>
    <SearchBar />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SearchBar from "./components/SearchBar/SearchBar.vue";

export default defineComponent({
  components: {
    SearchBar,
  },
});
</script>

<style lang="scss">
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
}
</style>
