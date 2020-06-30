<template>
    <Layout>
        <detailTitle/>
        <DetailButton  :value.sync="type" />
        <ul>
            <li> 衣</li>
            <li> 食</li>
            <li> 住</li>
            <li> 行</li>
        </ul>
    </Layout>
</template>


<script lang="ts">
  import Vue from "vue";
  import detailTitle from "@/components/Detail/detailTitle.vue";
  import DetailButton from "@/components/Detail/DetailButton.vue";
  import {Component} from "vue-property-decorator";

  @Component({components: {DetailButton, detailTitle}})
  export default class Detail extends Vue {
    type ='-'

  }
</script>

<style lang="scss" scoped>

    ul {
        font-size: 2em;
        display: flex;
        flex-wrap: wrap;
        width: 80%;

        > li {
            margin: auto;
            width: 100%;
            list-style: none;
            border-radius: 30px 30px 30px 30px;
        }
    }

</style>