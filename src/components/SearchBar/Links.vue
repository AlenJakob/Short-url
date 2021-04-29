<template>
  <div class="links">
    <div class="link" v-for="link in props.links" :key="link.id">
      <Link :link="link" :btnStatus="props.btnStatus" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import Link from "./Link";

export default defineComponent({
  props: ["links", "btnStatus"],
  components: { Link },
  setup(props) {
    console.log(props);
    return { props };
  },
});
</script>

<style lang="scss" scoped>
.links {
  margin: 15px 0;
  font-size: 18px;
  display: flex;
  flex-direction: column;
}

.link {
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  margin-bottom: 15px;
  padding: 10px 20px;
  border-radius: 4px;
  color: hsl(180, 66%, 49%);
  & .btn {
    font-weight: bold;
  }
  & .regular {
    color: hsl(257, 27%, 26%) !important;
  }
}
</style>
