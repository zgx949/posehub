<script setup>
import {defineComponent, onMounted, onUpdated, ref} from "vue"
import Posecard from "./posecard.vue"
import { getPoseList } from '../../api/posehub.js'
import {showLoadingToast} from "vant";
const props = defineProps({
  categoryId: {
    type: Number,
    required: true
  }
})
const poseList = ref([])
const getData = () => {
  const t = showLoadingToast({
    message: '加载中...',
    forbidClick: true,
  })
  getPoseList(props.categoryId).then(res => {
    poseList.value = res.data
    t.close()
  })
}
onMounted(() => {
  getData()
})
onUpdated(() => {
  getData()
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
<van-back-top right="0" bottom="5vh" />
</template>

<style scoped>

</style>