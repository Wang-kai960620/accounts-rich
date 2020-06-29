<template>
    <Layout>
        <Title/>
        <div class="text">详情</div>
        <div class="circle">
            <div class="inCircle">
            </div>
        </div>
    </Layout>
</template>


<script lang="ts">

  import Title from "@/components/Statistics/Title.vue";

  export default {
    name: "Statistics",
    components: {Title},
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