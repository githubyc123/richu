<template>
  <div style="width:100%;">
    <template>
      <!-- HTML -->
      <div class="home">
        <!-- 头部介绍 -->
        <div class="header">
          <h1>jQuery</h1>
          <p>jQuery</p>
          <span>
            jQuery是一个快速、简洁的JavaScript框架，是继Prototype之后又一个优秀的JavaScript代码库（框架）于2006年1月由John Resig发布。jQuery设计的宗旨是“write Less，Do More”，即倡导写更少的代码，做更多的事情。它封装JavaScript常用的功能代码，提供一种简便的JavaScript设计模式，优化HTML文档操作、事件处理、动画设计和Ajax交互。
          </span>
        </div>
        
        <!-- 循环体 -->
        <a v-for="(item,i) in jquery" :key="i">
          <div class="left">
            <img v-lazy="item.cover" alt="">
          </div>
          <div class="right">
            <h3>
              <!-- {{item.title}} -->
              待更新
            </h3>
            <span>
              <!-- {{item.shortTitle}} -->
              待更新
            </span>
            <span v-show="webwidth>700">
              <!-- {{item.t1}} -->
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
      jquery:[],
      webwidth:''
    }
  },
  mounted(){
    // 获取宽度
    this.webwidth=document.documentElement.clientWidth;
    //html
    this.axios.get( `${host}/jquery`).then(res=>{
      this.jquery=res.data.results;
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
