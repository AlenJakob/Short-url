<template>
  <div class="card">
    <div class="icon-wrapper">
      <img
        :src="require(`@/assets/${icon}`)"
        :alt="iconAltText"
        width="30"
        height="30"
      />
    </div>
    <h4 class="title">{{ title }}</h4>
    <p class="paragraph">{{ message }}</p>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  // name: "StatisticsCard",
  props: {
    title: String,
    message: String,
    icon: String,
  },
  data(props) {
    const iconAltText = props.icon.substring(0, props.icon.indexOf("."));
    return { iconAltText };
  },
});
</script>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 300px;
  height: 240px;
  background: #fff;
  position: relative;
}

.title {
  padding: 60px 0 0 20px;
  margin: 0;
  font-size: 20px;
}

.paragraph {
  width: 100%;
  color: hsl(257, 7%, 63%);
  margin: 0;
  font-size: 14px;
  box-sizing: border-box;
  padding: 20px 20px 40px 20px;
  text-align: left;
}

.icon-wrapper {
  position: absolute;
  background: hsl(257, 27%, 26%);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  top: 0;
  transform: translateY(-50%);
  left: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
