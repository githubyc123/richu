<template>
  <div style="width:100%;">
    <!-- CSS -->
    <div class="home">
      <!-- 头部介绍 -->
      <div class="header">
        <h1>CSS</h1>
        <p>CSS3视觉结构优化控制</p>
        <span>
          HTML语言对其内容信息作以布局归属同时或之后，就需要通过CSS对其元素进行像素级的控制与修饰，已达到最友好的视觉体验效果。CSS3也是对其原CSS的一种升级与拓展，更为充分的渲染页面提升页面性能。同时，这也是web前端开发者应具备了解且熟练应用的计算机语言。
        </span>
      </div>
      <!-- 循环体 -->
      <a :href="`/#/csspage/${item.id}`" v-for="(item,i) in css" :key="i">
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
  </div>
</template>
<script>
import { host } from '@/main.js'
export default {
  name: '',
  components: {
  },
  // props:[
  //   'wd'
  // ],
  data(){
    return{
      css:[],
      webwidth:''
    }
  },
  mounted(){
    // 获取宽度
    this.webwidth=document.documentElement.clientWidth;
    
    //css
    this.axios.get( `${host}/css`).then(res=>{
      this.css=res.data.results;
      // console.log(this.css[0]);
    });
    

  },
  methods:{
    handleClick(tab, event) {
        console.log(tab, event);
      }
  }
}
</script>
<style scoped>
@import url('./../css/web/web.css');
</style>
