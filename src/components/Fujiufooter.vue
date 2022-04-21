
<template>
  <div>
      <!-- 联系我们 -->
      <!-- <div class="lianxiwomen">
        <p>联系我们，了解更多服务</p>
        <a href="tel:15690466667">马上联系</a>
      </div> -->
    
    <!-- 主体结束 -->

    <!-- 尾部 -->
    <footer class="fujiufooter">
      <div class="footerzhuti">
        <!-- 左 -->
        <div class="footerleft">
          <h2>河北富久新型建材有限公司</h2>
          <p>手机：********</p>
          <p>传真：***********</p>
          <p>地址：河北省**********</p>
        </div>
        <!-- 中 -->
        
        <!-- 右 -->
        <div class="footerright">
          <div>
            <h3>关于我们</h3>
            <div class="erweima">
              <img src="./../assets/fujiu/code.jpg" alt="">
              <img class="erweima2" src="./../assets/fujiu/code.jpg" alt=""> 
            </div>
          </div>
        </div>
      </div>
      <p class="banquansuoyou">版权所有：河北富久新型建材有限公司 <a target="_blank" title="点击跳转，建站资讯" href="http://www.chao521.com">技术支持：超超网络</a>   <a href="https://beian.miit.gov.cn/">冀ICP备15015998号-2</a> </p>
    </footer>
  </div>
</template>
<script>
export default {
  components:{
  },
  data(){
    return{
    }
  },
  mounted(){
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
/*  */
.lianxiwomen{
  background: url(./../assets/fujiu/contact.jpg) no-repeat center;
  width: 100%;
  height: 198px;
  
}
.lianxiwomen>p{
  color: #fff;
  font-size: 30px;
  padding: 30px 0;
}
.lianxiwomen>a{
  color: #fff;
  font-size: 20px;
  display: block;
  margin: 0 auto;
  width: 165px;
  height: 40px;
  padding: 10px;
  border: 2px solid #fff;
  border-radius: 8px;
  line-height: 40px;
}
/* footer */
.fujiufooter{
  width: 100%;
  background-color: #333;
  
}
.footerzhuti{
  display: flex;
  width: 100%;
  /* padding: 10px; */
  text-align:left;
  display: flex;
  justify-content: space-between;
}
.footerzhuti>div{
  padding:1rem 0.5rem 0;
}
.footerright{
  text-align: left;
}
.footerzhuti h2,.footerzhuti h3{
  color: #fff;
}
.footerzhuti p{
  color: #999;
  height: 2.5rem;
  line-height: 2.5rem;
}
.erweima>img{
  width: 118px;
  height: 118px;
}
.erweima2{
  position: fixed;
  display: none;
  width: 118px;
  height: 118px;
  right: 30px;
  bottom: 80px;
}
/* .erweima:hover>.erweima2{
  display:block;
  width: 260px;
  height: 260px;
  transition: 0.2s;
} */
.banquansuoyou{
  display: block;
  color: #999;
  border-top: 1px solid #4f5054;
  padding: 10px 0 10px 10px;
  text-align:left;

}
.banquansuoyou>a{
  color: #999;
  margin: 0 20px;
}
.banquansuoyou>a:hover{
  color: #f00;
}
</style>