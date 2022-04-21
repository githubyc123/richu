<template>
  <div style="width:100%;">
    <template>
      <!-- HTML -->
      <div class="home">
        <!-- 头部介绍 -->
        <div class="header">
          <h1>MySQL</h1>
          <p>MySQL</p>
          <span>
            MySQL是一个关系型数据库管理系统，由瑞典MySQL AB 公司开发，属于 Oracle 旗下产品。MySQL 是最流行的关系型数据库管理系统之一，在 WEB 应用方面，MySQL是最好的 RDBMS (Relational Database Management System，关系数据库管理系统) 应用软件之一。
          </span>
        </div>
        
        <!-- 循环体 -->
        <a :href="`/#/mysqlpage/${item.id}`" v-for="(item,i) in mysql" :key="i">
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
      mysql:[],
      webwidth:''
    }
  },
  mounted(){
    // 获取宽度
    this.webwidth=document.documentElement.clientWidth;
    //html
    this.axios.get( `${host}/mysql`).then(res=>{
      this.mysql=res.data.results;
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
