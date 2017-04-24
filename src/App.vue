<template>
  <div id="app">
    <img src="./assets/logo.png"><br/>
    导航列表：<br/>
    <router-link to='/'>cropper</router-link><br/>
    <router-link to='/hello'>hello页面</router-link>
    <div>==========下面是具体内容===========</div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
