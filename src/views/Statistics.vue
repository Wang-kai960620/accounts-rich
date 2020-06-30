<template>
    <Layout>
        <statisticsTitle />
        <div class="text">详情</div>
        <div class="circle">
            <div class="inCircle">
            </div>
        </div>
    </Layout>
</template>


<script lang="ts">

  import statisticsTitle from "@/components/Statistics/statisticsTitle.vue";

  export default {
    name: "Statistics",
    components: {statisticsTitle },
  };

</script>


<style lang="scss" scoped>
    .text{
        font-size: 50px;
        text-align: center;
    }
    .circle {

        margin: 10vh auto;
        width: 80vw;
        height: 80vw;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #ffcd00;

        > .inCircle {
            width: 70vw;
            height: 70vw;
            border-radius: 50%;
            background: #ffff;
        }
    }

</style>