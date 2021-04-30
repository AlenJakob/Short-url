<template>
  <div class="link">
    <div class="regular">{{ props.link.regularLink }}</div>
    <div class="action">
      <div class="shorter">
        {{ props.link.shorterLink }}
      </div>
      <button
        @click="btnStatus(props.link.id, props.link.shorterLink)"
        class="btn btn-copy"
        :class="props.link.isActive ? 'isActive' : ''"
      >
        {{ props.link.isActive ? "Copied" : "Copy" }}
      </button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  props: ["link", "btnStatus"],
  setup(props) {
    return { props };
  },
});
</script>

<style lang="scss" scoped>
.action {
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

.btn {
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

.isActive {
  background: hsl(257, 27%, 26%) !important;
}
</style>
