<template>
  <div style="width:100%;">
    <template>
      <!-- HTML -->
      <div class="home">
        <!-- 头部介绍 -->
        <div class="header">
          <h1>Bootstrap</h1>
          <p>Bootstrap响应式网页</p>
          <span>
            简单、灵活的用于搭建WEB页面的HTML，CSS，JavaScript的工具集。它是基于HTML 5和CSS 3，它是简洁强大的前端开发框架。让Web开发更迅速，更简单。 
          </span>
        </div>
        
        <!-- 循环体 -->
        <a :href="`/#/bootpage/${item.id}`" v-for="(item,i) in boot" :key="i">
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
      boot:[],
      webwidth:''
    }
  },
  mounted(){
    // 获取宽度
    this.webwidth=document.documentElement.clientWidth;
    //html
    this.axios.get( `${host}/boot`).then(res=>{
      this.boot=res.data.results;
      // console.log(this.boot[0]);
    });
  },
  methods:{
  }
}
</script>
<style scoped>
@import url('./../css/web/web.css');
</style>
