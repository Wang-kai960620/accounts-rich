<template>
    <div class="type">type</div>

</template>

<script lang="ts">
  import Vue from "vue";
  import {Component} from "vue-property-decorator";

  @Component
  export default class Type extends Vue {

  }
</script>

<style lang="scss" scoped>
    .type {
        height: 8vh;
        margin: 30px 0;
    }

</style>