<template>
    <Layout>
        <div class="billTitle">
            <label class="year">
                year</label>
            <label class="mouths">{{n}}</label>
            <div class="input">收 入
                <div>0.00</div>
            </div>
            <div class="output">支 出
                <div>0.00</div>
            </div>
        </div>
        <div class="inTag" @click="toDetail">
            <div class="outText">支出</div>
            <div class="outList">衣 <span>100</span></div>
        </div>
        <div class="outTag" @click="toDetail">
            <div class="inText">收入</div>
            <div class="inList">工资 <span>100</span></div>
        </div>
    </Layout>
</template>

<script lang="ts">
  import Vue from "vue";
  import router from "@/router";
  import {Component} from "vue-property-decorator";

  @Component
  export default class Bill extends Vue {
    n = "6月";

    toDetail() {
      router.push("detail");
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

    .inTag {
        margin: 20px 0;
        font-size: 26px;
        height: 30vh;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        overflow: hidden;

        > .outList {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 8vh;
            padding: 0 10px;
            margin: 5px 0;
            border-radius: 30px;
            background: white;
            color: black;
            box-shadow: 0 4px 4px rgba(0, 0, 0, 0.05);

        }


        > .outText {
            text-align: right;
            width: 100%;
            height: 50px;
            padding: 3px 20px;
            border-radius: 20px;
            background: #ffcd00;
        }

    }

    .outTag {
        margin: 20px 0;
        font-size: 26px;
        height: 30vh;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        overflow: hidden;

        > .inList {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 8vh;
            padding: 0 10px;
            margin: 5px 0;
            border-radius: 30px;
            background: white;
            color: black;
            box-shadow: 0 4px 4px rgba(0, 0, 0, 0.05);
        }

        > .inText {
            text-align: right;
            width: 100%;
            height: 50px;
            padding: 3px 20px;
            border-radius: 30px;
            background: #ffcd00;
        }
    }


</style>