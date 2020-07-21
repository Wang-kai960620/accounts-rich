<template>
    <div class="switch">
        <div :class="value === '-' && 'input'"
             @click="select('-')">支出
        </div>
        <div :class="value === '+' && 'input'"
             @click="select('+')">收入
        </div>
    </div>

</template>

<script lang="ts">
  import Vue from "vue";
  import {Component, Prop} from "vue-property-decorator";

  @Component
  export default class DetailButton extends Vue {
    @Prop(String) readonly value!: string
    select(type: string) {
      if (type !== "-" && type !== "+") {
        throw new Error("Type is unKnow");
      }
      this.$emit('update:value',type)
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
            background: #4db2e4;
            box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

            &.input {
                background: #4DB292;
                color: white;
                box-shadow: inset 0 1px 5px rgba(0, 0, 0, 0.1);
                z-index: 2;

            }
        }


    }

</style>