<template>
  <form class="search" @submit.prevent="handleSubmit(input)">
    <div class="search-input">
      <input
        id="search"
        class="input"
        v-model="input"
        type="text"
        placeholder="Shorten a link here..."
        required
      />
      <label
        class="txt-warning"
        :style="error ? 'display: block' : null"
        for="search"
      >
        {{ error }}
      </label>
    </div>

    <button class="btn btn-action">Shorten it!</button>
  </form>
</template>

<script>
import axios from "axios";
import { defineComponent, ref } from "vue";
export default defineComponent({
  emits: ["update-is-loading", "updateLinks"],
  setup(_props, context) {
    const input = ref("");
    const error = ref("");

    const handleSubmit = async (val) => {
      error.value = "";
      try {
        context.emit("update-is-loading", true);
        const shortUrl = await axios.get(
          `https://api.shrtco.de/v2/shorten?url=${val}`
        );
        if (shortUrl.data.ok) {
          context.emit("updateLinks", shortUrl);
          context.emit("update-is-loading", false);
          input.value = "";
        }
      } catch (err) {
        context.emit("update-is-loading", false);
        error.value = err.response.data.error;
      }
    };

    return { input, handleSubmit, error };
  },
});
</script>
b
<style scoped lang="scss">
.dupa {
  width: 100vw;
  height: 100vh;
  border: 0;
}
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
