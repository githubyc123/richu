<template>
  <div style="width:100%;">
    <template>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <!-- HTML -->
        <el-tab-pane label="html" name="first">
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
                <img src="./../assets/web/html.jpg" alt="">
              </div>
              <div class="right" style="width:60%;">
                <h3>{{item.title}}</h3>
                <span>
                  {{item.shortTitle}}
                </span>
                <span v-show="webwidth>700"><br>
                  {{item.t1}}
                </span>
              </div>
            </a>
          </div>
        </el-tab-pane>
        <!-- CSS -->
        <el-tab-pane label="css" name="second">
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
                <img src="./../assets/web/css.jpg" alt="">
              </div>
              <div class="right" style="width:60%;">
                <h3>{{item.title}}</h3>
                <span>
                  {{item.shortTitle}}
                </span>
                <span v-show="webwidth>700"><br>
                  {{item.t1}}
                </span>
              </div>
            </a>
          </div>
        </el-tab-pane>
        <!-- JS -->
        <el-tab-pane label="js" name="third">
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
                <img src="./../assets/web/js.jpg" alt="">
              </div>
              <div class="right" style="width:60%;">
                <h3>{{item.title}}</h3>
                <span>
                  {{item.shortTitle}}
                </span>
                <span v-show="webwidth>700"><br>
                  {{item.t1}}
                </span>
              </div>
            </a>
          </div>
        </el-tab-pane>
        <!-- VUE -->
        <el-tab-pane label="vue" name="fourth">
          <div class="home">
            <!-- 头部介绍 -->
            <div class="header">
              <h1>Vue</h1>
              <p>SPA单页Web应用</p>
              <span>
                通过HTML内容信息结构布局及CSS排版定位视觉渲染之后，接下来就需要JavaScript脚本语言闪亮登场了。JavaScript属于客户端的脚本语言，与HTML页面进行动态交互；一定程度上它也是客户端与服务器端沟通的一座桥梁。随着事物的发展变化，如今ECMAScript则为其标准，如同HTML与HTML5、CSS与CSS3一般升级、统一及标准化变迁。同样，这也是web前端开发者应具备了解且熟练应用的脚本语言。
              </span>
            </div>
            <!-- 循环体 -->
            <a :href="`/#/vuepage/${item.id}`" v-for="(item,i) in 9" :key="i">
              <div class="left">
                <img src="./../assets/web/vue.jpg" alt="">
              </div>
              <div class="right" style="width:60%;">
                <h3>VUE</h3>
                <span>
                  正在更新数据库，稍后将替换全部内容
                </span>
              </div>
            </a>
          </div>
        </el-tab-pane>
        <!-- angular -->
        <el-tab-pane label="angular" name="fifth">
          <div class="home">
            <!-- 头部介绍 -->
            <div class="header">
              <h1>Angular</h1>
              <p>SPA单页Web应用</p>
              <span>
                通过HTML、CSS及JavaScript学习及实践应用，为了进一步提高工作效率、数据信息渲染、用户体验等等诸多“借口”，进而衍生出web前端框架，Angular就是其中之一，这里就不对angular1.x（angularJs）做说明了，我们就从Angular2 开始，目前已经Angular13.x，升级的目的也是与时俱进，为其表现得更为友好而已；这也就说所谓的单页Web应用（SPA）,市面上的前端框架很多，不论学习哪一个，HTML、CSS与JavaScript依然是基础，基础扎实了，能够进一步学好每一个前端框架。
              </span>
            </div>
            <!-- 循环体 -->
            <a v-for="(item,i) in 9" :key="i">
              <div class="left">
                <img src="./../assets/web/html.jpg" alt="">
              </div>
              <div class="right" style="width:60%;">
                <h3>angular</h3>
                <span>
                  正在更新数据库，稍后将替换全部内容
                </span>
              </div>
            </a>
            
          </div>
        </el-tab-pane>
        <!-- REACT -->
        <el-tab-pane label="react" name="sixth">
          <div class="home">
            <a v-for="(item,i) in 9" :key="i">
              <div class="left">
                <img src="./../assets/web/css.jpg" alt="">
              </div>
              <div class="right" style="width:60%;">
                <h3>NODEJS</h3>
                <span>
                  正在更新数据库，稍后将替换全部内容
                </span>
              </div>
            </a>
          </div>
        </el-tab-pane>
        <!-- MYSQL -->
        <el-tab-pane label="mysql" name="seventh">
          <div class="home">
            <!-- 头部介绍 -->
            <div class="header">
              <h1>mysql</h1>
              <p>JavaScript行为效果交互</p>
              <span>
                通过HTML内容信息结构布局及CSS排版定位视觉渲染之后，接下来就需要JavaScript脚本语言闪亮登场了。JavaScript属于客户端的脚本语言，与HTML页面进行动态交互；一定程度上它也是客户端与服务器端沟通的一座桥梁。随着事物的发展变化，如今ECMAScript则为其标准，如同HTML与HTML5、CSS与CSS3一般升级、统一及标准化变迁。同样，这也是web前端开发者应具备了解且熟练应用的脚本语言。
              </span>
            </div>
            <!-- 循环体 -->
            <a :href="`/#/mysqlpage/${item.id}`" v-for="(item,i) in 9" :key="i">
              <div class="left">
                <img src="./../assets/web/mysql.jpg" alt="">
              </div>
              <div class="right" style="width:60%;">
                <h3>MYSQL</h3>
                <span>
                  正在更新数据库，稍后将替换全部内容
                </span>
              </div>
            </a>
          </div>
        </el-tab-pane>
        <!-- NODEJS -->
        <el-tab-pane label="nodejs" name="eighth">
          <div class="home">
            <a v-for="(item,i) in 9" :key="i">
              <div class="left">
                <img src="./../assets/web/nodejs.jpg" alt="">
              </div>
              <div class="right" style="width:60%;">
                <h3>NODEJS</h3>
                <span>
                  正在更新数据库，稍后将替换全部内容
                </span>
              </div>
            </a>
          </div>
        </el-tab-pane>
        <!-- PHP -->
        <el-tab-pane label="PHP" name="ninth">
          <div class="home">
            <a v-for="(item,i) in 9" :key="i">
              <div class="left">
                <img src="./../assets/web/mysql.jpg" alt="">
              </div>
              <div class="right" style="width:60%;">
                <h3>NODEJS</h3>
                <span>
                  正在更新数据库，稍后将替换全部内容
                </span>
              </div>
            </a>
          </div>
        </el-tab-pane>
        <!-- JAVA -->
        <el-tab-pane label="JAVA" name="tenth">
          <div class="home">
            <a v-for="(item,i) in 9" :key="i">
              <div class="left">
                <img src="./../assets/web/boot.jpg" alt="">
              </div>
              <div class="right" style="width:60%;">
                <h3>NODEJS</h3>
                <span>
                  正在更新数据库，稍后将替换全部内容
                </span>
              </div>
            </a>
          </div>
        </el-tab-pane>
        <!-- 各类UI库 -->
        <el-tab-pane label="Python" name="eleventh">
          <div class="home">
            <a v-for="(item,i) in 9" :key="i">
              <div class="left">
                <img src="./../assets/web/css.jpg" alt="">
              </div>
              <div class="right" style="width:60%;">
                <h3>UI库</h3>
                <span>
                  正在更新数据库，稍后将替换全部内容
                </span>
              </div>
            </a>
          </div>
        </el-tab-pane>
        <!-- 键速测试 -->
        <el-tab-pane label="各种ui库" name="twelfth">
          <div class="home">
            <a v-for="(item,i) in 9" :key="i">
              <div class="left">
                <img src="./../assets/web/html.jpg" alt="">
              </div>
              <div class="right" style="width:60%;">
                <h3>UI库</h3>
                <span>
                  正在更新数据库，稍后将替换全部内容
                </span>
              </div>
            </a>
          </div>
        </el-tab-pane>
      </el-tabs>
    </template>
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
      activeName: 'first',
      html:[],
      css:[],
      js:[],
      webwidth:''
    }
  },
  mounted(){
    // 获取宽度
    this.webwidth=document.documentElement.clientWidth;
    //html
    this.axios.get( `${host}/html`).then(res=>{
      this.html=res.data.results;
      console.log(this.html[0]);
    });
    //css
    this.axios.get( `${host}/css`).then(res=>{
      this.css=res.data.results;
      console.log(this.css[0]);
    });
    //js
    this.axios.get( `${host}/js`).then(res=>{
      this.js=res.data.results;
      console.log(this.css[0]);
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
*{
  margin: 0;
  padding: 0;
  text-decoration: none;
}
.home{
  width:100%;
  background-color: rgba(119,119, 119, 0.1);

  /* padding:10px 0px 10px 0; */
}
.header{
  padding: 20px 0;
}
.header>h1{
  color: #f66;
}
.header>p{
  color: #66f;
}
.header>span{
  color: #666;
  text-align: left;
}
.home>a{
  width:95%;
  max-width: 100%;
  display:flex;
  /* border-bottom:1px dashed #666; */
  margin: 0 auto;
  /* background-color: rgba(119,119, 119, 0.05); */
  padding: 10px 0;
  
}
.home>a+a{
  /* margin-top: 20px; */
  border-top: 1px dashed #666;

}
.home>a>.left{
  width: 25%;
  /* display: flex; */
  /* align-items: left; */
}
.home>a>.left>img{
  width: 100%;
}
.home>a>.right{
  /* border: 1px dashed #999; */
  padding-left:2% ;
}
.home>a>div h3{
  text-align:left;
  color: #55f;
}
.home>a div span{
  text-align:left;
  color: #999;
}
.home>a:hover>.right>h3{
  color:#f55;
}
.home>a:hover>.right>span{
  color:#f99;
}

</style>
