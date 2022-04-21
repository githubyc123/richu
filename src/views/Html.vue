<template>
  <div style="width:100%;">
    <template>
      <!-- HTML -->
      <div class="home">
        <!-- 头部介绍 -->
        <div class="header">
          <h1>HTML</h1>
          <p>HTML5语义标签布局</p>
          <span>
            HTML是构建页面的一种标记性语言，非文本元素，我们可以将其理解为“容器”，一种对页面信息内容进行描述的容器；而对于HTML5属于其升级版亦或拓展版，进一步对信息内容作以加强性描述，通过标记符号显示网页中各个部分，告诉人和机器信息内容的归属域；起到一个简化、增强、可识别以及可扩展的超文本标记语言。同时这也是web前端开发者应具备了解的基础语言。
          </span>
        </div>
        
        <!-- 循环体 -->
        <a :href="`/#/htmlpage/${item.id}`" v-for="(item,i) in html" :key="i">
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
      html:[],
      webwidth:''
    }
  },
  mounted(){
    // 获取宽度
    this.webwidth=document.documentElement.clientWidth;
    //html
    this.axios.get( `${host}/html`).then(res=>{
      this.html=res.data.results;
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
