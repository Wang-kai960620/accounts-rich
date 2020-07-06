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
  import clone from "@/lib/clone";
  import dayjs from "dayjs";

  type RootItem = {
    recordList: RecordItem[];
  }


  @Component({
    components: {Echarts, statisticsTitle}
  })
  export default class Statistics extends Vue {

    option = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        left: 10,
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '30',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            ...this.renderSource
          ]
        }
      ]
    };


    created() {
      this.$store.commit("fetchRecords");
    }

    get recordList() {
      return (this.$store.state as RootItem).recordList;
    }

    get renderSource() {
      const {recordList} = this;
      if (recordList.length === 0) {return [];}
      const newList = clone(recordList).sort((a, b) => dayjs(b.timeAt).valueOf() - dayjs(a.timeAt).valueOf());
      type RenderSource = { value: number; name: string }[]
      // const inMoney = newList.filter(item => item.type === "-").reduce((sum, item) => {return sum + item.amount;}, 0);
      // const outMoney = newList.filter(item => item.type === "+").reduce((sum, item) => {return sum + item.amount;}, 0);
      // const result: RenderSource = [{name: "支出", value: inMoney}];
      // result.push({name: "收入", value: outMoney});
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
        display: flex;
        justify-content: center;
        align-items: center;

        > .sketch {
        }
    }


</style>