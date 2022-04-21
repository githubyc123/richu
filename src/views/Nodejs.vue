<template>
  <div style="width:100%;">
    <template>
      <!-- HTML -->
      <div class="home">
        <!-- 头部介绍 -->
        <div class="header">
          <h1>Node.js</h1>
          <p>Node.js</p>
          <span>
            Node.js发布于2009年5月，由Ryan Dahl开发，是一个基于Chrome V8引擎的JavaScript运行环境，使用了一个事件驱动、非阻塞式I/O模型， [1]  让JavaScript 运行在服务端的开发平台，它让JavaScript成为与PHP、Python、Perl、Ruby等服务端语言平起平坐的脚本语言。 [2] 
Node.js对一些特殊用例进行优化，提供替代的API，使得V8在非浏览器环境下运行得更好，V8引擎执行Javascript的速度非常快，性能非常好，基于Chrome JavaScript运行时建立的平台， 用于方便地搭建响应速度快、易于扩展的网络应用。
          </span>
        </div>
        
        <!-- 循环体 -->
        <a v-for="(item,i) in nodejs" :key="i">
          <div class="left">
            <img v-lazy="item.cover" alt="">
          </div>
          <div class="right">
            <h3>{{item.title}}</h3>
            <span>
              {{item.shortTitle}}
            </span>
            <span v-show="webwidth>700">
              {{item.t1}}
            </span>
          </div>
        </a>
      </div>
      <!-- CSS -->
    </template>
  </div>
</template>

<script>
import { host } from '@/main.js'
export default {
  name: '',
  components: {
  },
  data(){
    return{
      nodejs:[],
      webwidth:''
    }
  },
  mounted(){
    // 获取宽度
    this.webwidth=document.documentElement.clientWidth;
    //html
    this.axios.get( `${host}/nodejs`).then(res=>{
      this.nodejs=res.data.results;
      // console.log(this.html[0]);
    });
  },
  methods:{
  }
}
</script>
<style scoped>
@import url('./../css/web/web.css');
</style>
