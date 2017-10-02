<template>
<div class="air">
    <p style="text-align:left; color:#355577">海外航空券検索</p>
    <div>
        <router-link to="/air">往復</router-link>
        <router-link to="/air/oneway">片道</router-link>
        <router-link to="/air/multi-city">周遊</router-link>
        <router-link to="/air/abroad">海外発着</router-link>
        <router-view></router-view>
    </div>
    <div class="search-panel">
        <div id="condition" class="search-item" v-for="cod in condition">
        {{cod.name}}
        </div>
    </div>
    <footer><router-link to="/">Back</router-link></footer>
</div>
</template>

<scirpt>
export default {
    name: 'condition',
    props: {
        str: String
    },
    computed: {
        message () {
            return 'Hello' + (this.str || 'World')
        }
    },
    data:{
        total: 0,
        condition: [
            {name: '出発地'},
            {name: '目的地'},
            {name: '日程'}
        ]
    }
}
</scirpt>

<style>
.body{
    text-align:center;
}
.air{
    text-align:center;
}
.search-tabs{
    display: table;
    overflow: hidden;
    margin-top: 10px;
    width: 10%;
    border: solid 1px #999;
    border-radius: 4px;
}
.search-panel{
    margin-top:10px;
    padding:15px;
    border:solid 1px #355577;
    border-radius: 2px;
    box-shadow: 0 1px 4px rgba(0,0,0,0.14);
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
</style>