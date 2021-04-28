<template>
  <div class="cards-wrapper">
    <StatisticsCard
      v-for="(card, index) in cards"
      v-bind:title="card.title"
      v-bind:message="card.message"
      v-bind:icon="card.icon"
      v-bind:class="card.class"
      v-bind:key="index"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import StatisticsCard from "./StatisticsCard";
export default defineComponent({
  name: "Statictics",
  components: {
    StatisticsCard,
  },
  data() {
    const cards = [
      {
        title: "Brand Recognition",
        message:
          "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
        icon: "icon-brand-recognition.svg",
      },
      {
        title: "Detailed Records",
        message:
          "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
        icon: "icon-detailed-records.svg",
        class: "second-card",
      },
      {
        title: "Fully Customizable",
        message:
          "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
        icon: "icon-fully-customizable.svg",
        class: "third-card",
      },
    ];
    return { cards };
  },
});
</script>

<style scoped lang="scss">
@import "./src/styles/_variables.scss";
.cards-wrapper {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
  z-index: 1;
  @media (max-width: $desktop) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 14px;
  }
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
  @media (max-width: $desktop) {
    margin: 80px 0px 80px 0px;
    &::before,
    &::after {
      position: absolute;
      content: "";
      left: 50%;
      width: 6px;
      height: 60px;
      z-index: -1;
      background: hsl(180, 66%, 49%);
    }
    &::before {
      top: 0;
      transform: translate(-50%, -150%);
    }
    &::after {
      top: 100%;
      transform: translateX(-50%);
    }
  }
}

.third-card {
  margin-top: 80px;
  @media (max-width: $desktop) {
    margin: 0;
  }
}
</style>
