<template>
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

</template>

<script lang="ts">
  export default {
    name: "List"
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

</style>