<template>
    <layout>
        <div class="title">title</div>
        <div class="type">type</div>
        <div class="show">showNumber</div>
        <div class="numberMap">
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>回退</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>删除</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>add</button>
            <button>.</button>
            <button>0</button>
            <button>#</button>
        </div>
    </layout>
</template>

<script lang="ts">
  export default {
    name: "NumberMap"
  };
</script>

<style lang="scss" scoped>
    .title {
        display: flex;
        height: 120px;
        border-radius: 0 0 30px 30px;
        background: #ffcd00;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    }
    .type{
        border: 1px solid red;
    }
</style>