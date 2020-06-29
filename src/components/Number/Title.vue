<template>
    <div class="title">
        <div>Panda-记账</div>
    </div>

</template>

<script lang="ts">
  import Vue from "vue";
  import {Component} from "vue-property-decorator";

  @Component
  export default class Title extends Vue {

  }
</script>

<style lang="scss" scoped>
    .title {
        display: flex;
        height: 18vh;
        border-radius: 0 0 30px 30px;
        background: #ffcd00;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        justify-content: center;
        align-items: center;
        >div {
            font-size: 30px;
        }
    }

</style>