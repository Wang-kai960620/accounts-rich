<template>
    <Layout>
        <Title/>
        <DetailButton/>
        <ul>
            <li> 衣</li>
            <li> 食</li>
            <li> 住</li>
            <li> 行</li>
        </ul>
    </Layout>
</template>


<script lang="ts">
  import Title from "@/components/Detail/Title.vue";
  import DetailButton from "@/components/Detail/DetailButton.vue";

  export default {
    name: "detail",
    components: {DetailButton, Title}
  };
</script>

<style lang="scss" scoped>

    ul {
        font-size: 2em;
        display: flex;
        flex-wrap: wrap;
        width: 80%;

        > li {
            margin: auto;
            width: 100%;
            list-style: none;
            border-radius: 30px 30px 30px 30px;
        }
    }

</style>