<template>
    <div class="innerText">
        <label class="add">
            <input type="text" placeholder="输入标签内容"
            :value="value" @input="newText"/>
<!--            可以简写为v-model-->
        </label>
        <button @click="addNewTag" >点击添加
        </button>
    </div>

</template>

<script lang="ts">
  import Vue from "vue";
  import {Component} from "vue-property-decorator";


  @Component
  export default class Inner extends Vue {
    value=''
    newText(event: KeyboardEvent){
      const text = event.target as HTMLInputElement
      this.value = text.value
    }
    addNewTag(){
      this.$emit('innerText',this.value)
        this.value=''
    }
  }
</script>

<style lang="scss" scoped>
    .innerText {
        margin: 20px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;

        > .add {
            > input {
                flex-grow: 1;
                font-size: 30px;
                line-height: 35px;
                border: none;
            }
        }

        > button {
            margin: 20px 0;
            padding: 0 20px;
            font-size: 20px;
            border: none;
            height: 50px;
            border-radius: 20px;
            background: #ffcd00;
        }
    }

</style>