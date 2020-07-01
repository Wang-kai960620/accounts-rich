<template>
    <div>
        <div class="show">{{output}}</div>
        <div class="numberMap">
            <div>
                <button @click="inputContent">7</button>
            </div>
            <div>
                <button @click="inputContent">8</button>
            </div>
            <div>
                <button @click="inputContent">9</button>
            </div>
            <div>
                <button @click="remove">删除</button>
            </div>
            <div>
                <button @click="inputContent">4</button>
            </div>
            <div>
                <button @click="inputContent">5</button>
            </div>
            <div>
                <button @click="inputContent">6</button>
            </div>
            <div>
                <button @click="clear">清空</button>
            </div>
            <div>
                <button @click="inputContent">1</button>
            </div>
            <div>
                <button @click="inputContent">2</button>
            </div>
            <div>
                <button @click="inputContent">3</button>
            </div>
            <div class="add">
                <button class="aButton" @click="addButton">
                        OK
                </button>
            </div>
            <div>
                <button @click="inputContent">.</button>
            </div>
            <div>
                <button @click="inputContent">0</button>
            </div>
            <div>
                <button>#</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component} from "vue-property-decorator";
  import router from "@/router";


  @Component
  export default class NumberButton extends Vue {
    output = "0";

    inputContent(event: MouseEvent) {
      const button = (event.target as HTMLButtonElement);
      const input = button.textContent!;
      if (this.output.length >= 16) {return;}
      if (this.output === "0") {
        if ("0123456789".indexOf(input) >= 0) {
          this.output = input;
        } else {
          this.output += input;
        }
        return;
      }
      if (this.output.indexOf(".") >= 0 && input === ".") {return;}
      this.output += input;
    }
    remove(){
      if(this.output.length===1){
        this.output = '0'
      }else{
        this.output = this.output.slice(0,-1)
      }
    }
    clear(){
      this.output = '0'
    }
    addButton(){
      this.$emit("update:value",this.output)
      this.$emit('change',this.output)
      this.output='0'
    }
  }
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/help.scss";

    .show {
        font-size: 46px;
        text-align: right;
        padding: 20px;
        font-family: Consolas, monospace;
    }


    .numberMap {
        margin: auto;
        bottom: 0;
        @extend %clearFix;

        > div {
            width: 25%;
            height: 8vh;
            float: left;
            display: flex;
            justify-content: center;
            text-align: center;
            margin-top: 10px;

            > button {
                border: none;
                width: 80%;
                border-radius: 50px;
                box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);


            }


        }

        .add {
            margin-top: 15px;
            height: 16vh;
            float: right;
            border-radius: 50px;
        }
    }

</style>