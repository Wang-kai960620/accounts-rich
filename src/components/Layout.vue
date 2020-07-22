<template>
    <div class="nav">
        <div class="content">
            <slot></slot>
        </div>
        <Nav/>
    </div>
</template>

<script lang="ts">
  export default {
    name: "Layout"
  };
</script>

<style lang="scss" scoped>
    .nav {
        max-width: 400px;
        display: flex;
        flex-direction: column;
        height: 100vh;
        margin: 0 auto;
    }

    .content {
        flex-grow: 1;
        overflow: auto;
    }
</style>