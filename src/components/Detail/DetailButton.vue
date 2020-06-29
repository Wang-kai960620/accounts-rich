<template>
    <div class="switch">
        <div :class="type === '+' && 'input'"
             @click="select('+')">收入
        </div>
        <div :class="type === '-' && 'input'"
             @click="select('-')">支出
        </div>
    </div>

</template>

<script lang="ts">
  import Vue from "vue";
  import {Component} from "vue-property-decorator";

  @Component
  export default class DetailButton extends Vue {
    type = "+";  //-表示支出，+表示收入
    select(Type: string) {
      if (Type !== "-" && Type !== "+") {
        throw new Error("Type is undefined");
      }
      this.type = Type;
    }
  }

</script>

<style lang="scss" scoped>
    @import "~@/assets/style/help.scss";

    .switch {
        display: flex;
        font-size: 2em;
        text-align: center;
        justify-content: center;
        overflow: hidden;

        > div {
            margin: -5px 20px 20px;
            width: 40%;
            border-radius: 0 0 30px 30px;
            background: #c4c4c4;
            box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

            &.input {
                background: #838383;
                z-index: 2;

            }
        }


    }

</style>