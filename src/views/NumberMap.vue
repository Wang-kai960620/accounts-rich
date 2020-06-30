<template>
    <layout>
        <numberTitle/>
        <numberType @update:value="onUpdateType"/>
        <NumberButton @update:value="onUpdateAmount" @change="saveAmount"/>
    </layout>
</template>


<script lang="ts">
  import Vue from "vue";
  import numberTitle from "@/components/Number/NumberTitle.vue";
  import numberType from "@/components/Number/Type.vue";
  import NumberButton from "@/components/Number/NumberButton.vue";
  import {Component, Watch} from "vue-property-decorator";

  type NodeList = {
    type: string;
    amount: number;
  }


  @Component({components: {numberType, numberTitle, NumberButton}})
  export default class NumberMap extends Vue {
    textList: NodeList[] = [];
    text: NodeList = {
      type: "",
      amount: 0
    };

    onUpdateAmount(value: string) {
      this.text.amount = parseFloat(value);
    }

    onUpdateType(value: string) {
      this.text.type = value;
    }

    saveAmount() {
      this.textList.push(this.text)
    }
    @Watch('textList')
    onTextListChange(){
      window.localStorage.setItem('textList',JSON.stringify(this.textList))
    }
  }
</script>

<style lang="scss" scoped>
</style>