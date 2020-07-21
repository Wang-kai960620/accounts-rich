<template>
    <div ref="container" class="wrapper"></div>
</template>

<script lang="ts">
  import Vue from "vue";
  import echarts, {EChartOption} from "echarts";
  import {Component, Prop} from "vue-property-decorator";

  @Component
  export default class Charts extends Vue {
    @Prop(Object) option?: EChartOption;

    mounted() {
      const div = this.$refs.container as HTMLDivElement;
      if (this.option === undefined) {
        return console.error("option 为空");
      }
      const chart = echarts.init(div);
      chart.setOption(this.option);
    }
  }
</script>

<style lang="scss" scoped>
    .wrapper {
        height: 400px;
    }

</style>