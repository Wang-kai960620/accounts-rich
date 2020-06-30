<template>
    <Layout>
        <detailTitle/>
        <div class="message">
            <div class="face">
                <Icon name="add"/>
            </div>
            <div class="map">
                <div class="name">name:</div>
                <div class="age">age:</div>
            </div>

        </div>
        <div class="mouthIn">
            <span class="allIn">本月总收入:</span>
            <div class="numberIn">6000</div>
        </div>
        <div class="mouthOut">
            <span class="allOut">本月总支出:</span>
            <div class="numberOut">8000</div>
        </div>
    </Layout>
</template>

<script lang="ts">
  import detailTitle from "@/components/Detail/detailTitle.vue";

  export default {
    name: "my",
    components: {detailTitle}
  };
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
</style>