<template>
    <Layout>
        <div class="title">
            <div class="input">收入</div>
            <div>支出</div>
        </div>
        <router-link to="numberMap" class="icons" active-class="select">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </router-link>

    </Layout>
</template>

<script lang="ts">
  export default {
    name: "IconMao"
  };
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/help.scss";

    .title {
        display: flex;
        border-radius: 0 0 30px 30px;
        background: #ffcd00;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        text-align: center;
        height: 18vh;
        position: relative;

        > div {
            margin-left: 0;
            font-size: 2em;
            bottom: 3px;
            width: 50%;
            /*position: absolute;*/


            &.input {
                color: white;
                box-shadow: inset 0 1px 5px rgba(0, 0, 0, 0.1);
                border-radius: 0 0 0 30px;
            }
        }

    }

    ;


    .icons {
        display: flex;
        flex-wrap: wrap;
        @extend %clearFix;
        margin: 30px auto;
        justify-content: center;
        width: 300px;

        > div {
            width: 80px;
            height: 80px;
            float: left;
            display: flex;
            justify-content: center;
            text-align: center;
            margin: 10px;
            border-radius: 50%;
            background: #e5e5e5;
            box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
        }
    }
</style>