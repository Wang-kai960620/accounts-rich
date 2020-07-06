<template>
    <div ref="container" class="chart">
    </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import echarts from "echarts";
  import {Component, Prop} from "vue-property-decorator";

  @Component
  export default class Charts extends Vue {
    @Prop(Object) option!: object;

    mounted() {
      const div =this.$refs.container as HTMLDivElement
      const width = document.documentElement.clientWidth;
      div.style.width = `${width * 0.8}px`;
      div.style.height = `${width }px`
      const chart = echarts.init(div, "light");
      chart.setOption(this.option);
    }

  }
</script>

<style lang="scss" scoped>
    .chart {
        display: flex;
        justify-content: center;
        align-items:center;
    }
</style>