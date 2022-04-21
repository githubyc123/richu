<template>
  <div>
    <button @click="shang">上一篇</button>
    <button @click="btn">返回</button>
    <button @click="xia">下一篇</button>
    <!-- <Header></Header> -->
    <h1>{{boot.title}}</h1>
    <h3>{{boot.shortTitle}}</h3>
    <p>{{boot.p1}}</p>
    <span>{{boot.t1}}</span>
    <p>{{boot.p2}}</p>
    <span>{{boot.t2}}</span>
    <p>{{boot.p3}}</p>
    <span>{{boot.t3}}</span>
    <p>{{boot.p4}}</p>
    <span>{{boot.t4}}</span>
    <p>{{boot.p5}}</p>
    <span>{{boot.t5}}</span>
    <p>{{boot.p6}}</p>
    <span>{{boot.t6}}</span>
    <p>{{boot.p7}}</p>
    <span>{{boot.t7}}</span>
    <p>{{boot.p8}}</p>
    <span>{{boot.t8}}</span>
    <p>{{boot.p9}}</p>
    <span>{{boot.t9}}</span>
    <p>{{boot.p10}}</p>
    <span>{{boot.t10}}</span>
    <p>{{boot.p11}}</p>
    <span>{{boot.t11}}</span>
    <p>{{boot.p12}}</p>
    <span>{{boot.t12}}</span>
    
    <button @click="shang">上一篇</button>
    <button @click="btn">返回</button>
    <button @click="xia">下一篇</button>
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
      sum:1,
      page:1
    }
  },
  mounted(){
    var id=this.$route.params.id-1;
    console.log(id);
    this.axios.get( `${host}/boot`).then(res=>{
      this.boot=res.data.results[id];
      this.sum=res.data.results.length;
      console.log(this.sum);
      // console.log(this.html.p1);
    });
    this.page=location.hash.slice(11);
    // console.log('usr'+this.page);
  },
  methods:{
    // 返回
    btn(){
      this.$router.push('/boot');
      // this.$router.go(0);
    },
    // 上一篇
    shang(){
      this.page=location.hash.slice(11);
      if (this.page>1){
        this.page--;
        this.$router.push(`/bootpage/${this.page}`);
        this.$router.go(0);
        // location.reload();
      }else{
        alert('到第一页了哦');
      }
    },
    // 下一篇
    xia(){
      this.page=location.hash.slice(11);
      if (this.page<this.sum){
        this.page++;
        this.$router.push(`/bootpage/${this.page}`);
        this.$router.go(0);
      }else{
        alert("最后一页了哦，看看别的吧");
      }
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>
<style scoped>
@import url('./../css/webpage/webpage.css');
</style>