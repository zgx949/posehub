<script setup>
import {onMounted, ref} from "vue"
import { usePosePkgStore } from '../utils/store.js'
const pkgs = ref([])
onMounted(() => {
  pkgs.value = usePosePkgStore().all()
  for (let i = 0; i < pkgs.value.length; i++) {
    const pkg = pkgs.value[i]
    pkg.count = 1
  }
  console.log(pkgs.value)
})
const add = (data) => {
  data.count++
  usePosePkgStore().setter(data)
}
const sub = (data) => {
  if (data.count === 0) {
    // 删除
    del(data)
    return
  }
  data.count--
  usePosePkgStore().setter(data)
}
const del = (data) => {

}
const days = ref(['周一','周二','周三','周四','周五','周六','周天'])
const getDays = (item) => {
  debugger
  let data = ""
  for (let i = 0; i < 7; i++) {
    if (item.selectedDays[i]) {
      data += days.value[i] + ","
    }
  }
  return data.slice(0, data.length - 1)
}
</script>

<template>
  <div style="height: 90vh;overflow-y: auto;">
    <center><h4>训练包</h4></center>
    <van-empty description="当前动作包为空" v-if="pkgs.length===0" />
    <div v-for="data in pkgs">
      <van-card price="免费" :num="data.count" :desc="data.stage" :title="data.name" :thumb="data.image">
        <template #tags>
          <van-tag plain type="success">{{ data.tool }}</van-tag>/
          <van-tag plain type="primary">{{ getDays(data) }}</van-tag>
        </template>
        <template #footer>
          <van-button  icon="minus" type="primary" size="mini" @click="sub(data)"></van-button>
          <van-button  icon="plus" type="success" size="mini" @click="add(data)"></van-button>
          <van-button  icon="cross" type="danger" size="mini" @click="del(data)"></van-button>
        </template>
      </van-card>
    </div>
    <van-button type="success" size="mini" class="done">组合</van-button>
  </div>
</template>

<style scoped>
.done{
  bottom: 10vh;
  right: 20px;
  position: fixed;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>