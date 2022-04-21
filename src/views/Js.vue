<template>
  <div style="width:100%;">
    <template>
      <!-- JS -->
      <div class="home">
        <!-- 头部介绍 -->
        <div class="header">
          <h1>JavaScript</h1>
          <p>JavaScript行为效果交互</p>
          <span>
            通过HTML内容信息结构布局及CSS排版定位视觉渲染之后，接下来就需要JavaScript脚本语言闪亮登场了。JavaScript属于客户端的脚本语言，与HTML页面进行动态交互；一定程度上它也是客户端与服务器端沟通的一座桥梁。随着事物的发展变化，如今ECMAScript则为其标准，如同HTML与HTML5、CSS与CSS3一般升级、统一及标准化变迁。同样，这也是web前端开发者应具备了解且熟练应用的脚本语言。
          </span>
        </div>
        <!-- 循环体 -->
        <a :href="`/#/jspage/${item.id}`" v-for="(item,i) in js" :key="i">
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
      <!-- VUE -->
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
      js:[],
      webwidth:''
    }
  },
  mounted(){
    // 获取宽度
    this.webwidth=document.documentElement.clientWidth;
    //js
    this.axios.get( `${host}/js`).then(res=>{
      this.js=res.data.results;
      // console.log(this.js[0]);
    });

  },
  methods:{
  }
}
</script>
<style scoped>
@import url('./../css/web/web.css');
</style>
