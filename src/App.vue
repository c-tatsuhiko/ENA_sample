<template>
  <div id="app">
    <header class="hoge">
    <p>ヘッダー</p>
    </header>

    <div>
      <router-link to="/air">海外航空券</router-link>
      <router-link to="/tour">航空券+ホテル</router-link>
      <router-link to="/hotel">海外ホテル</router-link>
      <router-link to="/kokunai">国内航空券</router-link>
      <router-view></router-view>
    </div>
    <footer class="hoge">
    <p>フッター</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
.body{
  margin:0;
  padding:0;
}
.hoge{
  background-color: #0000;
  color: #fff;
  padding: 10px 0;
  text-align: center;
}
.h1{
  margin:0;
  font-size:30px;
}
</style>
