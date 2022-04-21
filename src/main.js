import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueLazyload from 'vue-lazyload'//懒加载
import "./filter"; //全局过滤器


//vant2
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
//vant2
// // vant轮播图
// import { Swipe, SwipeItem } from 'vant';
// import 'vant/lib/swipe/style';
// import 'vant/lib/swipe-item/style';
// Vue.use(Swipe);
// Vue.use(SwipeItem);
// import { Button } from 'vant';
// Vue.use(Button);
// // vant遮罩层
// import { Overlay } from 'vant';
// import 'vant/lib/overlay/style';
// Vue.use(Overlay);






import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

export const host = process.env.NODE_ENV === 'production'? 'http://81.70.255.252:3000' : '/api'

Vue.use(ElementUI); 
// axios.defaults.baseURL = '127.0.0.1:3000'
Vue.prototype.axios = axios;

Vue.config.productionTip = false

// 懒加载
Vue.use(VueLazyload, {
  loading: require('./assets/richu/loading.gif'),//加载中图片，一定要有，不然会一直重复加载占位图
  error: require('./assets/richu/error.jpg')  //加载失败图片
});


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
