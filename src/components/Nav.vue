<template>
    <div>
        <router-link to="/labels">
            <Icon name="labels"/>
            账单
        </router-link>
        <router-link to="/detail">
            <Icon name="detail"/>
            明细
        </router-link>
        <router-link to="/money">
            <Icon name="add"/>
            记账
        </router-link>
        <router-link to="/statistics">
            <Icon name="statistics"/>
            统计
        </router-link>
        <router-link to="/my">
            <Icon name="my"/>
            我的
        </router-link>
    </div>
</template>

<script lang="ts">
  export default {
    name: "Nav"
  };
</script>

<style lang="scss" scoped>

</style>