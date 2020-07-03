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


  @Component({
    components: {numberType, numberTitle, NumberButton},
  })


  export default class NumberMap extends Vue {
    get recordList() {
      return this.$store.state.recordList;
    }


    created() {
      this.$store.commit("fetchRecords");

      console.log(this.$store.state.editingItem);
    }

    onUpdateAmount(value: string) {
      this.$store.state.editingItem.amount = parseFloat(value);
    }

    onUpdateType(value: string) {
      this.$store.state.editingItem.notes = value;
    }

    saveAmount() {
      this.$store.state.editingItem.timeAt = new Date().toISOString();
      this.$store.commit("createRecords", this.$store.state.editingItem);
      router.push("/");
    }

  }
</script>

<style lang="scss" scoped>
</style>