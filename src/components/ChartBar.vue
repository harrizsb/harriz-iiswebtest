<template>
  <transition name="bar-chart--animate" appear>
    <!-- <template v-if="show"> -->
    <div class="bar-chart" :style="barChartStyle">
      <div class="bar-chart--item" :style="barChartItemStyle"></div>
    </div>
    <!-- </template> -->
  </transition>
</template>

<script>
export default {
  name: "ChartBar",
  data() {
    return {
      show: false,
      animationDone: false
    };
  },
  props: {
    flipChart: {
      type: Boolean,
      default: () => false
    },
    chartColor: {
      type: String,
      default: () => "#ff3a29"
    },
    backgroundChartColor: {
      type: String,
      default: () => "#ffe5d3"
    }
  },
  computed: {
    barChartStyle() {
      if (this.flipChart) {
        return {
          width: "15px",
          height: "100%"
        };
      } else {
        return { backgroundColor: this.backgroundChartColor };
      }
    },
    barChartItemStyle() {
      const baseStyle = {
        opacity: this.flipChart && this.active ? 0.2 : 1
      };

      if (this.flipChart) {
        return {
          ...baseStyle,
          width: "15px",
          height: `${this.randomNumber()}%`,
          backgroundColor: this.chartColor,
          bottom: 0
        };
      } else {
        return {
          ...baseStyle,
          width: `${this.randomNumber()}%`,
          height: "15px",
          backgroundColor: this.chartColor
        };
      }
    },
    active() {
      return Math.random() < 0.5;
    }
  },
  methods: {
    randomNumber() {
      return Math.round(Math.random() * 100);
    }
  }
};
</script>

<style lang="scss" scoped>
.bar-chart {
  width: 100%;
  height: 15px;
  position: relative;
  border-radius: 25px;
  overflow: hidden;

  &--animate {
    &-enter {
      width: 0;
      height: 0;

      &-active {
        transition: width 2s;
      }
    }

    &-leave-to {
      width: 0;
      height: 0;
    }
  }

  &--item {
    border-radius: 25px;
    position: absolute;
  }
}
</style>
