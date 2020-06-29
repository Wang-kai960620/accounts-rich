<template>
    <Layout>
        <Title/>
        <DetailButton/>
        <ul>
            <li> 零食</li>
            <li> 零食</li>
            <li> 零食</li>
            <li> 零食</li>
            <li> 零食</li>
            <li> 零食</li>
            <li> 零食</li>
            <li> 零食</li>
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
        > li {
            border: 1px solid red;
            border-radius: 30px 30px 30px 30px;
        }
    }

</style>