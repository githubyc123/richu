
<template>
  <div>
      <!-- 电脑端头部  -->
      <div v-if="headerwidth>550" class="header">
        <img class="logo1" src="../assets/richu/logo.jpg" alt="">
        <router-link to="/">首页</router-link>
        <a>
          <el-dropdown>
            <span class="el-dropdown-link">
              前端<i class="el-icon-arrow-down el-icon--left"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <router-link to="/html"><el-dropdown-item>Html</el-dropdown-item></router-link>
              <router-link to="/css"><el-dropdown-item>Css</el-dropdown-item></router-link >
              <router-link to="/js"><el-dropdown-item>JS</el-dropdown-item></router-link>
              <router-link to="/boot"><el-dropdown-item >bootstrap</el-dropdown-item></router-link>
              <router-link to="/jquery"><el-dropdown-item>JQuery</el-dropdown-item></router-link>
              <router-link to="/vue"><el-dropdown-item>Vue</el-dropdown-item></router-link>
              <el-dropdown-item disabled>Angular</el-dropdown-item>
              <el-dropdown-item disabled>React</el-dropdown-item>
              
              <!-- <el-dropdown-item divided>蚵仔煎</el-dropdown-item> -->
            </el-dropdown-menu>
          </el-dropdown>
        </a>
        <router-link to="/mysql">数据库</router-link>
        <a>
          <el-dropdown>
            <span class="el-dropdown-link">
              后端<i class="el-icon-arrow-down el-icon--left"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <router-link to="/nodejs"><el-dropdown-item>Nodejs</el-dropdown-item></router-link>
              <el-dropdown-item disabled>Python</el-dropdown-item>
              <router-link to="/music"><el-dropdown-item>music</el-dropdown-item></router-link>
            </el-dropdown-menu>
          </el-dropdown>
        </a>
        
        <!-- <a href="">后端知识</a> -->
        <!-- <router-link to="/">首页</router-link>
        <router-link to="/html">Html</router-link>
        <router-link to="/css">Css</router-link >
        <router-link to="/js">JS</router-link>
        <router-link to="/">MySQL</router-link>
        <router-link to="/">Vue</router-link>
        <router-link to="/">Angular</router-link>
        <router-link to="/">React</router-link>
        <router-link to="/">JQuery</router-link>
        <router-link to="/">NodeJs</router-link>
        <router-link to="/">Python</router-link> -->
        <!-- <a href="/">主页</a> -->
        <!-- <router-link to="/web">各种教程</router-link> -->
        <!-- <router-link to="/game">炫舞链接</router-link > -->
        <!-- <router-link to="/music">待整理</router-link> -->
        <!-- <router-link to="/tv">游戏</router-link> -->
        <input v-show="headerwidth>700" class="input1" type="text" v-model="input1" value="" placeholder="搜一下，如侵权请联系站长删除" >
        <!-- <button @click="btn1">biu</button> -->
        <a v-show="headerwidth>700" id="button" href="#">biu</a>


        <a id="zhanwei" v-show="headerwidth>1400"></a>

        <span class="topyy" v-show="headerwidth>840">联系qq:897094685 </span>
        <span class="topyy" v-show="headerwidth>920" style="padding-right:20px"> yy:6054888</span>

        <!-- <Baidu :wd="input1"></Baidu> -->
      </div>
      <!-- 电脑端头部结束 -->
      <!-- 手机端头部 -->
      <div class="phoneheader" v-else>
        <h2>超超说事
          <!-- <span style="margin:0 auto;text-align:center;font-size:14px;line-height:20px;color:#cc9;">{{newdate|date}}</span> -->
        </h2>
        <van-cell class="tab" @click="showPopup"><div>菜单</div></van-cell>
        <van-popup v-model="show" position="left" :style="{ height:'100%',width: '50%',backgroundColor:'#eee' }">
          <!-- logo -->
          <img src="./../assets/richu/logo3.jpg" alt="">
          <h3>超超说事</h3>
          <p style="">{{newdate | date}}</p>
          <!-- 各图标 -->
          <div class="icon">
            <a href="tel:15230626091">
              <img src="./../assets/richu/phone.png" alt="">
            </a>
            <a href="sms:15230626091">
              <img src="./../assets/richu/sms.png" alt="">
            </a>
            <a href="http://wpa.qq.com/msgrd?v=3&amp;uin=897094685&amp;site=qq&amp;menu=yes">
              <img src="./../assets/richu/qq.png" alt="">
            </a>
          </div>
          <!-- <van-search style="margin:0;background-color:rgb(238, 238, 238)" v-model="value" placeholder="请输入搜索关键词" /> -->
          <!-- 跳转 -->
          <div class="list">
              <a @click="ato('/')"><van-icon name="wap-home-o" />首页</a>
              <a @click="ato('/html')">Html</a>
              <a @click="ato('/css')">Css</a>
              <a @click="ato('/js')">JS</a>
              <a @click="ato('/mysql')">MySQL</a>
              <a @click="ato('/boot')">Bootstrap</a>
              <a @click="ato('/jquery')">JQuery</a>
              <a @click="ato('/vue')">Vue</a>
              <a @click="ato('/nodejs')">Nodejs</a>
              <a style="color:#bbb;">Angular(待整理)</a>
              <a style="color:#bbb;">React(待整理)</a>
              <a style="color:#bbb;">Python(待整理)</a>
          </div>

        </van-popup>





        <!-- 老版菜单（遮罩层） -->
        <!-- <van-overlay :show="show" @click="show = false"> -->
          <!-- <div class="list"> -->
            <!-- <div class="block" /> -->
              <!-- <router-link to="/html">Html</router-link> -->
              <!-- <router-link to="/css">Css</router-link> -->
              <!-- <router-link to="/js">JS</router-link> -->
              <!-- <router-link to="/mysql">MySQL</router-link> -->
              <!-- <router-link to="/boot">Bootstrap</router-link> -->
              <!-- <router-link to="/jquery">JQuery</router-link> -->
              <!-- <router-link to="/vue">Vue</router-link> -->
              <!-- <router-link to="/nodejs">Nodejs</router-link> -->
              <!-- <a style="color:#bbb;">Angular</a> -->
              <!-- <a style="color:#bbb;">React</a> -->
              <!-- <a style="color:#bbb;">Python</a> -->
              <!-- <a>关闭</a> -->
          <!-- </div> -->
        <!-- </van-overlay> -->
        <!-- <van-button class="tab" type="primary" text="" @click="show = true"><div>菜单</div></van-button> -->
        <!-- <van-overlay :show="show" @click="show = false" /> -->
        <!-- 右侧返回主页 -->
        <button @click="phonebtn" class="right-header">首页</button>

      </div>
      <!-- 手机端头部结束 -->

      







      <!-- 右下角qq -->
      <div v-show="pass==true" class="cal">
          
          <!-- QQ图标 -->
        <div class="qq_img">
          <a target="_blank" title="QQ在线客服" href="http://wpa.qq.com/msgrd?v=3&amp;uin=897094685&amp;site=qq&amp;menu=yes">
            <div>
              <img class="qqtubiao" src="./../assets/richu/qq.png" alt="">
            </div>
            <span style="color:#0aa1ed;font-size:12px;line-height:15px;margin:0 auto;text-align:center;"> QQ在线咨询</span>
          </a>
            <!-- 二维码 -->
          <div class="erweima">
            <img src="./../assets/richu/erweima.png" alt="">
          </div>
        </div>
        <!-- QQ号 -->
        <div>
            <div> 
              <span style="margin-top:8px;color:#aa0000;font-size:12px;text-align:center;line-height: 0px;">如有侵权</span><br>
              <span style="margin-bottom:8px;color:#aa0000;font-size:12px;text-align:center;line-height: 0px;">请联系删除</span>
              <span style="color:#00f;font-size:13px;text-align:center;line-height:15px;">{{newdate|date}}</span>
            </div>
            
            <button title="点击关闭" class="btn2" @click="guanbi()">
              关 闭
            </button>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  components:{
  },
  data(){
    return{
      value: '',//手机搜索框
      pass:true,
      input1:'',
      headerwidth:'',
      url:"",
      show: false,
      h1:'主页',
      newdate:''
    }
  },
  mounted(){
    this.headerwidth=document.documentElement.clientWidth;
    // console.log('header'+this.headerwidth);
    
    window.onresize = () => {
      this.headerwidth = document.documentElement.clientWidth;
      console.log(this.headerwidth);
      // console.log('动态header'+this.headerwidth);
      return this.headerwidth;
    };
    // this.headerwidth=document.documentElement.clientWidth;
    // console.log(this.headerwidth);

    //当前页url
    this.url=window.location.hash.substring(2);
    // console.log('当前url'+this.url);\


    //等到当前时间的毫秒数
    // this.newdate=(new Date()).getTime();
    setInterval(()=>{
      this.newdate=Date.now()
    },1000)
    
    // console.log((new Date("2022/07/09 14:13:11")).getTime());
    //1657347191000

  },
  
  methods:{
    ato(a){ //手机端菜单跳转各页面
      if(location.hash.slice(1)!==a){
        this.$router.push(`${a}`);
        this.show=false;
      }else{
        this.show=false;
      }
    },
    showPopup() {//关闭右下角联系方式
      this.show = true;
    },
    guanbi(){
      this.pass=false;
    },
    // btn1(){
    // },
    phonebtn(){
      if(location.hash.slice(1)!=='/'){
        this.$router.replace('/');
      }      
    }
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  text-decoration: none;
}
.phoneheader>h2{
  background-color: rgba(80, 128, 184,0.8);
  padding: 20px 0;
  color: #fff;
  position: relative;
}
.tab,.right-header{
  position: absolute;
  /* position: fixed; */
  top: 22px;
  height: 28px;
  font-size: 14px;
  /* font-weight: bold; */
  background-color: rgba(80, 128, 184,0.4);
  border:1px solid #ccc;
  border-radius: 6px;
  color: #fff !important;
}
.tab{
  left: 8px;
  width: 60px;
  padding: 0;
  /* color: #fff !important; */
  line-height: 28px;
  cursor: pointer;
}
.van-popup>img{
  width:50%;
  height:auto;
  margin:18px auto 3px;
  border-radius:50%
}
.van-popup>p{
  text-align:center;
  font-size:16px;
  padding-top:5px;
}
.van-popup>.icon{
  padding:8px 8%;display:flex;justify-content: space-around;
}
.icon>a>img{
  width:auto;height:33px;border-radius:50%;
}
.tab div{
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 14px;
  color: #fff !important;
}
.right-header{
  right: 8px;
  width: 60px;
  line-height: 25px;
}
/* 输入框 */
/* .van-field__control{
  background-color: rgb(238, 238, 238);
} */
/* 遮罩层 */
.van-overlay{
  background-color: rgba(0, 0, 0, 0.15);
}
.list {
  /* display: flex; */
  /* align-items: left; */
  /* justify-content: top; */
  /* height: 100%; */
  /* z-index:5; */
  /* flex-direction:column; */
  /* position: fixed;
  top: 1px;
  left: 1px; */
  /* margin-top: 71px; */
  /* margin-left: -3px; */
  width: 100%;
}
.list>:last-child{
  /* border-bottom-right-radius: 8px; */
}
.list>a {
  display: block;
  width: 100%;
  line-height: 38px;
  height: 38px;
  /* background-color: rgba(159, 159, 159,0.96); */
  color: rgba(90, 94, 100, 0.949);
  font-size: 18px;
  font-weight: bolder;
  cursor: pointer;
  z-index:5;
  
  /* border-left: 1px solid #999; */
  /* border-right: 1px dashed #222; */
  padding: 1px 0;
  border-bottom: 1px dashed rgb(218, 218, 218);
}









/* .el-dropdown-link{
  display: block;
  color: #fff;
} */
/* 电脑端菜单悬浮样式 */
.el-dropdown-link:hover{
   /* font-size: 16px; */
  color:rgb(101, 241, 8);
  transition: 0.2s;
  background-color: rgb(61, 134, 202);
}

/* 下拉菜单背景色 */
.el-dropdown-menu{
  width: 95px;
  text-align: center;
  border-radius: 6px;
  /* background-color: #ece5e5f7; */
}


/* .home{
  width: 100%;
} */
.header{
  /* position: relative; */
  /* position:fixed; */
  padding: 0;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: left;
  /* min-width: 551px; */
  height: 70px;
  font-size: 12px;
  margin: 0 auto;
  color: #fff;
  background-color: rgba(80, 128, 184,0.8);
  line-height: 70px;
  font-size: 16px;
  font-weight: bolder;
  /* top: 0%; */
  /* left: 0%; */
}
.logo1{
  font-size: 30px;
  line-height: 70px;
}
.header a,.el-dropdown-link{
  display: block;
  min-width:66px;
  line-height: 70px;
  padding:0px 0px !important;
  color: #fff;
  font-size: 15px;
  font-weight: bolder;
  margin: 0 auto;
  text-align: center;
  /* background-image: url(./../assets/8pc.jpg); */
  /* background-repeat: no-repeat; */
  /* background-size: 100% -100%; */
}
.header a:hover,.el-dropdown-link:hover{
  font-size: 16px;
  color:rgb(101, 241, 8);
  transition: 0.2s;
  background-color: rgb(61, 134, 202);
  /* background-size: 100% 100%; */
  /* background-color:#000000; */
}
#zhanwei:hover{
  background-color: rgba(80, 129, 184, 0);
}
.header img{
  display: block;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  margin: 5px;
}
.header input{
  width: 26%;
  min-width: 200px;
  height: 30px;
  padding: 0 5px;
  font-size: 14px;
  text-align: center;
  color:#05050f;
  margin: 20px 0px 0px 0px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border: #fff;
}
input:active{
  border: #fff;
}
#button{
  display: block;
  width: 6%;
  min-width: 38px;
  height: 30px;
  font-size: 16px;
  color: #fff;
  background-color: #0aa1ed;
  margin: 20px 0 0px 0;
  margin-right: 5%;
  border: #fff;
  padding: 0 8px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  line-height: 30px;
}
#button:hover{
  font-size: 19px;
  transition: 0.3s;
  background-color: #1c55c0;
}

.topyy{
  /* background-image: -webkit-linear-gradient(left, blue, #66ffff 10%, #cc00ff 20%, #CC00CC 30%, #CCCCFF 40%, #00FFFF 50%, #CCCCFF 60%, #CC00CC 70%, #CC00FF 80%, #66FFFF 90%, blue 100%); */
  /* -ms-      ie内核*/
  /* -o-       欧鹏内核*/
  /* -moz-     火狐内核*/
  /* -webkit-  谷歌内核*/
  background-image: -ms-linear-gradient(left, #edd60a 0%, #f3120a 20%, #05050f 40%, #7aec0f 60%,#CC00FF 80%, #9a9a9a 100%);
  background-image: -o-linear-gradient(left, #edd60a 0%, #f3120a 20%, #05050f 40%, #7aec0f 60%,#CC00FF 80%, #9a9a9a 100%);
  background-image: -moz-linear-gradient(left, #edd60a 0%, #f3120a 20%, #05050f 40%, #7aec0f 60%,#CC00FF 80%, #9a9a9a 100%);
  background-image: -webkit-linear-gradient(left, #edd60a 0%, #f3120a 20%, #05050f 40%, #7aec0f 60%,#CC00FF 80%, #9a9a9a 100%);
  
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-background-size: 200% 100%;
  -webkit-animation: masked-animation 4s linear infinite;
  font-size: 12px;
  font-weight: bold;

  padding-right: 20px;
  line-height: 120px;
  /* padding-left: 15px; */
}
/* .topyy:hover{
  font-size: 13px;
  transition: 0.2s;
} */
.cal{
  position:fixed;
  background-color: rgba(83, 80, 80, 0.288);
  border-radius: 13px ;
  right: 5px;
  bottom: 15%;
  padding:10px 5px;
  width: 70PX;
}
.qq_img{
  /* border-radius: 50%; */
  cursor: pointer;
}
.qqtubiao{
  width: 40px;
  position: relative;
}
.qqtubiao:hover{
  width: 42px;
  transition: 0.2s;
}
.erweima{
  position:absolute;
  background-color: rgba(83, 80, 80, 0.288);
  border-radius: 13px ;
  right: 85px;
  bottom: 19%;
  padding:10px 5px;
  display: none;

}
.erweima img{
  width: 90px;
  border-radius: 3px;
}
.qq_img:hover .erweima{
  display: block;
}
.btn2{
  margin-top: 6px;
  width: 50%;
  height: 23px;
  /* padding: 0 3px 2px; */
  border: 0;
  border-radius: 5px;
  color: #fff;
  font-size: 12px;
  /* font-weight: 700; */
  cursor: pointer;
  background-color: rgba(255, 0, 0, 0.5);

}
.btn2:hover{
  background-color: #f00;
  font-size: 13px;
  font-weight: bolder;
  /* padding: 0 3px 0; */
  color: #fcfdfd;
}
</style>
