<template>
  <div>
    <button @click="shang">上一篇</button>
    <button @click="btn">返回</button>
    <button @click="xia">下一篇</button>
    <!-- <Header></Header> -->
    <h1>{{css.title}}</h1>
    <h3>{{css.shortTitle}}</h3>
    <p>{{css.p1}}</p>
    <span>{{css.t1}}</span>
    <p>{{css.p2}}</p>
    <span>{{css.t2}}</span>
    <p>{{css.p3}}</p>
    <span>{{css.t3}}</span>
    <p>{{css.p4}}</p>
    <span>{{css.t4}}</span>
    <p>{{css.p5}}</p>
    <span>{{css.t5}}</span>
    <p>{{css.p6}}</p>
    <span>{{css.t6}}</span>
    <p>{{css.p7}}</p>
    <span>{{css.t7}}</span>
    <p>{{css.p8}}</p>
    <span>{{css.t8}}</span>
    <p>{{css.p9}}</p>
    <span>{{css.t9}}</span>
    <p>{{css.p10}}</p>
    <span>{{css.t10}}</span>
    <!-- <p>{{css.p11}}</p>
    <span>{{css.t11}}</span>
    <p>{{css.p12}}</p>
    <span>{{css.t12}}</span> -->
    <!-- :href="`/#/css/${this.css.id-1}`" -->
    <!-- :href="`/#/css/${this.css.id+1}`" -->
    <!-- <a @click="btn">上一篇文档</a> -->
    <!-- <a @click="btn">下一篇文档</a> -->
    <!-- <Footer></Footer> -->
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
      css:[],
      sum:1,
      page:1
    }
  },
  mounted(){
    var id=this.$route.params.id-1;
    console.log(id);
    this.axios.get(`${host}/css`).then(res=>{
      this.css=res.data.results[id];
      // console.log(this.css.p1);
      this.sum=res.data.results.length;
      this.page=location.hash.slice(10);
    });
    
  },
  methods:{
    // 返回
    btn(){
      this.$router.push('/css');
      // this.$router.go(0);
    },
    // 上一篇
    shang(){
      this.page=location.hash.slice(10);
      if (this.page>1){
        this.page--;
        this.$router.push(`/csspage/${this.page}`);
        this.$router.go(0);
        // location.reload();
      }else{
        alert('到第一页了哦');
      }
    },
    // 下一篇
    xia(){
      this.page=location.hash.slice(10);
      if (this.page<this.sum){
        this.page++;
        this.$router.push(`/csspage/${this.page}`);
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
