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
            <button @click="remove">
                删除标签
            </button>
        </div>
    </Layout>
</template>

<script lang="ts">
  import Vue from "vue";
  import detailTitle from "@/components/Detail/detailTitle.vue";
  import {Component, Watch} from "vue-property-decorator";

  type TagList = { tag: string; text: string }

  @Component({
    components: {detailTitle}
  })
  export default class Tags extends Vue {
    text = "";
    tag = "";
    tags: TagList[] = [];


    created() {
      this.tags = JSON.parse(window.localStorage.getItem("settingList") || "[]");
      console.log(this.tags);
    }


    choose(icon: string, note: string) {
      this.tag = icon;
      this.text = note;
    }

    remove() {
      for (let i = 0; i < this.tags.length; i++) {
        if (this.tags[i].tag === this.tag && this.tags[i].text === this.text) {
          this.tags.splice(i, 1);
          window.localStorage.setItem("settingList", JSON.stringify(this.tags));
        }
      }
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