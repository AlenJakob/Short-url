<template>
  <div class="links">
    <Link
      :link="link"
      :btnStatus="props.btnStatus"
      v-for="link in props.links"
      :key="link.id"
    />
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import Link from "./Link";

export default defineComponent({
  props: ["links", "btnStatus"],
  components: { Link },
  setup(props) {
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
</style>
