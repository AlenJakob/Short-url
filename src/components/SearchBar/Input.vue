<template>
  <form class="search" @submit.prevent="shorten(data.input)">
    <div class="search-input">
      <input
        id="search"
        class="input"
        v-model="data.input"
        type="text"
        placeholder="Shorten a link here..."
        required
      />
      <label
        class="txt-warning"
        :style="error ? data.errorStyle : null"
        for="search"
      >
        {{ error }}
      </label>
    </div>

    <button class="btn btn-action">Shorten it!</button>
  </form>
</template>

<script>
import { defineComponent, reactive } from "vue";
export default defineComponent({
  props: { shorten: Function, error: String },
  setup() {
    const data = reactive({
      input: "",
      errorStyle: { display: "block" },
    });

    return { data };
  },
});
</script>
b
<style scoped lang="scss">
.input {
  width: 97%;
  cursor: pointer;
  border-radius: 6px;
}
.search-input {
  flex-grow: 5;
  position: relative;
}
.txt-warning {
  display: none;
  font-style: italic;
  position: absolute;
  left: 0;
  bottom: -28px;
  padding-left: 2px;
  align-self: flex-start;
  font-size: 14px;
  color: #be617a;
}
@media (max-width: $desktop) {
  .search {
    flex-direction: column;
  }
  .txt-warning {
    top: 60px;
    left: 0px;
  }
  .input {
    width: 100%;
  }
  .btn {
    margin: 25px 0 0 0 !important;
  }
}
.search {
  display: flex;
  & .input {
    text-overflow: ellipsis;
    text-indent: 20px;
    color: hsl(255, 11%, 22%);
    font-size: 18px;
    text-indent: 20px;
    padding: 15px 0;
    border: 2px solid transparent;
    &:hover {
      border: 2px solid #de6979;
    }
    &::placeholder {
      color: hsla(0, 87%, 67%, 0.384);
    }
    @media (max-width: $desktop) {
      margin-bottom: 25px;
    }
  }
  & .btn-action {
    font-size: 18px;
    flex-grow: 1;
    @media (max-width: $desktop) {
      padding: 15px 0;
      margin-top: 15px;
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
  @media (max-width: $desktop) {
  }
  &:hover {
    background: #9be3e2;
  }
}
.btn-action {
  font-weight: bold;
}
</style>
