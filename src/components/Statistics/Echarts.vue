<template>
    <div ref="container" class="wrapper"></div>
</template>

<script lang="ts">
  import Vue from "vue";
  import echarts, {EChartOption, ECharts} from "echarts";
  import {Component, Prop, Watch} from "vue-property-decorator";

  @Component
  export default class Charts extends Vue {
    @Prop(Object) option?: EChartOption;
    chart?: ECharts;

    mounted() {
      const div = this.$refs.container as HTMLDivElement;
      if (this.option === undefined) {
        return console.error("option 为空");
      }
      this.chart = echarts.init(div);
      this.chart.setOption(this.option);
    }

    @Watch("option")
    onChangeOption(value: EChartOption) {
      this.chart?.setOption(value)
    }

  }
</script>

<style lang="scss" scoped>
    .wrapper {
        height: 400px;
    }

</style>