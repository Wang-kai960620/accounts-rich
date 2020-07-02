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
  import router from "@/router";


  type Node = {
    iconType: string;
    type: string;
    amount: number;
  }


  @Component({components: {numberType, numberTitle, NumberButton}})
  export default class NumberMap extends Vue {
    textList: Node[] = [];
    text: Node = {
      iconType:"",
      type: "",
      amount: 0
    };

    created(){
      console.log(window.localStorage.getItem('tagList'))
      console.log(JSON.parse(window.localStorage.getItem("tagList") || "[]"));
      const x = JSON.parse(window.localStorage.getItem("tagList") || "[]")
      console.log(x);
      this.text.iconType = x
      console.log(this.text)
    }

    onUpdateAmount(value: string) {
      this.text.amount = parseFloat(value);
    }

    onUpdateType(value: string) {
      this.text.type = value;
    }

    saveAmount() {
      this.textList = JSON.parse(window.localStorage.getItem('textList') || "[]" )
      const texList2 = JSON.parse(JSON.stringify(this.text));
      this.textList.push(texList2);
    }

    @Watch("textList")
    onTextListChange() {
      window.localStorage.setItem("textList", JSON.stringify(this.textList));
      router.push("/");
    }
  }
</script>

<style lang="scss" scoped>
</style>