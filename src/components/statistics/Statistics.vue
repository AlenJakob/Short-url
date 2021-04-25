<template>
  <div class="wrapper">
    <header class="header">
      <h3 class="title">Advanced Statistics</h3>
      <p class="paragraph">
        Track how your links are performing across the web with our advanced statistics dashboard.
      </p>
    </header>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "Statictics",
});
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.title {
  font-size: 30px;
}

.paragraph {
  color: hsl(257, 7%, 63%);
  width: 60%;
  margin: 0 auto;
}
</style>
