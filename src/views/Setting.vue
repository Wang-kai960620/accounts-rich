<template>
    <layout>
        <SettingTitle/>
        <List @update:value="onUpdateTag"/>
        <inner @innerText="addText"/>

    </layout>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component, Watch} from "vue-property-decorator";
  import SettingTitle from "@/components/Setting/SettingTitle.vue";
  import List from "@/components/Setting/List.vue";
  import Inner from "@/components/Setting/Inner.vue";
  import router from "@/router";


  type Fit = {
    tag: string;
    text: string;
  }
  @Component({
    components: {Inner, List, SettingTitle}
  })
  export default class Setting extends Vue {
    settingList: Fit[] = [];
    settingText: Fit = {
      tag: "",
      text: ""
    };

    created() {
      this.settingList = JSON.parse(window.localStorage.getItem('settingList') || '[]')
    }

    onUpdateTag(value: string) {
      this.settingText.tag = value.toString();
    }

    addText(value: string) {
      if (value.length>4){ return window.alert('最多可输入四个字符')}
      this.settingText.text = value;
      const settingText2 = JSON.parse(JSON.stringify(this.settingText));
      this.settingList.push(settingText2);
      router.back()
    }


    @Watch("settingList")
    onChangeList() {
      window.localStorage.setItem("settingList", JSON.stringify(this.settingList));
    }
  }
</script>

<style lang="scss" scoped>

</style>