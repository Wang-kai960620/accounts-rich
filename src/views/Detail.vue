<template>
    <Layout>
        <detailTitle/>
        <DetailButton :value="type" @update:value="onchange"/>

        <ol v-for="(group,index) in groupList" :key="index" class="list">
            <li>{{group.title}}</li>
            <li v-for="(item,index) in group.items" :key="index" class="listLi">
                <Icon :name="item.tags" class="icon"/>
                <span>{{group.total}}</span>
            </li>
        </ol>
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
    type = "-";

    get recordList() {
      return (this.$store.state as RootItem).recordList;
    }

    get groupList() {
      const {recordList} = this;
      //TODO
      // if (recordList.length === 0) {return;}
      const newList = clone(recordList).filter(item=>item.type === this.type).sort((a, b) => dayjs(b.timeAt).valueOf() - dayjs(a.timeAt).valueOf());
      type Result = { title: string; total?: number; items: RecordItem[] }[]
      console.log(dayjs(newList[0].timeAt).format("YYYY-MM-DD"));
      console.log(newList[0]);
      const result: Result = [{title: dayjs(newList[0].timeAt).format("YYYY-MM-DD"), items: [newList[0]]}];
      for (let i = 1; i < newList.length; i++) {
        const current = newList[i];
        const last = result[result.length - 1];
        if (dayjs(last.title).isSame(dayjs(current.timeAt), "day")) {
          last.items.push(current);
        } else {
          result.push({title: dayjs(current.timeAt).format("YYYY-MM-DD"), items: [current]});
        }

      }
      result.map(group => {
        group.total = group.items.reduce((sum, item) => {
          console.log(sum);
          console.log(item);
          return sum + item.amount;
        }, 0);
      });
      return result;
    }

    onchange(value: string) {
      this.type = value;
    }
  }
</script>

<style lang="scss" scoped>

    .list {
        font-size: 2em;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        > .listLi {
            display: flex;
            justify-content: space-between;
            border: 1px solid red;
            margin: 0 10px;
            width: 100%;
            list-style: none;
            border-radius: 30px 30px 30px 30px;
        }
        >.icon{
            width: 50px;
            height: 50px;
        }
    }

</style>