<template>
    <div class="type">
        <label>
            <Icon name="my" class="logo"/>
            <input type="text"
                   v-model="value"
                   placeholder="在这里输入备注"/>
        </label>
    </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component, Watch} from "vue-property-decorator";

  @Component
  export default class Type extends Vue {
    value = "";
  @Watch('value')
    onTypeChange(value: string){
    this.$emit('update:value',value)
  }

  }
</script>

<style lang="scss" scoped>
    .type {
        height: 8vh;
        margin: 30px 0;
        display: block;

        > label {
            display: flex;
            align-items: center;


            > .logo {
                width: 60px;
                height: 60px;
                margin: 5px;
            }

            > input {
                font-size: 20px;
                border: none;
                background: #f5f5f5;
                padding: 20px 0;
                border-bottom: 1px solid #ffcd00;
                flex-grow: 1;
            }
        }
    }


</style>