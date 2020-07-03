<template>
    <Layout>
        <detailTitle/>
        <DetailButton  :value.sync="type" />
        <ul>
            <li v-for="list in lists " :key="list" >{{list}}</li>
        </ul>
    </Layout>
</template>


<script lang="ts">
  import Vue from "vue";
  import detailTitle from "@/components/Detail/detailTitle.vue";
  import DetailButton from "@/components/Detail/DetailButton.vue";
  import {Component} from "vue-property-decorator";

  type RootItem = {
    recordList: RecordItem[];
  }
  @Component({components: {DetailButton, detailTitle}})
  export default class Detail extends Vue {
    lists: string[]=['衣','食','住','行']
    type ='-'

    get recordList() {
      return (this.$store.state as RootItem).recordList;
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