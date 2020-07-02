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
  import {Component} from "vue-property-decorator";
  import router from "@/router";
  import store from "@/store";


  @Component({
    components: {numberType, numberTitle, NumberButton},
  })


  export default class NumberMap extends Vue {
    get recordList() {
      return this.$store.state.recordList;
    }
    text: RecordItem = {
      notes: "",
      type:'',
      tags:'',
      amount: 0
    };

    created() {
      this.$store.commit('fetchRecords')

    }

    onUpdateAmount(value: string) {
      this.text.amount = parseFloat(value);
    }

    onUpdateType(value: string) {
      this.text.notes = value;
    }

    saveAmount() {
      this.$store.commit('createRecords',this.text)
      router.push('/');
    }

  }
</script>

<style lang="scss" scoped>
</style>