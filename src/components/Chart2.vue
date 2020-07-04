<template>
  <div class="chart-2">
    <Chart :flipChart="true" chartTitle="Chart 2" chartColor="#4339F2">
      <ChartLegends
        class="chart-2--legends"
        :includePreText="true"
        :legendsItemLength="2"
      >
        <div class="chart-2--pre-text"></div>
      </ChartLegends>
    </Chart>
  </div>
</template>

<script>
export default {
  name: "Chart2",
  components: {
    Chart: () => import("@/components/Chart.vue"),
    ChartLegends: () => import("@/components/ChartLegends.vue")
  }
};
</script>

<style lang="scss" scoped>
.chart-2 {
  &--pre-text {
    width: 15px;
    height: 15px;
    background-color: #dad7fe;
    border-radius: 50%;
    margin-right: 10px;
  }
}
</style>
