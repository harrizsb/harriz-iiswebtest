<template>
  <button class="button" :style="buttonStyle">
    <slot name="pre-button"></slot>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    backgroundColor: {
      type: String,
      default: () => "#655CFB"
    }
  },
  computed: {
    buttonStyle() {
      return {
        backgroundColor: this.backgroundColor
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.button {
  color: #fff;
  border-radius: 6px;
  border-color: transparent;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin: 0 10px;

  &:focus {
    outline: none;
  }
}
</style>
