<template>
  <div class="links">
    <div class="link" v-for="link in links" :key="link.id">
      <Link :link="link" @change-button-status="btnStatus" />
    </div>
  </div>
</template>

<script lang="ts">
import { copyUrl } from "./helpers";
import { defineComponent, PropType } from "vue";
import Link from "./Link.vue";
import { LinkType } from "../../types/Link";
export default defineComponent({
  props: {
    links: { type: Array as PropType<LinkType[] | []>, required: true },
  },
  components: { Link },
  setup(props) {
    const btnStatus = (id: string, shorterLink: string) => {
      console.log(id, shorterLink);
      copyUrl(shorterLink);
      let copiedLinks = [...props.links];
      copiedLinks.find((listItem) => {
        listItem.id === id
          ? (listItem.isActive = true)
          : (listItem.isActive = false);
      });
    };

    return { btnStatus, Link };
  },
});
</script>

<style scoped lang="scss">
.links {
  margin: 15px 0;
  font-size: 18px;
  display: flex;
  flex-direction: column;
}

.link {
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  margin-bottom: 15px;
  padding: 0 20px;
  border-radius: 6px;
  color: hsl(180, 66%, 49%);
  @media (max-width: $desktop) {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>
