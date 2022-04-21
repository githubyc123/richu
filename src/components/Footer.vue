
<template>
  <div v-show="url!=='fujiu'
      &&url!=='fujiufooter'
      &&url!=='fujiuheader'
      &&url!=='guanyufujiu'
      &&url!=='chanpinzhanshi'
      &&url!=='xinwenzixun'
      &&url!=='anquanzhanshi'
      &&url!=='lianxiwomen'
  ">
    <div class="beijing">   
      <img src="../assets/richu/logo.jpg" alt="">
      <span class="rishushuoshi">日初说事 </span>
      <img src="./../assets/richu/qq.png" alt="">
      <div class="div2">
        <span class="span1">QQ：</span><a target="_blank" title="QQ在线客服" href="http://wpa.qq.com/msgrd?v=3&amp;uin=897094685&amp;site=qq&amp;menu=yes"><span class="span2">897094685</span></a><br>
        <span class="span1">Q群：</span><a title="QQ群待创建"><span class="span2">×××××××××</span></a><br>
      </div><br>
      <!-- 手机端显示 -->
      <span class="zhu">手机端或电脑端未正常显示请随时联系<br></span>
      <span class="zhu">解释权归本站所有，如有<span class="teshu">侵权</span>请联系站长<span class="teshu">删除</span></span>
      <p class="beian">
        <a href="https://beian.miit.gov.cn/">ᅠᅠ冀ICP备2022005994号-1	</a>
      </p>  

    </div>
  </div>
</template>
<script>
export default {
  components:{
  },
  data(){
    return{
      footerwidth:'',
      url:''
    }
  },
  mounted(){
    this.footerwidth=document.documentElement.clientWidth;
    // console.log('footer'+this.footerwidth);
    this.url=window.location.hash.substring(2);
  },
  methods:{
    
  }
}
</script>
<style scoped>
*{
  margin: 0;
  padding: 0;
}
.beijing{
  width: 100%;
  background-color: rgba(17, 16, 16, 0.786);
  color: #fff;
  padding: 10px 0 3px;
}
.beijing>img{
  width: auto;
  height: 26px;
  border-radius: 50%;
  display: inline-block;
}
.beijing>.rishushuoshi{
  font-size: 19px;
  font-weight: bold;
  line-height: 30px;
  vertical-align:super;
  color: rgb(236, 131, 10);
  display: inline-block;
}
.div2{
  display: inline-block;
}
.div2>.span1{
  font-size: 12px;
  font-weight: bold;
  color: #ddd;
  display: inline;
  line-height: 0px;
  /* vertical-align:super; */
  /* vertical-align:sub; */
}
.div2>a>.span2{
  font-size: 12px;
  font-weight: bold;
  color: #0aa1ed;
  cursor: pointer;
  display: inline;
  line-height: 0px;
  /* vertical-align:super; */
  /* vertical-align:sub; */
}
.div2>a>.span2:hover{
  font-size: 18px;
  transition: 0.2s;
  color: rgb(241, 188, 11);
}
.beijing>.zhu{
  font-size: 14px;
  line-height: 30px;
  vertical-align:super;
  color: #ccc;
  margin: 0 auto;
  text-align: center;
}
.zhu>.teshu{
  font-size: 17px;
  color: #24ed0a;
  display: inline-block;
}
.zhu{
  color: #ccc;
}
.beian{
  margin: 0 auto;
  font-weight: 300;
  /* border-top: 1px solid #999; */
  text-align: center;
}
.beian>a{
  color: #ccc;
  text-decoration: none;
  font-size: 13px;
  line-height: 30px;
  /* padding-bottom: 5px; */
}
</style>
