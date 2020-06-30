<template>
    <Layout>
        <div class="billTitle">
            <label class="year">
                year</label>
            <label class="mouths">{{n}}</label>
            <div class="input">收 入
            <div>0.00</div>
            </div>
            <div class="output">支 出
            <div>0.00</div>
            </div>
        </div>
        <div>walk</div>
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {Component} from "vue-property-decorator";
    @Component
export default class Bill   extends Vue{
  n='6月'

}
</script>

<style lang="scss" scoped>
    .billTitle {
        height: 26vh;
        display: flex;
        position: relative;
        font-size: 26px;
        border-radius: 0 0 30px 30px;
        background: #ffcd00;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

        > .year {
            position: absolute;
            left: 30px;

        }

        > .mouths {
            position: absolute;
            font-size:56px;
            bottom: 0;
            left: 30px;
            font-family: monospace,Consolas;
        }

        > .output {
            position: absolute;
            left: 70%;
            bottom: 0;
            font-family: Consolas,monospace;
        }

        > .input {
            position: absolute;
            left: 40%;
            bottom: 0;
            font-family: Consolas,monospace;
        }
    }


</style>