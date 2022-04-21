<template>
  <div>
    <button @click="shang">上一篇</button>
    <button @click="btn">返回</button>
    <button @click="xia">下一篇</button>
    <!-- <Header></Header> -->
    <h1>{{html.title}}</h1>
    <h3>{{html.shortTitle}}</h3>
    <p>{{html.p1}}</p>
    <span>{{html.t1}}</span>
    <p>{{html.p2}}</p>
    <span>{{html.t2}}</span>
    <p>{{html.p3}}</p>
    <span>{{html.t3}}</span>
    <p>{{html.p4}}</p>
    <span>{{html.t4}}</span>
    <p>{{html.p5}}</p>
    <span>{{html.t5}}</span>
    <p>{{html.p6}}</p>
    <span>{{html.t6}}</span>
    <p>{{html.p7}}</p>
    <span>{{html.t7}}</span>
    <p>{{html.p8}}</p>
    <span>{{html.t8}}</span>
    <p>{{html.p9}}</p>
    <span>{{html.t9}}</span>
    <p>{{html.p10}}</p>
    <span>{{html.t10}}</span>
    <p>{{html.p11}}</p>
    <span>{{html.t11}}</span>
    <p>{{html.p12}}</p>
    <span>{{html.t12}}</span>
    
    <button @click="shang">上一篇</button>
    <button @click="btn">返回</button>
    <button @click="xia">下一篇</button>
  </div>
</template>

<script>
import { host } from '@/main.js'
// import Header from './../components/Header.vue'
// import Footer from './../components/Footer.vue'
export default {
  name: '',
  components: {
    // Header,
    // Footer
  },
  data(){
    return{
      html:[],
      sum:1,
      page:1
    }
  },
  mounted(){
    var id=this.$route.params.id-1;
    console.log(id);
    this.axios.get( `${host}/mysql`).then(res=>{
      this.html=res.data.results[id];
      this.sum=res.data.results.length;
      console.log(this.sum);
      // console.log(this.html.p1);
    });
    this.page=location.hash.slice(12);
    // console.log('usr'+this.page);
  },
  methods:{
    // 返回
    btn(){
      this.$router.push('/mysql');
      // this.$router.go(0);
    },
    // 上一篇
    shang(){
      this.page=location.hash.slice(12);
      if (this.page>1){
        this.page--;
        this.$router.push(`/mysqlpage/${this.page}`);
        this.$router.go(0);
        // location.reload();
      }else{
        alert('到第一页了哦');
      }
    },
    // 下一篇
    xia(){
      this.page=location.hash.slice(12);
      if (this.page<this.sum){
        this.page++;
        this.$router.push(`/mysqlpage/${this.page}`);
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