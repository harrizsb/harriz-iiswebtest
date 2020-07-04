<template>
  <div>
    <h3 v-if="chartTitle">{{ chartTitle }}</h3>
    <div class="chart-wrapper" :style="chartStyle">
      <div
        class="chart-wrapper--item"
        v-for="val in chartData"
        :key="val"
        :style="chartWrapperStyle"
      >
        <template v-if="monthData && monthData.length > 0">
          <div class="chart-wrapper--item-month">
            {{ val }}
          </div>
        </template>
        <ChartBar
          class="chart-wrapper--item-chart"
          :flipChart="flipChart"
          :chartColor="chartColor"
        />
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Chart",
  props: {
    monthData: {
      type: Array
    },
    flipChart: {
      type: Boolean,
      default: () => false
    },
    chartTitle: {
      type: String
    },
    chartColor: {
      type: String
    }
  },
  computed: {
    chartStyle() {
      if (this.flipChart) {
        return {
          flexDirection: "row"
        };
      } else {
        return null;
      }
    },
    chartWrapperStyle() {
      if (this.flipChart) {
        return {
          flexDirection: "row",
          height: "200px",
          marginBottom: 0,
          justifyContent: "center"
        };
      } else {
        return null;
      }
    },
    chartData() {
      if (this.monthData && this.monthData.length > 0) {
        return this.monthData;
      } else {
        return Array.from(Array(15), (_, index) => {
          return index;
        });
      }
    }
  },
  components: {
    ChartBar: () => import("./ChartBar.vue")
  }
};
</script>

<style lang="scss" scoped>
.chart-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;

  &--item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    width: 100%;
    margin-bottom: 20px;

    &-month {
      width: 5%;
      opacity: 0.4;
      margin-right: 10px;
    }

    &-chart {
      height: 100%;
      flex-shrink: 1;
    }
  }
}
</style>
