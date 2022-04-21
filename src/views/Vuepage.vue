<template>
  <div>
    <button @click="shang">上一篇</button>
    <button @click="btn">返回</button>
    <button @click="xia">下一篇</button>
    <!-- <Header></Header> -->
    <h1>{{vuejs.title}}</h1>
    <h3>{{vuejs.shortTitle}}</h3>
    <p>{{vuejs.p1}}</p>
    <span>{{vuejs.t1}}</span>
    <p>{{vuejs.p2}}</p>
    <span>{{vuejs.t2}}</span>
    <p>{{vuejs.p3}}</p>
    <span>{{vuejs.t3}}</span>
    <p>{{vuejs.p4}}</p>
    <span>{{vuejs.t4}}</span>
    <p>{{vuejs.p5}}</p>
    <span>{{vuejs.t5}}</span>
    <p>{{vuejs.p6}}</p>
    <span>{{vuejs.t6}}</span>
    <p>{{vuejs.p7}}</p>
    <span>{{vuejs.t7}}</span>
    <p>{{vuejs.p8}}</p>
    <span>{{vuejs.t8}}</span>
    <p>{{vuejs.p9}}</p>
    <span>{{vuejs.t9}}</span>
    <p>{{vuejs.p10}}</p>
    <span>{{vuejs.t10}}</span>
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
      vuejs:[],
      sum:1,
      page:1
    }
  },
  mounted(){
    var id=this.$route.params.id-1;
    console.log(id);
    this.axios.get(`${host}/vue`).then(res=>{
      this.vuejs=res.data.results[id];
      // console.log(this.css.p1);
      this.sum=res.data.results.length;
      this.page=location.hash.slice(10);
    });
    
  },
  methods:{
    // 返回
    btn(){
      this.$router.push('/vue');
      // this.$router.go(0);
    },
    // 上一篇
    shang(){
      this.page=location.hash.slice(10);
      if (this.page>1){
        this.page--;
        this.$router.push(`/vuepage/${this.page}`);
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
        this.$router.push(`/vuepage/${this.page}`);
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