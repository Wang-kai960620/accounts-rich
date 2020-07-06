<template>
    <Layout>
        <div class="iconTitle">
            <div :class="type === '-' && 'input'"
                 @click="selectType('-')">支出
            </div>
            <div :class="type === '+' && 'input'"
                 @click="selectType('+')">收入
            </div>

        </div>
        <div class="icons">
            <div v-for="tag in tags" :key="tag.index" @click="toNumberMap(tag)">
                <Icon :name="tag" class="tagIcon"/>
            </div>
            <div v-for="(name,index) in renderLi" :key="index" @click="toNumberMap(name.tag)">
                <Icon :name="name.tag" class ="newIcon"/>
                <span class="texts">{{name.text}}</span>
            </div>
            <div @click="toSetting" class="setting"  >
                <span>
                设置
                </span>
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
    tag  =''


    tags = ["clothes", "eat", "home", "travel"];
    type = "-";  //-表示支出，+表示收入
    selectType(Type: string) {
      if (Type !== "-" && Type !== "+") {
        throw new Error("Type is undefined");
      }
      this.type = Type;
    }

    get renderLi (){
      const x = JSON.parse(window.localStorage.getItem('settingList') || '[]')as Fit []
      console.log(x);
      return x
    }

    toNumberMap(tag: string) {
      this.tag = tag;
      this.$store.state.editingItem.type = this.type
      this.$store.state.editingItem.tags = this.tag
      router.push("numberMap");
    }

    toSetting() {
      router.push("setting");
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
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            text-align: center;
            margin: 10px;
            border-radius: 50%;
            background: #e5e5e5;
            box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);

            > .tagIcon {
                width: 50%;
                height: 50%;
            }

            &.setting {
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 30px;
            }
            >.newIcon{
                width: 50%;
                height: 50%;
            }
            >.texts{
                width: 100%;
                font-size: 16px;
            }

        }
    }

</style>