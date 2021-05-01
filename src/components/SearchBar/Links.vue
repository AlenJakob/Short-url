<template>
  <div class="links">
    <div class="link" v-for="link in links" :key="link.id">
      <div class="regular-btn">
        {{
          link.regularLink.length > 56
            ? link.regularLink.substr(0, 52) + '...'
            : link.regularLink
        }}
      </div>
      <div class="action">
        <div class="shorter">{{ link.shorterLink }}</div>
        <button
          @click="btnStatus(link.id, link.shorterLink)"
          class="btn btn-copy"
          :class="link.isActive ? 'isActive' : ''"
        >
          {{ link.isActive ? "Copied !" : "Copy" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { copyUrl } from "./helpers.js";
import { defineComponent } from "vue";
export default defineComponent({
  props: { links: Array },
  setup(props) {
    const btnStatus = (id, shorterLink) => {
      copyUrl();
      let copiedLinks = [...props.links];
      copiedLinks.find((listItem) => {
        listItem.id === id
          ? (listItem.isActive = true)
          : (listItem.isActive = false);
      });
    };

    return { btnStatus };
  },
});
</script>

<style scoped lang="scss">
.links {
  margin: 15px 0;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  & .action {
    display: flex;
    align-items: center;
    @media (max-width: $desktop) {
      flex-direction: column;
      align-items: stretch;
      text-align: left;
    }
    & .shorter {
      margin-right: 10px;
    }
    & .btn-copy {
      padding: 10px 20px;
    }
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
    padding: 10px 20px;
    border-radius: 6px;
    color: hsl(180, 66%, 49%);
    @media (max-width: $desktop) {
      flex-direction: column;
      align-items: stretch;
      & .btn,
      .input {
        margin: 12px 0;
      }
      & .btn-copy {
        padding: 15px 20px;
      }
      & .regular-btn {
        margin: 12px 0;
        padding-bottom: 15px;
        position: relative;
        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: -20px;
          width: calc(100% + 80px);
          height: 1px;
          background: #eff0f5;
        }
      }
    }

    & .btn {
      font-weight: bold;
    }
    & .regular-btn {
      margin-right: 40px;
      white-space: nowrap;
      max-width: 600px;
      text-align: left;
      color: hsl(257, 27%, 26%) !important;
    }
  }
}

.btn {
  cursor: pointer;
  border-radius: 6px;
  margin: 0 8px;
  background: hsl(180, 66%, 49%);
  color: #fff;
  border: none;
  &:hover {
    background: #9be3e2;
  }
}

.isActive {
  background: hsl(257, 27%, 26%) !important;
}
</style>
