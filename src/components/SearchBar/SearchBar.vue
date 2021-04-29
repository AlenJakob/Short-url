<template>
  <div class="section__search">
    <div class="search-bg"></div>
    <div class="main-bar">
      <Input :updateShortenList="updateShortenList" :links="links" />
      <Links :links="links" :btnStatus="btnStatus" />
      <h2>{{ copied }}</h2>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import { uuid, validateInput } from "./helpers";
import Input from "./Input.vue";
import Links from "./Links.vue";
export default defineComponent({
  components: {
    Input,
    Links,
  },
  setup() {
    const input = ref("");
    const copied = ref("");
    const links = ref([
      {
        id: uuid(),
        regularLink: "regular link 1",
        shorterLink: "shorter link 1",
        isActive: false,
      },
    ]);

    const btnStatus = (id: string) => {
      let copiedLinks = [...links.value];
      copiedLinks.find((listItem) => {
        listItem.id === id
          ? (listItem.isActive = true)
          : (listItem.isActive = false);
      });
    };

    const updateShortenList = (inputValue: string, shorten: string) => {
      links.value.push({
        id: uuid(),
        regularLink: validateInput(inputValue),
        shorterLink: shorten,
        isActive: false,
      });
    };
    return { input, copied, links, btnStatus, updateShortenList };
  },
});
</script>

<style scoped lang="scss">
.main-bar {
  width: 90%;
  max-width: 1000px;
}
.section__search {
  display: flex;
  justify-content: center;
}
.search-bg {
  position: absolute;
  top: 105px;
  min-width: 100%;
  min-height: 100vh;
  z-index: -1;
  background: hsl(230, 25%, 95%);
}

.btn-action {
  font-weight: bold;
}
</style>
