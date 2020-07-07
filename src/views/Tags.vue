<template>
    <Layout>
        <detailTitle/>
        <div class="tagList">
            <ol>
                <li v-for="(item,index) in this.tags" :key="index"
                    @click="choose(item.tag,item.text)"
                   >
                    <Icon :name="item.tag" class="tag"/>
                    <span>{{item.text}}</span>
                </li>
            </ol>
            <button>
                删除标签
            </button>
        </div>
    </Layout>
</template>

<script lang="ts">
  import Vue from "vue";
  import detailTitle from "@/components/Detail/detailTitle.vue";
  import {Component} from "vue-property-decorator";

  type TagList = { tag: string; text: string }

  @Component({
    components: {detailTitle}
  })
  export default class Tags extends Vue {
    tags: TagList[] = [];
    x: TagList = {
      tag: "",
      text: ""
    };


    created() {
      this.tags = JSON.parse(window.localStorage.getItem("settingList") || "[]");
      console.log(this.tags);
    }

    get recordList() {
      return this.$store.commit("fetchRecords");
    }


    // get teamList() {
    //
    //
    //   return [];
    // }

    choose(value: string,y: string) {
      console.log(value,y);
      this.x.text = y
      this.x.tag = value
      console.log(this.x);
    }


  }
</script>

<style lang="scss" scoped>

    .message {
        display: flex;
        font-size: 30px;
        height: 20vh;

        > div {
            width: 33.3333%;
        }

        > .face {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        > .map {
            margin: auto 0;

            > .name {
            }

            > .age {
            }
        }
    }

    .mouthIn {
        display: flex;
        font-size: 30px;
        justify-content: center;
        align-items: center;
        height: 20vh;

    }

    .mouthOut {
        display: flex;
        font-size: 30px;
        justify-content: center;
        align-items: center;
        height: 20vh;

    }

    .tagList {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        height: 70vh;

        > ol {
            margin: 20px 20px;
            width: 100%;
            height: 60%;
            display: flex;
            flex-wrap: wrap;
            overflow: scroll;


            > li {
                list-style: none;
                max-width: 25vw;
                margin: 5px 8px;
                height: 60px;
                border-radius: 10px 10px 10px 10px;
                border: 1px solid red;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;

                > .tag {
                    width: 100%;
                    height: 60%;
                }
            }
        }

        > button {
            margin: 20px 0;
            font-size: 20px;
            height: 50px;
            padding: 10px 20px;
            border: none;
        }
    }


</style>