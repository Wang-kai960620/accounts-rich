<template>
    <Layout>
        <div class="title">
            <div class="input">收入</div>
            <div >支出</div>
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
    .title {
        display: flex;
        border-radius: 0 0 30px 30px;
        background: #ffcd00;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        text-align: center;

        > div {
            margin-top: 70px;
            font-size: 2em;
            bottom: 3px;
            width: 50%;
            &.input{
                color: white;
            }
        }

    }

    ;
    .icons {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;

        > div {
            height: 80px;
            width: 80px;
            margin: 20px;
            border-radius: 50%;
            background: #e5e5e5;
            box-shadow: 1px 1px 1px rgba(0,0,0,0.3);
        }
    }
</style>