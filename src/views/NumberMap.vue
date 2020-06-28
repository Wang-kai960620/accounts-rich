<template>
    <layout>
        <Title/>
        <Type/>
        <Show/>
        <NumberButton/>
    </layout>
</template>




<script lang="ts">
  import Title from "@/components/Number/Title.vue";
  import Type from "@/components/Number/Type.vue";
  import Show from "@/components/Number/Show.vue";
  import NumberButton from "@/components/Number/NumberButton.vue";

  export default {
    name: "NumberMap",
    components: {Show, Type, Title , NumberButton}
  };
</script>

<style lang="scss" scoped>
</style>