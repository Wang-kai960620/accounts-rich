<template>
    <div class="choose">
        <div v-for="tag in tags" :key="tag"
             :class="{select:selectTags.indexOf(tag)>=0}"
             @click="chooseIcon(tag)">
            <Icon :name="tag" class="icon"/>
        </div>

    </div>

</template>

<script lang="ts">
  import Vue from "vue";
  import {Component} from "vue-property-decorator";

  @Component
  export default class List extends Vue {
    tags: string[] = ["travel", "eat", "shopping", "cook", "redEvelop", "tourism"];
    selectTags: string[] = [];




    chooseIcon(tag: string) {
      const index = this.selectTags.indexOf(tag);
      if (index <= 0) {
        this.selectTags.splice(0, 1);
        this.selectTags.push(tag);
        this.$emit("update:value",this.selectTags)
      }
    }
  }
</script>

<style lang="scss" scoped>
    .choose {
        margin: 20px 0;
        display: flex;
        height: 40vh;
        overflow: hidden;
        flex-wrap: wrap;
        justify-content: center;

        > div {
            border-radius: 30px;
            width: 30%;
            background: #e5e5e5;
            margin: 5px 5px;
            display: flex;
            justify-content: center;
            align-items: center;

            &.select {
                background: rgb(255, 205, 0);
            }
            > .icon {

                width: 50px;
                height: 50px;
            }
        }
    }

</style>