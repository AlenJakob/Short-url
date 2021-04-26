<template>
  <div class="section__search">
    <div class="search-bg"></div>
    <div class="main-bar">
      <div class="search-bar">
        <div class="bar">
          <form class="search">
            <input
              v-model="input"
              class="input"
              type="text"
              placeholder="Shorten a link here..."
            />
            <button @click.prevent="shorten()" class="btn btn-action">
              Shorten it!
            </button>
          </form>
          <label class="txt-warning" for="search">
            <i>Please add a link</i>
          </label>
        </div>
      </div>
      <div class="links">
        <div class="link" v-for="link in links" :key="link.id">
          <div class="regular">{{ link.regular }}</div>
          <div class="action">
            <div class="shorter">{{ link.shorter }}</div>
            <button
              @click="btnStatus(link.id, link.shorter)"
              class="btn btn-copy"
              :class="link.isActive ? 'isActive' : ''"
            >
              {{ link.isActive ? "Copied" : "Copy" }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: "",
      copied: "",
      links: [
        {
          id: 1,
          regular: "regular link 1",
          shorter: "shorter link 1",
          isActive: false,
        },
        {
          id: 2,
          regular: "regular link 2",
          shorter: "shorter link 2",
          isActive: false,
        },
        {
          id: 3,
          regular: "regular link 3",
          shorter: "shorter link 3",
          isActive: false,
        },
      ],
    };
  },
  methods: {
    btnStatus(id, copied) {
      // this.copied = copied;
      // this.links.forEach((link) => {
      //   console.log(link);
      //   link.isActive = false;
      //   link.id === status ? (link.isActive = !link.isActive) : false;

      // });
      let copiedLinks = [...this.links];
      copiedLinks.map((link) => {
        link.isActive = false;
        return {
          ...link,
          isActive:
            link.id === id ? (link.isActive = true) : (link.isActive = false),
        };
      });
    },
    shorten() {
      this.links.push({
        id: 4,
        regular: this.input,
        shorter: "some shorten link",
        isActive: false,
      });
      console.log("link is shorted");
    },
  },
};
</script>

<style lang="scss">
.isActive {
  background: hsl(257, 27%, 26%) !important;
}
.main-bar {
  width: 768px;
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
  & .bar {
    width: 100%;
    display: flex;
    align-self: center;
    flex-direction: column;
    & .search {
      margin-top: 12.5px;
      display: flex;
      & .input {
        color: hsl(255, 11%, 22%);
        font-size: 18px;
        text-indent: 20px;
        padding: 15px 0;
        flex-grow: 5;
        border: 2px solid transparent;
        &:hover {
          border: 2px solid #de6979;
        }
        &::placeholder {
          color: hsla(0, 87%, 67%, 0.384);
        }
      }
      & .btn-action {
        font-size: 18px;
        flex-grow: 1;
      }
    }
  }
  & .txt-warning {
    margin-top: 5px;
    padding-left: 2px;
    align-self: flex-start;
    font-size: 12px;
    color: #be617a;
  }
}
.btn,
.input {
  cursor: pointer;
  border-radius: 8px;
  margin: 0 8px;
}
.btn-action {
  font-weight: bold;
}
.txt-warning {
  margin-left: 5px;
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
.btn {
  background: hsl(180, 66%, 49%);
  color: #fff;
  border: none;
  &:hover {
    background: #9be3e2;
  }
}
</style>