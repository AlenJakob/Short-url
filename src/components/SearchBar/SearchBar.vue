<template>
  <div class="search">
    <div class="search-bg"></div>
    <div class="main-bar">
      <div class="search-bar">
        <Input :shorten="shorten" />
      </div>
      <Links :links="links" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref, defineComponent, onMounted } from "vue";
import { copyUrl } from "./helpers.ts";
import Input from "./Input";
import Links from "./Links";
export default defineComponent({
  components: {
    Input,
    Links,
  },
  setup() {
     const uuid = () => {
      return Math.random().toString(16).slice(2);
    };
    const input = ref("");
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
    const shorten = async (val) => {
      if (val.length > 5) {
        try {
          const shortUrl = await axios.post(
            `https://api.shrtco.de/v2/shorten?url=${val}`
          );

          console.log(shortUrl);
          if (shortUrl.data.ok) {
            const { code, share_link, original_link } = shortUrl.data.result;
            links.value.unshift({
              id: code,
              regularLink: original_link,
              shorterLink: share_link,
              isActive: false,
            });
          }
        } catch (err) {
          console.log(err);
        }
      } else {
        console.log("the url is to short");
        return;
      }
    };
   
    return { input, links, shorten, axios, uuid };
  },
});
</script>

<style scoped lang="scss">
@import "./src/styles/_variables.scss";
.main-bar {
  width: 90%;
  max-width: 1000px;
}
.search {
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

  flex-direction: column;
  border-radius: 8px;
  padding: 1.5em 2em;
  position: relative;
  background: url("../../assets/images/bg-shorten-desktop.svg") no-repeat center;
  background-size: cover;
  color: hsl(257, 27%, 26%);
  // Responsive
  @media (max-width: $desktop) {
    flex-direction: row;
  }
  & ::before {
    border-radius: 10px;
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
</style>
