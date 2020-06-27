<template>
    <layout>
        <div class="title">title</div>
        <div class="type">type</div>
        <div class="show">0.00</div>
        <div class="numberMap">
            <div>
                <button>7</button>
            </div>
            <div>
                <button>8</button>
            </div>
            <div>
                <button>9</button>
            </div>
            <div>
                <button>回退</button>
            </div>
            <div>
                <button>4</button>
            </div>
            <div>
                <button>5</button>
            </div>
            <div>
                <button>6</button>
            </div>
            <div>
                <button>删除</button>
            </div>
            <div>
                <button>1</button>
            </div>
            <div>
                <button>2</button>
            </div>
            <div>
                <button>3</button>
            </div>
            <div class="add">
                <button>
                    <router-link to="/">
                        OK
                    </router-link>
                </button>
            </div>
            <div>
                <button>.</button>
            </div>
            <div>
                <button>0</button>
            </div>
            <div>
                <button>#</button>
            </div>
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
        height: 18vh;
        border-radius: 0 0 30px 30px;
        background: #ffcd00;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    }

    .type {
        height: 8vh;
        margin: 30px 0;
    }

    .show {
        font-size: 46px;
        text-align: right;
        padding: 20px;
        font-family: Consolas, monospace;
    }

    .numberMap {
        margin: auto;
        bottom: 0;
        @extend %clearFix;

        > div {
            width: 25%;
            height: 8vh;
            float: left;
            display: flex;
            justify-content: center;
            text-align: center;
            margin-top: 10px;

            > button {
                border: none;
                width: 80%;
                border-radius: 50px;
                box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);

            }
        }

        .add {
            margin-top: 15px;
            height: 16vh;
            float: right;
            border-radius: 50px;
        }
    }
</style>