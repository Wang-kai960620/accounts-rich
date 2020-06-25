<template>
    <nav>
        <router-link to="/labels" class="item" active-class="selected">
            <Icon name="labels"/>
            账单
        </router-link>
        <router-link to="/detail" class="item" active-class="selected">
            <Icon name="detail"/>
            明细
        </router-link>
        <router-link to="/money" class="item" active-class="selected">
            <div class="myIcon">
                <div class="add">
                    <svg>
                        <use xlink:href="#add"/>
                    </svg>
                </div>

                <span>记账</span>
            </div>
        </router-link>
        <router-link to="/statistics" class="item" active-class="selected">
            <Icon name="statistics"/>
            统计
        </router-link>
        <router-link to="/my" class="item" active-class="selected">
            <Icon name="my"/>
            我的
        </router-link>
    </nav>
</template>

<script lang="ts">
  import x from "@/assets/icons/add.svg";


  export default {
    name: "Nav"
  };
</script>

<style lang="scss" scoped>
    nav {
        display: flex;
        flex-direction: row;
        border-radius: 50px;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);


        > .item {
            width: 20%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            position: relative;
            color: black;

            > .myIcon {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                position: absolute;
                bottom: 0;

                > .add {
                    display: flex;
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    justify-content: center;
                    align-items: center;
                    background: rgb(196, 196, 196);

                    > svg {
                        width: 50px;
                        height: 50px;
                    }


                    }


                }
            }
        > .item.selected {
            color: rgb(244, 234, 42);
        }
    }
</style>