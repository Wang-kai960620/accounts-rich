<template>
    <Layout>
        <statisticsTitle/>
        <DetailButton :value="choose" @update:value="onChange"/>
        <div class="pack" ref="wrapper">
            <Echarts :option="option" class="sketch"></Echarts>
        </div>
    </Layout>
</template>


<script lang="ts">
  import Vue from "vue";
  import statisticsTitle from "@/components/Statistics/SatisticsTitle.vue";
  import {Component} from "vue-property-decorator";
  import Echarts from "@/components/Statistics/Echarts.vue";
  import clone from "@/lib/clone";
  import dayjs from "dayjs";
  import DetailButton from "@/components/Detail/DetailButton.vue";

  type RootItem = {
    recordList: RecordItem[];
  }


  @Component({
    components: {DetailButton, Echarts, statisticsTitle}
  })
  export default class Statistics extends Vue {
    choose = "-";

    option = {
      grid: {
        left: 0,
        right: 0
      },
      xAxis: {
        type: "category",
        data: [
          "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun",
          "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun",
          "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun",
          "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"
        ],
        axisTick: {
          alignWithLabel: true,
        }
      },
      yAxis: {
        type: "value",
        show: false
      },
      tooltip: {
        show: true,
        triggerOn: "click",
        position: "top",
        formatter: "{c}"
      },
      series: [{
        symbol: "circle",
        symbolSize: 12,
        itemStyle: {color: "#ffcd00"},
        data: [
          820, 932, 901, 934, 1290, 1330, 1320,
          820, 932, 901, 934, 1290, 1330, 1320,
          820, 932, 901, 934, 1290, 1330, 1320,
          820, 932, 901, 934, 1290, 1330, 1320
        ],
        type: "line"
      }],
    };


    onChange(value: string) {
      this.choose = value;
    }


    created() {
      this.$store.commit("fetchRecords");
    }

    mounted() {
      const div = (this.$refs.wrapper as HTMLDivElement);
      div.scrollLeft = div.scrollWidth;
    }


    get recordList() {
      return (this.$store.state as RootItem).recordList;
    }

    get renderSource() {
      const {recordList} = this;
      if (recordList.length === 0) {return [];}
      const newList = clone(recordList).sort((a, b) => dayjs(b.timeAt).valueOf() - dayjs(a.timeAt).valueOf());
      type RenderSource = { value: number; name: string }[]
      const result: RenderSource = [{name: newList[0].tags, value: newList[0].amount}];
      for (let i = 1; i < newList.length; i++) {
        const target = newList[i];
        const last = result[result.length - 1];
        if (target.tags === last.name) {
          last.value = target.amount + last.value;
        } else {
          result.push({name: target.tags, value: target.amount});
        }
      }
      return result;
    }


  }


</script>


<style lang="scss" scoped>
    .text {
        font-size: 50px;
        text-align: center;
    }

    .pack {
        overflow: auto;

        &::-webkit-scrollbar {
            display: none;
        }

        > .sketch {
            width: 410%;

        }
    }


</style>