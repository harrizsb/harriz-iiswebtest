<template>
  <div class="chart-legends">
    <div class="chart-legends--wrapper" :style="legendsItemWrapperStyle">
      <div
        class="chart-legends--item"
        v-for="data in legendsItem"
        :key="data"
        :style="legendsItemStyle"
      >
        <slot></slot>
        {{ data }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChartLegends",
  props: {
    includePreText: {
      type: Boolean,
      default: () => false
    },
    legendsItemLength: {
      type: Number,
      default: () => 9
    },
    colorPreText: {
      type: String,
      default: () => "#4339F2"
    }
  },
  computed: {
    legendsItem() {
      const { includePreText, legendsItemLength } = this;
      const arr = Array.from(Array(legendsItemLength), (_, index) => {
        const tmp = ++index;
        return includePreText ? `Text ${tmp}` : `0${tmp}`;
      });

      return arr;
    },
    legendsItemWrapperStyle() {
      const { legendsItemLength } = this;

      if (legendsItemLength === 2) {
        return {
          width: "30%",
          paddingLeft: "2%"
        };
      } else {
        return null;
      }
    },
    legendsItemStyle() {
      const { legendsItemLength } = this;

      if (legendsItemLength === 2) {
        return {
          marginTop: "10px",
          opacity: 1
        };
      } else {
        return null;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.chart-legends {
  width: 100%;

  &--wrapper {
    padding-left: 5%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  &--item {
    &:last-child {
      .chart-2--pre-text {
        background-color: #4339f2;
      }
    }

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-self: center;
    opacity: 0.4;
    width: 100%;
  }
}
</style>
