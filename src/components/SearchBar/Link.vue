<template>
  <div class="regular-btn">
    {{ regularLink }}
  </div>
  <div class="action">
    <div class="shorter">{{ link.shorterLink }}</div>
    <button
      @click="context.emit('change-button-status', link.id, link.shorterLink)"
      class="btn btn-copy"
      :class="buttonClass"
    >
      {{ link.isActive ? "Copied !" : "Copy" }}
    </button>
  </div>
</template>

<script lang="ts">
import { LinkType } from "@/types/Link";
import { computed, defineComponent, PropType } from "@vue/runtime-core";

export default defineComponent({
  props: {
    link: {
      type: Object as PropType<LinkType>,
      required: true,
    },
  },
  emits: ["change-button-status"],
  setup(props, context) {
    const regularLink = computed(() =>
      props.link.regularLink.length > 56
        ? props.link.regularLink.substr(0, 52) + "..."
        : props.link.regularLink
    );
    const buttonClass = computed(() => (props.link.isActive ? "isActive" : ""));
    return { context, regularLink, buttonClass };
  },
});
</script>

<style lang="scss" scoped>
.action {
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

.btn,
.input {
  margin: 12px 0;
}
.btn-copy {
  padding: 15px 20px;
}

.btn {
  font-weight: bold;
}
.regular-btn {
  margin-right: 40px;
  white-space: nowrap;
  max-width: 300px;
  text-align: left;
  color: hsl(257, 27%, 26%) !important;
}

.isActive {
  background: hsl(257, 27%, 26%) !important;
}
</style>
