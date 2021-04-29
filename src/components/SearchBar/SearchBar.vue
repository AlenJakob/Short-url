<template>
  <div class="section__search">
    <div class="search-bg"></div>
    <div class="main-bar">
      <div class="search-bar">
        <!-- v-model on custom component  -->
        <Input :shorten="shorten" />
      </div>
      <div class="links">
        <div class="link" v-for="link in links" :key="link.id">
          <div class="regular">{{ link.regularLink }}</div>
          <div class="action">
            <div class="shorter">{{ link.shorterLink }}</div>
            <button
              @click="btnStatus(link.id, link.shorterLink)"
              class="btn btn-copy"
              :class="link.isActive ? 'isActive' : ''"
            >
              {{ link.isActive ? "Copied" : "Copy" }}
            </button>
          </div>
        </div>
      </div>
      <h2>{{ copied }}</h2>
    </div>
  </div>
</template>

<script>
import { ref, defineComponent, reactive, onMounted, watchEffect } from "vue";
import { uuid, validateInput, parseLink } from "./helpers.js";
import Input from "./Input";
export default defineComponent({
  components: {
    Input,
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
    watchEffect(() => {});
    return { input, copied, links, btnStatus, shorten };
  },
});
</script>

<style scoped lang="scss">
.isActive {
  background: hsl(257, 27%, 26%) !important;
}
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
.links {
  margin: 15px 0;
  font-size: 18px;
  display: flex;
  flex-direction: column;

  & .action {
    display: flex;
    align-items: center;
    & .shorter {
      margin-right: 10px;
    }
    & .btn-copy {
      padding: 10px 20px;
    }
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
}
.btn,
.input {
  cursor: pointer;
  border-radius: 8px;
  margin: 0 8px;
}
.btn {
  background: hsl(180, 66%, 49%);
  color: #fff;
  border: none;
  &:hover {
    background: #9be3e2;
  }
}
</style>
