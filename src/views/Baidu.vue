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
export default {
  name: '',
  components: {
  },
  data(){
    return{
      html:[],
      sum:1,
      page:1
    }
  },
  mounted(){
    var str=location.hash.slice(8);
    console.log(str);
    if(str.slice(0,1)=='h'){
      var name=str.slice(0,4);
      var id=str.slice(5);
      console.log(name,id);
    }
    // var id=this.$route.params.id-1;
    // var name=this.$route.params.name;
    // console.log(id);
    this.axios.get( `${host}/${name}`).then(res=>{
      this.html=res.data.results[id];
      this.sum=res.data.results.length;
      // console.log(this.sum);
      // console.log(this.html.p1);
    });
    // this.page=location.hash.slice(7);
    // console.log('usr'+this.page);
    // var str=location.hash.slice(2);
    
    // console.log(str.slice(0,4));
    
  },
  methods:{
    // 返回
    btn(){
      this.$router.push('/web');
      // this.$router.go(0);
    },
    // 上一篇
    shang(){
      console.log(location.hash.slice(8,1));
      if(location.hash.slice(9,1)=='h'){
        this.page=location.hash.slice(13);
         console.log(this.page);
      }
      
      if (this.page>1){
        this.page--;
        this.$router.push(`/baidu/${this.name}/${this.page}`);
        this.$router.go(0);
        // location.reload();
      }else{
        alert('到第一页了哦');
      }
    },
    // 下一篇
    xia(){
      this.page=location.hash.slice(7);
      if (this.page<this.sum){
        this.page++;
        this.$router.push(`/html/${this.page}`);
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
*{
  margin: 0;
  padding: 0;
  text-decoration: none;
}
button{
  display: inline-block;
  width: 20%;
  height: 28px;
  font-size: 18px;
  /* margin: 20px auto; */
  margin: 20px 6%;
  border-radius: 5px;
  outline: none;
  color: #f0f;
}
h1{
  padding: 20px 0;
  color: #f33;
}
h3{
  color: rgb(246, 139, 9);
}
p{
  color: rgb(3, 170, 236);
  font-size: 19px;
  padding: 20px 10px;
  text-align: left;
  font-weight: bold;
}
span{
  display: block;
  padding: 0 30px;
  text-align: left;
  font-size: 18px;
  line-height: 30px;
  color: #666;
}




</style>
