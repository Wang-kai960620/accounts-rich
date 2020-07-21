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

    get arr() {
      const today = new Date();
      const newRecordsList = this.recordList.map(i => ({
        timeAt: dayjs(i.timeAt).format("YYYY-MM-DD"),
        amount: i.amount,
        type: i.type
      }));
      const array = [];
      for (let i = 0; i < 29; i++) {
        const date = dayjs(today).subtract(i, "day").format("YYYY-MM-DD");
        const amount = newRecordsList.filter(t => t.timeAt === date).filter(i => i.type === this.choose).reduce((sum, item) => {return sum + item.amount;}, 0);
        array.push({date: date, amount: amount});
      }
      array.sort((a, b) => dayjs(a.date).valueOf() - dayjs(b.date).valueOf());
      const keys = array.map(t => t.date);
      const values = array.map(t => t.amount);
      return {keys, values};
    }

    get option() {
      const {keys, values} = this.arr;
      return {
        grid: {
          left: 0,
          right: 0
        },
        xAxis: {
          type: "category",
          data: keys,
          axisTick: {
            alignWithLabel: true,
          },
          axisLabel: {
            formatter: function (value: string, index: number) {
              return value.substr(5);
            }
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
          formatter: "{c}",
          backgroundColor: "#ffcd00"
        },
        series: [{
          symbol: "circle",
          symbolSize: 12,
          itemStyle: {color: "#ffcd00"},
          data: values,
          type: "line"
        }],
      };

    }


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