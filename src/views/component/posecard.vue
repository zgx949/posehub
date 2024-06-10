<script setup>
import { defineProps, ref } from "vue"

defineProps({
  data: Object
})

const show = ref(false)
const showPopup = () => {
  show.value = true
}

const preprocessDescription = (desc) => {
    // 使用正则表达式将HTML标签替换为换行符或其他文本格式
    return desc
}
</script>

<template>
  <van-popup v-model:show="show" :style="{ width: '90%' }" closeable round>
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
        <van-button icon="add-o" size="small" round type="success">加入训练包</van-button>
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
      <van-button  icon="add-o" type="success" size="mini">加入训练包</van-button>
    </template>
  </van-card>
</template>

<style scoped>

</style>