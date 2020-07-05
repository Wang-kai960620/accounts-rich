<template>
    <Layout>
        <statisticsTitle/>
        <div class="text">详情</div>
        <div class="pack">
            <Echarts :option="option" class="sketch"></Echarts>
        </div>
    </Layout>
</template>


<script lang="ts">
  import Vue from "vue";
  import statisticsTitle from "@/components/Statistics/SatisticsTitle.vue";
  import {Component} from "vue-property-decorator";
  import Echarts from "@/components/Statistics/Echarts.vue";

  @Component({
    components: {Echarts, statisticsTitle}
  })
  export default class Statistics extends Vue {
    option = {
      title: {
        text: "ECharts 入门示例"
      },
      tooltip: {},
      legend: {
        data: ["销量"]
      },
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      },
      yAxis: {},
      series: [{
        name: "销量",
        type: "bar",
        data: [5, 20, 36, 10, 10, 20]
      }]
    };
  }


</script>


<style lang="scss" scoped>
    .text {
        font-size: 50px;
        text-align: center;
    }

    .pack{
        display: flex;
        justify-content: center;
        align-items: center ;
        >.sketch {
        }
    }



</style>