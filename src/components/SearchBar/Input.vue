<template>
  <div class="search-bar">
    <div class="bar">
      <form class="search">
        <input
          class="input"
          v-model="input"
          type="text"
          placeholder="Shorten a link here..."
        />
        <button @click.prevent="handleClick" class="btn btn-action">
          Shorten it!
        </button>
      </form>
      <label class="txt-warning" for="search">
        <i>Please add a link</i>
      </label>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from "vue";
export default defineComponent({
  props: ["updateShortenList", "links"],

  setup(props): { handleClick: () => void; input: Ref<string> } {
    const input = ref("");
    const handleClick = () => {
      fetch(`https://api.shrtco.de/v2/shorten?url=${input.value}`)
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          console.log(res.result.short_link2);
          props.updateShortenList(input.value, res.result.short_link2);
        });
    };

    return { handleClick, input };
  },
});
</script>

<style scoped lang="scss">
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
