<template>
  <div style="width:100%;">
    <!-- CSS -->
    <div class="home">
      <!-- 头部介绍 -->
      <div class="header">
        <h1>Vue</h1>
        <p>SPA单页Web应用</p>
        <span>
          通过HTML、CSS及JavaScript学习及实践应用，为了进一步提高工作效率、数据信息渲染、用户体验等等诸多“借口”，进而衍生出web前端框架，Vue就是其中之一，升级的目的也是与时俱进，为其表现得更为友好而已；这也就说所谓的单页Web应用（SPA）,市面上的前端框架很多，不论学习哪一个，HTML、CSS与JavaScript依然是基础，基础扎实了，能够进一步学好每一个前端框架。
        </span>
      </div>
      <!-- 循环体 -->
      <a :href="`/#/vuepage/${item.id}`" v-for="(item,i) in vue" :key="i">
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
  data(){
    return{
      vue:[],
      webwidth:''
    }
  },
  mounted(){
    // 获取宽度
    this.webwidth=document.documentElement.clientWidth;
    
    //css
    this.axios.get( `${host}/vue`).then(res=>{
      this.vue=res.data.results;
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
