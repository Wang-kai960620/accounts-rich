<template>
    <Layout>
        <div class="title">
            <div :class="type === '+' && 'input'"
                 @click="selectType('+')">收入
            </div>
            <div :class="type === '-' && 'input'"
                 @click="selectType('-')">支出
            </div>
        </div>
        <router-link to="numberMap" class="icons" active-class="select">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </router-link>

    </Layout>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component} from "vue-property-decorator";

  @Component
  export default class IconMap extends Vue {
    type = "-";  //-表示支出，+表示收入
    selectType(Type: string) {
      if (Type !== "-" && Type !== "+") {
        throw new Error("Type is undefined");
      }
      this.type = Type;
    }
  }

</script>

<style lang="scss" scoped>
    @import "~@/assets/style/help.scss";

    .title {
        display: flex;
        border-radius: 0 0 30px 30px;
        background: #ffcd00;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        height: 18vh;
        justify-content: center;
        align-items: center;
        text-align: center;

        > div {
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
        }
    }
</style>