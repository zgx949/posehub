<script setup>
import {defineComponent, onMounted, ref} from "vue"
import Posecard from "./posecard.vue"
import { getPoseList } from '../../api/posehub.js'
const props = defineProps({})
const poseList = ref([1,2,3,4])

onMounted(() => {
  getPoseList(1).then(res => {
    poseList.value = res.data
  })
})
</script>

<template>
<div>
  <van-row :gutter="8">
    <van-col
        v-for="(item, index) in poseList"
        :key="index"
        :span="24"
    >
    <posecard :data="item"></posecard>
    </van-col>
  </van-row>
</div>
</template>

<style scoped>

</style>