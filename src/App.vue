<template>
  <div id="app" class="app">
    <transition name="chart-outer--wrapper-animation">
      <div class="chart-outer--wrapper" v-if="show">
        <h1>Charts Visualization</h1>
        <div class="chart-outer--wrapper-inner">
          <Chart1 class="chart-outer--wrapper-inner-item" />
          <Chart2 class="chart-outer--wrapper-inner-item" />
        </div>
      </div>
    </transition>
    <transition name="table--table-animation">
      <Table class="table--table" v-if="show" />
    </transition>
    <FloatingButton />
  </div>
</template>

<script>
import Chart1 from "@/components/Chart1.vue";
import Chart2 from "@/components/Chart2.vue";
import Table from "@/components/Table.vue";

export default {
  name: "App",
  components: {
    Chart1,
    Chart2,
    Table,
    FloatingButton: () => import("@/components/FloatingButton.vue")
  },
  data() {
    return { show: false };
  },
  mounted() {
    this.show = true;
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=DM+Sans&display=swap");

#app {
  font-family: "DM Sans", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
}

.chart-outer--wrapper {
  &-inner {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    &-item {
      width: 100%;
      padding: 0 20px;
    }
  }

  &-animation {
    &-enter {
      &-active {
        transition: all 2s;
      }

      transform: translateX(110%);
    }
  }
}

.table--table {
  &-animation {
    &-enter {
      &-active {
        transition: all 2s;
      }

      transform: translateY(110%);
    }
  }
}
</style>
