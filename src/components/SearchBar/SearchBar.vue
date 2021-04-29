<template>
  <div class="section__search">
    <div class="search-bg"></div>
    <div class="main-bar">
      <div class="search-bar">
        <Input :shorten="shorten" />
      </div>
      <Links :links="links" :btnStatus="btnStatus" />
      <h2>{{ copied }}</h2>
    </div>
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";
import { uuid, validateInput, parseLink } from "./helpers.ts";
import Input from "./Input";
import Links from "./Links";
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
      {
        id: uuid(),
        regularLink: "regular link 2",
        shorterLink: "shorter link 2",
        isActive: false,
      },
      {
        id: uuid(),
        regularLink: "regular link 3",
        shorterLink: "shorter link 3",
        isActive: false,
      },
    ]);

    const btnStatus = (id, copied) => {
      console.log("btnstatus");
      let copiedLinks = [...links.value];
      copiedLinks.find((listItem) => {
        listItem.id === id
          ? (listItem.isActive = true)
          : (listItem.isActive = false);
      });
    };

    const shorten = (inputValue) => {
      links.value.push({
        id: uuid(),
        regularLink: validateInput(inputValue),
        shorterLink: parseLink(inputValue),
        isActive: false,
      });
    };
    return { input, copied, links, btnStatus, shorten };
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
.search-bar {
  display: flex;
  border-radius: 8px;
  padding: 1.5em 2em;
  position: relative;
  background: url("../../assets/images/bg-shorten-desktop.svg") no-repeat center;
  background-size: cover;
  color: hsl(257, 27%, 26%);
  & ::before {
    border-radius: 8px;
    content: "";
    display: flex;
    left: 0px;
    bottom: 0;
    background: hsl(257, 27%, 26%);
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
}

.btn-action {
  font-weight: bold;
}
</style>
