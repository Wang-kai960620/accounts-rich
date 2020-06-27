<template>
    <layout>
        <div class="title">title</div>
        <div class="type">type</div>
        <div class="show">0.00</div>
        <div class="numberMap">
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>回退</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>删除</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button class="add">
                <router-link to="/">
                    OK
                </router-link>
            </button>
            <button>.</button>
            <button>0</button>
            <button>#</button>
        </div>
    </layout>
</template>

<script lang="ts">
  export default {
    name: "NumberMap"
  };
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/help.scss";

    .title {
        display: flex;
        height: 120px;
        border-radius: 0 0 30px 30px;
        background: #ffcd00;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    }

    .type {
        height: 70px;
        margin: 30px 0;
    }


    .show {
        font-size: 46px;
        text-align: right;
        margin: 20px;
        font-family: Consolas, monospace;
    }

    .numberMap {
        width: 370px;
        margin: auto ;
        bottom: 0;
        @extend %clearFix;

        > button {
            margin: 18px 8.8px;
            width: 20%;
            height: 60px;
            float: left;
            border-radius: 50%;
            border: none;
            box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);;

            &.add {
                height: 150px;
                float: right;
                border-radius: 50px;
            }
        }
    }
</style>