<template>
    <Layout>
        <div class="iconTitle">
            <div :class="type === '+' && 'input'"
                 @click="selectType('+')">收入
            </div>
            <div :class="type === '-' && 'input'"
                 @click="selectType('-')">支出
            </div>
        </div>
        <div class="icons">
            <div v-for="tag in tags" :key="tag"  @click="toNumberMap">
                <Icon :name="tag" class="tagIcon"/></div>
            <div @click="toSetting">
                设置
            </div>
        </div>



    </Layout>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component} from "vue-property-decorator";
  import router from "@/router";

  @Component
  export default class IconMap extends Vue {


    tags = ["clothes", "eat", "home", "travel"];
    type = "+";  //-表示支出，+表示收入
    selectType(Type: string) {
      if (Type !== "-" && Type !== "+") {
        throw new Error("Type is undefined");
      }
      this.type = Type;
    }
    toNumberMap(){
      router.push('numberMap')
    }
    toSetting(){
      router.push('setting')
    }
  }

</script>

<style lang="scss" scoped>
    @import "~@/assets/style/help.scss";

    .iconTitle {
        display: flex;
        border-radius: 0 0 30px 30px;
        background: #ffcd00;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        height: 18vh;
        justify-content: center;
        align-items: center;

        > div {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 0;
            font-size: 2em;
            bottom: 3px;
            width: 50%;

            &.input {
                color: white;
                box-shadow: inset 0 1px 5px rgba(0, 0, 0, 0.1);
                border-radius: 30px 30px 30px 30px;
            }
        }

    }

    ;

    .icons {
        display: flex;
        flex-wrap: wrap;
        @extend %clearFix;
        margin: 30px auto;
        justify-content: center;
        width: 300px;
        text-align: center;


        > div {
            width: 80px;
            height: 80px;
            float: left;
            display: flex;
            justify-content: center;
            text-align: center;
            margin: 10px;
            border-radius: 50%;
            background: #e5e5e5;
            box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
            >.tagIcon{
                width: 100%;
                height: 100%;
            }
        }
    }
</style>