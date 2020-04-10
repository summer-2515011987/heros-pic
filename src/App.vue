<template>
  <div id="app">
    <!-- AppHeader -->
    <!-- 3使用AppHeader.vue组件 -->
    <app-header></app-header>
    <!-- AppSlider -->
    <app-slider></app-slider>
  </div>
</template>

<script>
// 1.导出AppHeader.vue
import AppHeader from "./components/AppHeader.vue";
// 导入AppSlider.vue组件
import AppSlider from "./components/AppSlider.vue";

export default {
  name: "App",
  components: {
    //2.注册AppHeader.vue组件
    AppHeader,
    AppSlider
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
