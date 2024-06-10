<script setup>
import {defineProps} from "vue"

defineProps({
  data: Object
})
</script>

<template>
  <van-card
      num="sss"
      price="免费"
      :desc="data.stage"
      :title="data.name"
      :thumb="data.image"
  >
    <template #tags>
      <van-tag plain type="primary">{{ data.tool }}/</van-tag>
      <van-tag plain type="primary">{{ data.unit }}</van-tag>
    </template>
    <template #footer>
      <van-button size="mini">查看</van-button>
      <van-button size="mini">加入计划</van-button>
    </template>
  </van-card>
</template>

<style scoped>

</style>