<script setup>
import {onMounted, ref} from "vue"
import {showToast} from "vant"
import {getPoseCategory} from "../api/posehub.js"
import Poselist from "./component/poselist.vue";
const active = ref(0)
const searchValue = ref('')
const poseCategory = ref([])

const onChange = (index) => {
  console.log(index)
}

const onSearch = (val) => showToast(val)
const onClickButton = () => showToast(searchValue.value)

onMounted(() => {
  getPoseCategory().then(res => {
    poseCategory.value = res.data
  })
})

</script>

<template>
  <center><h4>PoseHub</h4></center>
  <van-search
      v-model="searchValue"
      show-action
      label="动作"
      placeholder="请输入搜索关键词"
      @search="onSearch"
  >
    <template #action>
      <div @click="onClickButton">搜索</div>
    </template>
  </van-search>
  <van-row>
    <van-col :span="4">
      <van-sidebar v-model="active" @change="onChange" class="van-sidebar">
        <div class="scrollable-container">
          <van-sidebar-item
              v-for="(item, index) in poseCategory"
              :key="index"
              :name="item.name"
              :title="item.name" />
        </div>
      </van-sidebar>
    </van-col>
    <van-col :span="20">
      <div class="content">
        <poselist></poselist>
      </div>
    </van-col>
  </van-row>
</template>

<style scoped>
.content {
  height: 75vh;
  flex-grow: 1; /* 让内容区域占据剩余空间 */
  overflow-y: auto; /* 内容过多时出现滚动条 */
}
.van-sidebar {
  width: 100px;
  /* 确保 Sidebar 有固定的高度，这样内容才会溢出并显示滚动条 */
  height: calc(75vh /* 这里减去你的顶部导航栏高度和底部TabBar高度 */);
  overflow-y: auto; /* 启用垂直滚动条 */
}

/* 如果你想自定义滚动条的样式，可以在这里添加更多的CSS */
.scrollable-container::-webkit-scrollbar {
  width: 1px; /* 滚动条宽度 */
}

.scrollable-container::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, .2); /* 滚动条颜色 */
  border-radius: 3px; /* 圆角 */
}

.scrollable-container::-webkit-scrollbar-track {
  background-color: transparent; /* 轨道颜色 */
}
</style>