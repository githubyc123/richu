<template>
  <div>
    <div class="zhuti">
      <!-- <iframe src="https://www.kugou.com/" frameborder="0" scrolling="no"></iframe> -->
      <marquee
					class="lunbotu" 
					behavior="scroll" 
					loop="-1"
					scrollamout="1000" 
					width="100%"
					bgcolor="#ededed"
					hspace="0px"
					vspace="0px"
					onmouseout=this.start()
					scrolldelay="1"
					>
					<!-- onmouseover=this.stop()  -->
						<img src="./../assets/web/html.jpg">
						<img src="./../assets/web/css.jpg">
						<img src="./../assets/web/js.jpg">
						<img src="./../assets/web/vue.jpg">
						<img src="./../assets/web/mysql.jpg">
						<img src="./../assets/web/nodejs.jpg">
					</marquee>

       <!-- 音乐 -->
        <p>{{mp33[sum]}}</p>
          <audio
					class="audio0"
          id="audio0"
					src="./../assets/richu/1.mp3"
					type="audio/mpeg" 
					autoplay=true
					controls
					loop>
        </audio>
        <!-- <span>d d </span> -->
        <br><br><h3 style="color:#f00">(正在更新数据库,更新后将替换本页内容)</h3>
        <br><br><h3 style="color:#f00">(正在更新数据库,更新后将替换本页内容)</h3>
        <br><br><h3 style="color:#f00">(正在更新数据库,更新后将替换本页内容)</h3>
        <br><br><h3 style="color:#f00">(正在更新数据库,更新后将替换本页内容)</h3>
        <br><br><h3 style="color:#f00">(正在更新数据库,更新后将替换本页内容)</h3>
        <br><br><h3 style="color:#f00">(正在更新数据库,更新后将替换本页内容)</h3>
        <br><br><h3 style="color:#f00">(正在更新数据库,更新后将替换本页内容)</h3>
        <br><br><h3 style="color:#f00">(正在更新数据库,更新后将替换本页内容)</h3>
        <br><br><h3 style="color:#f00">(正在更新数据库,更新后将替换本页内容)</h3>
        <br>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  components: {
  },
  data(){
    return{
      sum:1,
      mp33:['没歌了还点','正在播放：黑猫 - 近我者甜呀','后面没歌了','都说没歌了还点','唉，脑瓜疼，点吧，不提示了。。。。']
    }
  },
  methods:{
  }
}
</script>
<style scoped>
*{
  margin: 0;
  padding: 0;
  text-decoration: none;
}
.lunbotu{
  padding: 10px 0;
  background-image: url(./../assets/web/nodejs.jpg);
  background-size:100% auto;
  background-position: center center;
}
.lunbotu img{
  height: 280px;
  padding: 0 5px;
}
.audio0{
  height: 70px;
  line-height: 50px;
  padding: 0;
  margin: 0;
}
.btn0{
  display: inline-block;
}
</style>
