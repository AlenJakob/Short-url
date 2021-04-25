<template>
  <div class="cards-wrapper">
    <StatisticsCard
      title="Brand Recognition"
      message="Boost your brand recognition with each click. Generic links don’t 
    mean a thing. Branded links help instil confidence in your content."
      icon="icon-brand-recognition.svg"
    />
    <StatisticsCard
      title="Detailed Records"
      message="Gain insights into who is clicking your links. Knowing when and where 
  people engage with your content helps inform better decisions."
      icon="icon-detailed-records.svg"
      class="second-card"
    />
    <StatisticsCard
      title="Fully Customizable"
      message="Improve brand awareness and content discoverability through customizable 
  links, supercharging audience engagement."
      icon="icon-fully-customizable.svg"
      class="third-card"
    />
  </div>
</template>

<script>
import Vue from "vue";
import StatisticsCard from "./StatisticsCard.vue";
export default Vue.extend({
  name: "Statictics",
  components: {
    StatisticsCard: StatisticsCard,
  },
});
</script>

<style scoped lang="scss">
.cards-wrapper {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
  z-index: 1;
}

.second-card {
  margin: 40px 20px 0 20px;
  position: relative;
  &::before,
  &::after {
    position: absolute;
    content: "";
    top: 40%;
    width: 100px;
    height: 6px;
    z-index: -1;
    background: hsl(180, 66%, 49%);
  }
  &::before {
    left: 0;
    transform: translateX(-100%);
  }
  &::after {
    right: 0;
    transform: translateX(100%);
  }
}

.third-card {
  margin-top: 80px;
}
</style>
