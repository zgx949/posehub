<script setup>
import { defineProps, ref } from "vue"
import { usePosePkgStore } from '../../utils/store.js'
import {showToast} from "vant"
const props = defineProps({
  data: Object
})


const showCycle = ref(false)
const days = ref(['周一','周二','周三','周四','周五','周六','周天'])
const selectedDays = ref([false, false, false, false, false, false, false])

const showCyclePopup = () => {
  showCycle.value = true
}


const addPkg = () => {
  if (usePosePkgStore().exists(props.data)) {
    showToast({message: '动作包已存在', type: 'error'})
    return
  }
  let data = {...props.data, selectedDays: selectedDays.value}
  usePosePkgStore().add(data)
  showToast({message: '添加成功', type: 'success'})
  showCycle.value = false
}
const showDetail = ref(false)

const showPopup = () => {
  showDetail.value = true
}

const preprocessDescription = (desc) => {
    // 使用正则表达式将HTML标签替换为换行符或其他文本格式
    return desc
}
</script>

<template>
  <van-popup v-model:show="showDetail" :style="{ width: '90%' }" closeable round>
    <center><h4>{{ data.name }}</h4></center>
    <div>
      <video controls autoplay muted loop width="100%" height="30%">
              <source :src="data.media" type="video/mp4">
              您的浏览器不支持视频播放。
      </video>
    </div>
    <van-card>
        <!-- 如果需要在卡片内部添加更多详细内容，可以使用插槽 -->
      <template #title>
        <van-cell-group inset>
          <van-cell title="动作名" :value="data.name" :label="data.nick_name" />
          <van-cell title="器械" :value="data.tool" :label="'单位:' + data.unit" />
          <van-cell title="动作细节" :value="内容" :label="preprocessDescription(data.desc)" />
        </van-cell-group>
      </template>
      <!-- 添加操作按钮 -->
      <template #footer>
        <van-button icon="add-o" size="small" round type="success" @click="showCyclePopup">加入训练包</van-button>
      </template>
    </van-card>
  </van-popup>
  <van-card price="免费" :desc="data.stage" :title="data.name" :thumb="data.image">
    <template #tags>
      <van-tag plain type="success">{{ data.tool }}</van-tag>/
      <van-tag plain type="primary">{{ data.unit }}</van-tag>
    </template>
    <template #footer>
      <van-button  icon="info-o" type="primary" size="mini" @click="showPopup">查看</van-button>
      <van-button  icon="add-o" type="success" size="mini" @click="showCyclePopup">加入训练包</van-button>
    </template>
  </van-card>
  <van-popup v-model:show="showCycle" style="height: 30%; padding: 16px;" closeable round>
      <div class="training-cycle">
      <span>请选择训练周期：</span>
       <van-row gutter="12">
         <van-col span="10" v-for="(day, index) in days" :key="index">
           <van-checkbox
               style="margin: 10px"
               size="small"
               v-model="selectedDays[index]"
             >{{ day }}
           </van-checkbox>
         </van-col>
       </van-row>
     </div>
     <van-button block type="primary" @click="addPkg">确定</van-button>
   </van-popup>
</template>

<style scoped>

</style>