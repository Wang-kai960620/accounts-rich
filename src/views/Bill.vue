<template>
    <Layout>
        <div class="title">
            <div class="year">year</div>
            <div class="mouths">X月</div>
            <div class="input">input
            <div>0.00</div>
            </div>
            <div class="output">output
            <div>0.00</div>
            </div>
        </div>
        <div>walk</div>
    </Layout>
</template>

<script lang="ts">
  export default {
    name: "Bill",
  };
</script>

<style lang="scss" scoped>
    .title {
        height: 26vh;
        display: flex;
        position: relative;
        font-size: 26px;
        border-radius: 0 0 30px 30px;
        background: #ffcd00;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

        > .year {
            position: absolute;
            left: 30px;

        }

        > .mouths {
            position: absolute;
            font-size:56px;
            bottom: 0;
            left: 30px;
        }

        > .output {
            position: absolute;
            left: 70%;
            bottom: 0;
            font-family: Consolas,monospace;
        }

        > .input {
            position: absolute;
            left: 40%;
            bottom: 0;
            font-family: Consolas,monospace;
        }
    }


</style>