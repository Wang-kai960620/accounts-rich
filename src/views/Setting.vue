<template>
    <layout>
        <SettingTitle/>
        <List/>
        <inner @innerText="addText"/>

    </layout>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component, Watch} from "vue-property-decorator";
  import SettingTitle from "@/components/Setting/SettingTitle.vue";
  import List from "@/components/Setting/List.vue";
  import Inner from "@/components/Setting/Inner.vue";


  type fitList={
    tag: string;
    text: string;
  }
  @Component({
    components: {Inner, List, SettingTitle}
  })
  export default class Setting extends Vue {
    settingList: fitList[]=[]
    settingText: fitList={
      tag:'',
      text:''
    }
    addText(value: string) {
      this.settingText.text=value
      this.settingList.push(this.settingText)

    }
    @Watch('settingList')
    onChangeList(){
      window.localStorage.setItem('settingList',JSON.stringify(this.settingList))
    }
  }
</script>

<style lang="scss" scoped>

</style>