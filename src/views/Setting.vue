<template>
    <layout>
        <Title/>
        <div class="choose">
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
        </div>
        <div class="innerText">
            <label class="add">
                <input type="text" placeholder="输入标签内容"/>
            </label>
            <button>
                <router-link to="iconMap" >
                    点击添加
                </router-link>
            </button>
        </div>

    </layout>
</template>

<script lang="ts">
  import Title from "@/components/Setting/Title.vue";

  export default {
    name: "Setting",
    components: {Title}
  };
</script>

<style lang="scss" scoped>
    .choose {
        margin: 20px 0;
        display: flex;
        height: 50vh;
        overflow: hidden;
        flex-wrap: wrap;
        justify-content: center;

        > div {
            border-radius: 30px;
            width: 30%;
            background:#e5e5e5;
            margin: 5px 5px ;

        }
    }

    .innerText {
        margin: 20px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;

        > .add {
            > input {
                flex-grow: 1;
                font-size: 30px;
                line-height: 35px;
                border: none;
            }
        }

        > button {
            margin: 20px 0;
            padding: 0 20px;
            font-size: 20px;
            border: none;
            height: 50px;
            border-radius: 20px;
            background: #ffcd00;
        }
    }
</style>