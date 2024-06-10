<script setup>

</script>

<template>
  <van-calendar
      title="打卡日历"
      :poppable="false"
      :show-confirm="false"
      :style="{ height: '50vh' }"
  />
  <center>
    <van-button type="success" class="check">打卡</van-button>
  </center>
</template>

<style scoped>
.check {
  margin: 50px;
  /* 设定宽高宽一致，形成正方形 */
  width: 100px;
  height: 100px;

  /* 边圆角半径为50%，形成圆形 */
  border-radius: 50%;

  /* 其他样式，比如背景色、字体、边框阴影等 */
  border: none; /* 移除边框 */
  cursor: pointer; /* 鼠指针样式 */
  transition: all 0.3s; /* 动画过渡 */
}
</style>