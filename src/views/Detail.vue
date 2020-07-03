<template>
    <Layout>
        <detailTitle/>
        <DetailButton :value.sync="type"/>
        <ul v-for="(group,index) in groupList" :key="index">
            <li v-for="(item,index) in group.items" :key="index">
                <Icon :name="item.tags"/>
                <span>{{group.total}}</span>
            </li>
        </ul>
    </Layout>
</template>


<script lang="ts">
  import Vue from "vue";
  import detailTitle from "@/components/Detail/detailTitle.vue";
  import DetailButton from "@/components/Detail/DetailButton.vue";
  import {Component} from "vue-property-decorator";
  import clone from "@/lib/clone";
  import dayjs from "dayjs";

  type RootItem = {
    recordList: RecordItem[];
  }

  @Component({components: {DetailButton, detailTitle}})
  export default class Detail extends Vue {
    lists: string[] = ["衣", "食", "住", "行"];
    type = "-";

    created() {
      console.log(this.groupList);
    }

    get recordList() {
      return (this.$store.state as RootItem).recordList;
    }

    get groupList() {
      const {recordList} = this;
      // if (recordList.length === 0) {return;}
      const newList = clone(recordList).sort((a, b) => dayjs(b.timeAt).valueOf() - dayjs(a.timeAt).valueOf());
      type Result = { title: string; total?: number; items: RecordItem[] }[]
      console.log(dayjs(newList[0].timeAt).format("YYYY-MM-DD"));
      console.log(newList[0]);
      const result: Result = [{title: dayjs(newList[0].timeAt).format("YYYY-MM-DD"), items: [newList[0]]}];
      return result;

    }

  }
</script>

<style lang="scss" scoped>

    ul {
        font-size: 2em;
        display: flex;
        flex-wrap: wrap;
        width: 80%;

        > li {
            border: 1px solid red;
            margin: 0 10px;
            width: 100%;
            list-style: none;
            border-radius: 30px 30px 30px 30px;
        }
    }

</style>