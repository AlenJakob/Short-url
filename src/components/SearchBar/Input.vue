<template>
  <div class="bar">
    <form class="search">
      <input
        class="input"
        v-model="input"
        ref="input.value"
        :input="input"
        type="text"
        placeholder="Shorten a link here..."
      />
      <button @click.prevent="handleClick()" class="btn btn-action">Shorten it!</button>
    </form>
    <label class="txt-warning" for="search">
      <i>Please add a link</i>
    </label>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  // How to Emit fucntion
  setup(props, { emit }) {
    const input = ref("");
    const handleClick = (e) => {
      console.log("from Input Component -", input.value);
      // $emit(e.target);
    };
    onMounted(() => {
      // twoj kod mounted
      console.log("hello", emit);
    });
    return { handleClick, input };
  },
};
</script>

<style scoped lang="scss">
.bar {
  width: 100%;
  display: flex;
  align-self: center;
  flex-direction: column;
  & .txt-warning {
    margin-top: 5px;
    padding-left: 2px;
    align-self: flex-start;
    font-size: 12px;
    color: #be617a;
  }
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
.btn,
.input {
  cursor: pointer;
  border-radius: 8px;
  margin: 0 8px;
}
.txt-warning {
  margin-left: 5px;
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
