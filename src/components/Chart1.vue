<template>
  <div class="chart-1">
    <Chart :monthData="['May', 'Apr', 'Mar', 'Feb', 'Jan']" chartTitle="Chart 1">
      <ChartLegends class="chart-1--legends" />
    </Chart>
  </div>
</template>

<script>
export default {
  name: "Chart1",
  components: {
    Chart: () => import("@/components/Chart.vue"),
    ChartLegends: () => import("@/components/ChartLegends.vue")
  }
};
</script>
