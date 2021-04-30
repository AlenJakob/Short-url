<template>
  <loading
    v-model:active="isLoading"
    :can-cancel="false"
    :opacity="0.5"
    color="hsl(257, 27%, 26%)"
    :lock-scroll="true"
  />
  <div class="search-bar">
    <div class="bar">
      <form class="search" @submit.prevent="handleSubmit">
        <div class="input-wrapper">
          <input
            class="input"
            v-model="input"
            type="text"
            placeholder="Shorten a link here..."
            required
          />
          <span v-if="error" class="txt-warning" for="search">
            {{ error }}
          </span>
        </div>
        <button class="btn btn-action" type="submit">Shorten it!</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from "vue";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
export default defineComponent({
  props: ["updateShortenList", "links"],
  components: { Loading },
  setup(
    props
  ): {
    handleSubmit: () => void;
    input: Ref<string>;
    isLoading: Ref<boolean>;
    error: Ref<string>;
  } {
    const input = ref("");
    const isLoading = ref(false);
    const error = ref("");

    const handleSubmit = () => {
      isLoading.value = true;
      fetch(`https://api.shrtco.de/v2/shorten?url=${input.value}`)
        .then((res) => res.json())
        .then((res) => {
          if (res.error) {
            error.value = res.error;
            isLoading.value = false;
            return;
          }
          props.updateShortenList(input.value, res.result.short_link2);
          isLoading.value = false;
        })
        .catch((err) => {
          isLoading.value = false;
          console.log(err);
          error.value = err;
        });
    };

    return { handleSubmit, input, isLoading, error };
  },
});
</script>

<style scoped lang="scss">
@import "./src/styles/_variables.scss";
.search-bar {
  display: flex;
  border-radius: 8px;
  padding: 1.5em 1em;
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

  & .search {
    /* margin-top: 12.5px; */
    padding: 10px;
    display: flex;
    @media (max-width: $desktop) {
      flex-direction: column;
    }

    & .input {
      color: hsl(255, 11%, 22%);
      font-size: 18px;
      text-indent: 20px;
      padding: 15px 0;
      width: 95%;
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
.input-wrapper {
  position: relative;
  flex-grow: 5;
}

.input {
  position: relative;
}

.btn,
.input {
  cursor: pointer;
  border-radius: 8px;
  margin: 0 8px;
}
.txt-warning {
  position: absolute;
  bottom: -20px;
  left: 20px;
  font-size: 12px;
  text-align: left;
  color: #be617a;
  @media (max-width: $desktop) {
    bottom: -40px;
    left: 10px;
  }
}
.btn {
  background: hsl(180, 66%, 49%);
  color: #fff;
  border: none;
  padding: 15px;
  &:hover {
    background: #9be3e2;
  }
  @media (max-width: $desktop) {
    margin-top: 40px;
  }
}
</style>
