<template>
  <div class="wrapper">
    <header class="header">
      <h3 class="title">Advanced Statistics</h3>
      <p class="paragraph">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
    </header>
    <StatisticsCards />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import StatisticsCards from "./StatisticsCards";
export default defineComponent({
  components: {
    StatisticsCards,
  },
});
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 100px;
  max-width: 1000px;
}

.header {
  margin-bottom: 100px;
  @media (max-width: $desktop) {
    margin-bottom: 80px;
  }
}

.title {
  font-size: 30px;
}

.paragraph {
  color: hsl(257, 7%, 63%);
  width: 60%;
  margin: 0 auto;
  @media (max-width: $desktop) {
    width: 90%;
  }
}
</style>
