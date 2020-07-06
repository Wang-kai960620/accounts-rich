<template>
    <nav>
        <router-link to="/bill" class="item" active-class="selected">
            <Icon name="bill"/>
            账单
        </router-link>
        <router-link to="/detail" class="item" active-class="selected">
            <Icon name="detail"/>
            明细
        </router-link>
        <router-link to="/iconMap" class="item" active-class="selected">
            <div class="myIcon">
                <div class="add">
                    <svg>
                        <use xlink:href="#add"/>
                    </svg>
                </div>
                <div>记账</div>
            </div>
        </router-link>
        <router-link to="/statistics" class="item" active-class="selected">
            <Icon name="statistics"/>
            统计
        </router-link>
        <router-link to="/my" class="item" active-class="selected">
            <Icon name="mark"/>
            标签
        </router-link>
    </nav>
</template>

<script lang="ts">


  export default {
    name: "Nav"
  };
</script>

<style lang="scss" scoped>
    nav {
        display: flex;
        flex-direction: row;
        border-radius: 50px;
        background: rgb(196, 196, 196);


        > .item {
            width: 20%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            position: relative;
            color: black;
            margin-top: 8px;


            > .myIcon {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                position: absolute;
                flex-grow: 1;
                margin-bottom: 0;
                bottom: 0;

                > .add {
                    width: 50px;
                    height: 45px;
                    border-radius: 50%;
                    position: relative;
                    background: rgb(196, 196, 196);

                    > svg {
                        left: 5px;
                        position: absolute;
                        bottom: 0;
                        width: 40px;
                        height: 40px;
                    }
                }
            }
        }

        > .item.selected {
            color: rgb(244, 234, 42);
        }
    }
</style>