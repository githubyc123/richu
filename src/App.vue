<template>
  <div id="app">
    <Fujiuheader v-if="url=='fujiu'
      |url=='guanyufujiu'
      |url=='chanpinzhanshi'
      |url=='xinwenzixun'
      |url=='anquanzhanshi'
      |url=='lianxiwomen'
    "></Fujiuheader>
    <Header v-else></Header>
    
    <router-view/>
    <Fujiufooter v-if="url=='fujiu'
      |url=='guanyufujiu'
      |url=='chanpinzhanshi'
      |url=='xinwenzixun'
      |url=='anquanzhanshi'
      |url=='lianxiwomen'
    "></Fujiufooter>
    <Footer v-else></Footer>
    <!-- <Footer v-show="url==''
      |url=='tv'
      |url=='music'
      |url=='news'
      |url=='game'
      |url=='music'
      |url=='baidu'
    "></Footer> -->
    <!-- <div id="nav"> -->
      
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/about">About</router-link> -->
    <!-- </div> -->
    
    
  </div>
</template>
<script>
import Vue from 'vue';
import Header from './components/Header.vue';
import Fujiuheader from './components/Fujiuheader.vue';
import Footer from './components/Footer.vue';
import Fujiufooter from './components/Fujiufooter.vue';
export default Vue.extend({
  components:{
    Header,
    Footer,
    Fujiuheader,
    Fujiufooter
  },
  data(){
    return{
      url:'',
    }
  },
  mounted(){
    //当前页url
    this.url=window.location.hash.substring(2);
    // console.log('当前url'+this.url);
  },
  
  // methods:{
  //   btn1(){
  //     console.log(this.input1);

  //   }
  // }
})
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 0 30px;
}


/* #nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
