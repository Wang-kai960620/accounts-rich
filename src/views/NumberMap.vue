<template>
    <layout>
        <Title/>
        <Type/>
        <NumberButton/>
    </layout>
</template>


<script lang="ts">
  import Title from "@/components/Number/Title.vue";
  import Type from "@/components/Number/Type.vue";
  import NumberButton from "@/components/Number/NumberButton.vue";

  export default {
    name: "NumberMap",
    components: {Type, Title, NumberButton}
  };
</script>

<style lang="scss" scoped>
</style>