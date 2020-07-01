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
    tags: string[] = ["xxx", "add", "my", "detail", "statistics", "bill"];
    selectTags: string[] = [];

    chooseIcon(tag: string) {
      const index = this.selectTags.indexOf(tag);
      if (index >= 0) {
        this.selectTags.splice(index, 1);
      } else {
        this.selectTags.push(tag);
        this.$emit("update:value",this.selectTags)
      }
      console.log(this.selectTags);
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
                background: #838383;
            }

            > .icon {

                width: 80px;
                height: 80px;
            }
        }
    }

</style>