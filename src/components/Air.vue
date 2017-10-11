<template>
<div class="air" id="test">
    <p style="text-align:left; color:#355577">海外航空券検索</p>
    <header>
        <table class="search-tabs">
            <td><router-link to="/air">往復</router-link></td>
            <td><router-link to="/air/oneway">片道</router-link></td>
            <td><router-link to="/air/multi-city">周遊</router-link></td>
            <td><router-link to="/air/abroad">海外発着</router-link></td>
            <router-view></router-view>
        </table>
    </header>
    <div class="search-panel">
    <table>
        <tr>
            <td><a id="depature" class="search-item">出発地</a></td>
            <td><a class="search-item">目的地</a></td>
        </tr>
            <tr><a class="search-item">日程</a></tr>
            <tr><button class="search-item">大人、子供、幼児の人数表示</button></tr>
    </table>
        <p>詳細オプション</p>
        <div>
            <button class="button">検索する</button>
            <button class="button">得セット割で検索する</button>
        </div>
    </div>

<!--テストコード-->
    <div id="app">
        <button id="show-modal" @clisk="showModal = true">Show Modal</button>
        <modal v-if="showModal" @close="showModa = false">
        <h3>custom header</h3>
        </modal>
    </div>
<!--テストコード-->

    <footer>
        <div>
            <router-link to="./">Back</router-link>
        </div>
    </footer>
</div>
</template>

<scirpt>
Vue.component('modal', {
    template: '#modal-template'
})

new Vue({
    el: '#app',
    data: {
        showModal: false
    }
})
</scirpt>

<style>
.body{
    text-align:center;
}
.air{
    text-align:center;
    padding: 10px;
    background: #ece8e8;
}
.search-tabs{
    display: table;
    table-layout: fixed;
    overflow: hidden;
    margin-top: 10px;
    width: 100%;
    border: solid 1px #999;
    border-radius: 4px;
    background: #fff;
}
.search-panel{
    flex-wrap:wrap;
    margin-top:10px;
    padding:15px;
    border:solid 1px #355577;
    border-radius: 2px;
    box-shadow: 0 1px 4px rgba(0,0,0,0.14);
    background: #fff;
}

.search-item{
    position: relative;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 10px 0;
    width: 100%;
    height: 48px;
    border: solid 1px #355577;
    background: #c8e0fa;
    font-size: 11px;
    font-size: 1.1rem;
    font-weight: 600;
    letter-spacing: .02em;
    border-radius: 4px;
}

.button-area{
    margin-top: 15px;
}
.button{
    position: relative;
    display: inline-block;
    margin-bottom: 4px;
    width: 100%;
    border-radius: 4px;
    font-size: 16px;
    font-size: 1.6rem;
    font-weight: 600;
    text-align: center;
    color: #fff;
    line-height: 50px;
    thansition: none;
    border: 1px solid #2766a8;
    background-color: #355577;
    background-image: linear-gradient(to bottom, #4684c7, #3270b3);
    box-shadow: inset 1px 1px 0 rgba(255, 255, 255, 0.4), 0 4px #20548c;
    letter-spacing: .12em;
}

.modal {
  display: block;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 3;
  width: 96%;
  max-width: 300px;
  height: 30vh;
  margin: auto;
  padding: 30px;
  border: 1px solid #eee;
  border-radius: 5px;
  background-color: #fff;
  text-align: center;
  visibility: hidden;
  opacity: 0;
  -webkit-transition: .2s;
  transition: .2s;
}
 
.bg {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,.6);
  visibility: hidden;
  opacity: 0;
  -webkit-transition: .3s;
  transition: .3s;
}
 
.show {
  visibility: visible;
  opacity: 1;
}


</style>