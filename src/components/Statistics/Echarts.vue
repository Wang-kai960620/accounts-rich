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
      console.log(this.$refs.container);
      const width = document.documentElement.clientWidth;
      div.style.width = `${width}px`;
      div.style.height = `${width * 1.2}px`
      const chart = echarts.init(this.$refs.container as HTMLDivElement, "light");
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