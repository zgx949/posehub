<script setup>
import {onMounted, ref,} from 'vue'
import { showToast } from 'vant'
import { useRouter } from 'vue-router'
const router = useRouter()
onMounted(() => {
  router.push({path: `/home`})
})

const active = ref('home')
const select = (name) => {
  showToast(`标签 ${name}`)
  router.push({path: `/${name}`})
}
</script>

<template>
  <router-view />
  <van-tabbar v-model="active" @change="select">
    <van-tabbar-item icon="home-o" name="home">首页</van-tabbar-item>
    <van-tabbar-item icon="search" name="posehub">动作库</van-tabbar-item>
    <van-tabbar-item icon="friends-o" name="discuss">讨论</van-tabbar-item>
    <van-tabbar-item icon="setting-o" name="me">我的</van-tabbar-item>
  </van-tabbar>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
