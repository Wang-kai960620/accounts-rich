<template>
    <Layout>
        <div class="billTitle">
            <label class="year">
                {{year}}年</label>
            <label class="mouths">{{n}}月</label>
            <div class="input">收 入
                <div>{{inMoney}}元</div>
            </div>
            <div class="output">支 出
                <div>{{outMoney}}元</div>
            </div>
        </div>
        <div class="outTag">
            <div class="outList" @click="toDetail"
                 v-for="(name,index) in moneyList" :key="index">
                <Icon :name="name.tags" class="icon"/>
                ￥{{name.amount}}
            </div>
        </div>
    </Layout>
</template>

<script lang="ts">
  import Vue from "vue";
  import router from "@/router";
  import {Component} from "vue-property-decorator";
  import clone from "@/lib/clone";
  import dayjs from "dayjs";

  type RootItem = {
    recordList: RecordItem[];
  }

  @Component
  export default class Bill extends Vue {
    year = "";
    inMoney = "0.00";
    outMoney = "0.00";
    n = "";


    toDetail() {
      router.push("detail");
    }

    mounted() {
      this.$store.commit("fetchRecords");
      const years = new Date().getUTCFullYear();
      this.year = years.toString();
      const month = new Date().getMonth() + 1;
      this.n = month.toString();
    }

    get recordList() {
      return (this.$store.state as RootItem).recordList;
    }

    get moneyList() {
      const {recordList} = this;
      if (recordList.length === 0) {return [] }
      const newList = clone(recordList).sort((a, b) => dayjs(b.timeAt).valueOf() - dayjs(a.timeAt).valueOf());
      const nowMonth = newList.filter(item => dayjs(item.timeAt).isSame(dayjs().valueOf(), "year"));
      const nowMonth2 = nowMonth.filter(item => dayjs(item.timeAt).isSame(dayjs().valueOf(), "month"));
      this.inMoney = nowMonth2.filter(item => item.type === "+").reduce((sum, items) => {return sum + items.amount;}, 0).toString();
      this.outMoney = nowMonth2.filter(item => item.type === "-").reduce((sum, items) => {return sum + items.amount;}, 0).toString();
      return nowMonth2;
    }

  }
</script>

<style lang="scss" scoped>
    .billTitle {
        height: 26vh;
        display: flex;
        position: relative;
        font-size: 26px;
        border-radius: 0 0 20px 20px;
        background: #ffcd00;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

        > .year {
            position: absolute;
            left: 30px;
            font-size: 30px;
            padding: 10px 0;
        }

        > .mouths {
            position: absolute;
            font-size: 50px;
            bottom: 0;
            left: 30px;
            font-family: monospace, Consolas;
        }

        > .output {
            position: absolute;
            left: 70%;
            bottom: 0;
            font-family: Consolas, monospace;
        }

        > .input {
            position: absolute;
            left: 40%;
            bottom: 0;
            font-family: Consolas, monospace;
        }
    }


    .outTag {
        margin: 20px 0;
        font-size: 26px;
        height: 60vh;
        flex-wrap: wrap;
        overflow: scroll;

        > .outList {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 8vh;
            padding: 0 20px;
            margin: 5px 0;
            border-radius: 30px;
            background: white;
            color: black;
            box-shadow: 0 4px 4px rgba(0, 0, 0, 0.05);
            font-size: 26px;

        }


    }


</style>