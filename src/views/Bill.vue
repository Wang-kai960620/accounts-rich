<template>
    <Layout>
        <div class="billTitle">
            <label class="year">
                {{year}}年</label>
            <label class="mouths">{{n}}月</label>
            <div class="input">收 入
                <div>0.00</div>
            </div>
            <div class="output">支 出
                <div>0.00</div>
            </div>
        </div>
        <div class="outTag" @click="toDetail">
            <div class="outList" v-for="name in textList" :key="name.index">
                <Icon :name="name"/>
                <span>100</span></div>
        </div>
    </Layout>
</template>

<script lang="ts">
  import Vue from "vue";
  import router from "@/router";
  import {Component} from "vue-property-decorator";

  type allList={
    textList: string;
    numberList: string;
  }
  @Component
  export default class Bill extends Vue {
    year = "";
    n = "";
    textList: string[] = [];
    numberList: string[] =[]

    toDetail() {
      router.push("detail");
    }
    created() {
      this.textList = JSON.parse(window.localStorage.getItem("tagList") || "[]");
      this.numberList  = JSON.parse(window.localStorage.getItem('textList') || '[]')
      const x = this.numberList
      console.log(x);
      console.log(this.textList);
    }

    mounted() {
      const years = new Date().getUTCFullYear();
      this.year = years.toString();
      const month = new Date().getMonth() + 1;
      this.n = month.toString();
    }

  }
</script>

<style lang="scss" scoped>
    .billTitle {
        height: 26vh;
        display: flex;
        position: relative;
        font-size: 26px;
        border-radius: 0 0 30px 30px;
        background: #ffcd00;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

        > .year {
            position: absolute;
            left: 30px;
            font-size: 40px;
            padding: 10px 0;
        }

        > .mouths {
            position: absolute;
            font-size: 56px;
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
        height: 70vh;
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

        }


    }


</style>