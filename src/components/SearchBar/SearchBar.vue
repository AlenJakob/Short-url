<template>
  <div class="search-container">
    <loading
      v-model:active="isLoading"
      :can-cancel="false"
      :opacity="0.5"
      color="hsl(257, 27%, 26%)"
      :lock-scroll="true"
    />
    <div class="search-bg"></div>
    <div class="main-bar">
      <div class="search-bar">
        <Input :shorten="shorten" :errHandle="errHandle" />
      </div>
      <Links :links="links" />
    </div>
  </div>
</template>

<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import axios from "axios";
import { ref, defineComponent, onMounted, reactive } from "vue";
import Input from "./Input";
import Links from "./Links";
export default defineComponent({
  components: {
    Input,
    Links,
    Loading,
  },
  setup() {
    let errHandle = ref(false);
    const input = ref("");
    const isLoading = ref(false);
    const links = ref([
      {
        id: 1,
        regularLink: "regular link 1",
        shorterLink: "shorter link 1",
        isActive: false,
      },
      {
        id: 2,
        regularLink: "regular link 2",
        shorterLink: "shorter link 2",
        isActive: false,
      },
      {
        id: 3,
        regularLink: "regular link 3",
        shorterLink: "shorter link 3",
        isActive: false,
      },
    ]);
    const shorten = async (val, err) => {
      console.log(errHandle);
      if (val.length > 5) {
        errHandle.value = false;
        try {
          isLoading.value = true;
          const shortUrl = await axios.get(
            `https://api.shrtco.de/v2/shorten?url=${val}`
          );
          if (shortUrl.data.ok) {
            const { code, share_link, original_link } = shortUrl.data.result;
            links.value.unshift({
              id: code,
              regularLink: original_link,
              shorterLink: share_link,
              isActive: false,
            });
            isLoading.value = false;
          }
        } catch (err) {
          isLoading.value = false;
        }
      } else {
        errHandle.value = true;
        console.log("the url is to short");
        return;
      }
    };

    return { input, links, shorten, axios, isLoading, errHandle };
  },
});
</script>

<style scoped lang="scss">
.main-bar {
  width: 90%;
  max-width: 1000px;
}
.search-container {
  margin-top: 65px;
  display: flex;
  justify-content: center;
}
.search-bg {
  position: absolute;
  top: 155px;
  min-width: 100%;
  min-height: 100vh;
  z-index: -1;
  background: hsl(230, 25%, 95%);
}
.search-bar {
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  padding: 2.5em;
  position: relative;
  background: url("../../assets/images/bg-shorten-desktop.svg") no-repeat center;
  background-size: cover;
  color: hsl(257, 27%, 26%);
  // Responsive

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

@media (max-width: $desktop) {
  .search-bar {
    background: url("../../assets/images/bg-shorten-mobile.svg") no-repeat right
      top;
  }
}
</style>
