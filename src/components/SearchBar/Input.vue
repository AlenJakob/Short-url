<template>
  <div class="bar">
    <form class="search">
      <input
        class="input"
        v-model="data.input"
        type="text"
        placeholder="Shorten a link here..."
      />

      <button @click.prevent="shorten(data.input)" class="btn btn-action">
        Shorten it!
      </button>
    </form>
    <label class="txt-warning" for="search">
      <i>Please add a link</i>
    </label>
  </div>
</template>

<script>
import { defineComponent, reactive } from "vue";
export default defineComponent({
  props: { shorten: Function },
  setup() {
    const data = reactive({
      input: "",
    });

    return { data };
  },
});
</script>
b
<style scoped lang="scss">
@import "./src/styles/_variables.scss";
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
}
.search {
  margin-top: 12.5px;
  display: flex; // Responsive
  @media (max-width: $desktop) {
    flex-direction: column;
  }
  & .input {
    @media (max-width: $desktop) {
      margin-bottom: 20px;
    }
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
    @media (max-width: $desktop) {
      padding: 15px 0;
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
