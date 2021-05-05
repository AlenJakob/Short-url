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
        <Input
          @updateLinks="updateLinks"
          @update-is-loading="updateIsLoading"
        />
      </div>
      <Links :links="links" />
    </div>
  </div>
</template>

<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import { ref, defineComponent, onMounted } from "vue";
import Input from "./Input";
import Links from "./Links";
export default defineComponent({
  components: {
    Input,
    Links,
    Loading,
  },
  setup() {
    const links = ref([]);
    const isLoading = ref(false);

    onMounted(() => {
      if (localStorage.getItem("links")) {
        links.value = JSON.parse(localStorage.getItem("links"));
      }
    });

    const updateIsLoading = (value) => {
      isLoading.value = value;
    };

    const updateLinks = async (response) => {
      console.log(response.value);
      const { code, share_link, original_link } = response;
      links.value.unshift({
        id: code,
        regularLink: original_link,
        shorterLink: share_link,
        isActive: false,
      });
      if (links.value.length > 5) {
        links.value.pop();
      }
      localStorage.setItem("links", JSON.stringify(links.value));
    };

    return { links, updateLinks, updateIsLoading, isLoading };
  },
});
</script>

<style scoped lang="scss">
.search-container {
  margin-top: -4em;
  position: relative;
  display: flex;
  justify-content: center;
}
.main-bar {
  width: 90%;
  max-width: 1000px;
}
.search-bg {
  position: absolute;
  bottom: 0;
  min-width: 100%;
  min-height: 500px;
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
    background-size: cover;
  }
}
</style>
