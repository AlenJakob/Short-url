<template>
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
          {{ link.isActive ? "Copied !" : "Copy" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  props: { links: Array },
  setup(props) {
    const btnStatus = (id) => {
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

<style lang="scss">
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
      text-align: left;
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
.btn-action {
  font-weight: bold;
}
.isActive {
  background: hsl(257, 27%, 26%) !important;
}
</style>
