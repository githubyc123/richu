import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Tv from '../views/Tv.vue'
import Baidu from '../views/Baidu.vue'
import Music from '../views/Music.vue'
import Web from '../views/Web.vue'
import Game from '../views/Game.vue'
import Fujiu from '../views/Fujiu.vue'
import Fujiu1 from '../views/Fujiu1.vue'
import Fujiu2 from '../views/Fujiu2.vue'
import Fujiu3 from '../views/Fujiu3.vue'
import Fujiu4 from '../views/Fujiu4.vue'
import Fujiu5 from '../views/Fujiu5.vue'
import Fujiufooter from './../components/Fujiufooter.vue'
import Html from './../views/Html.vue'
import Htmlpage from './../views/Htmlpage.vue'
import Css from './../views/Css.vue'
import Vuejs from './../views/Vuejs.vue'
import Vuepage from './../views/Vuepage.vue'
import Mysql from './../views/Mysql.vue'
import Mysqlpage from './../views/Mysqlpage.vue'
import Csspage from './../views/Csspage.vue'
import Js from './../views/Js.vue'
import Jspage from './../views/Jspage.vue'
import Nodejs from './../views/Nodejs.vue'
import Boot from './../views/Boot.vue'
import Bootpage from './../views/Bootpage.vue'
import Jquery from './../views/Jquery.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/jquery',
    name: 'Jquery',
    component: Jquery
  },
  {
    path: '/bootpage/:id',
    name: 'Bootpage',
    component: Bootpage
  },
  {
    path: '/boot',
    name: 'Boot',
    component: Boot
  },
  {
    path: '/nodejs',
    name: 'Nodejs',
    component: Nodejs
  },
  {
    path: '/jspage/:id',
    name: 'Jspage',
    component: Jspage
  },
  {
    path: '/js',
    name: 'Js',
    component: Js
  },
  {
    path: '/mysql',
    name: 'Mysql',
    component: Mysql
  },
  {
    path: '/mysqlpage/:id',
    name: 'Mysqlpage',
    component: Mysqlpage
  },
  {
    path: '/vue',
    name: 'Vuejs',
    component: Vuejs
  },
  {
    path: '/vuepage/:id',
    name: 'Vuepage',
    component: Vuepage
  },
  {
    path: '/css',
    name: 'Css',
    component: Css
  },
  {
    path: '/csspage/:id',
    name: 'Csspage',
    component: Csspage
  },
  {
    path: '/html',
    name: 'Html',
    component: Html
  },
  {
    path: '/htmlpage/:id',
    name: 'Htmlpage',
    component: Htmlpage
  },
  {
    path: '/guanyufujiu',
    name: 'Fujiu1',
    component: Fujiu1
  },
  {
    path: '/chanpinzhanshi',
    name: 'Fujiu2',
    component: Fujiu2
  },
  {
    path: '/xinwenzixun',
    name: 'Fujiu3',
    component: Fujiu3
  },
  {
    path: '/anquanzhanshi',
    name: 'Fujiu4',
    component: Fujiu4
  },
  {
    path: '/lianxiwomen',
    name: 'Fujiu5',
    component: Fujiu5
  },
  {
    path: '/fujiufooter',
    name: 'Fujiufooter',
    component: Fujiufooter
  },
  {
    path: '/fujiu',
    name: 'Fujiu',
    component: Fujiu
  },
  {
    path: '/gamessss',
    name: 'Game',
    component: Game
  },
  {
    path: '/web',
    name: 'Web',
    component: Web
  },
  {
    path: '/music',
    name: 'Music',
    component: Music
  },
  {
    path: '/baidu',
    name: 'Baidu',
    component: Baidu
  },
  {
    path: '/tv',
    name: 'Tv',
    component: Tv
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
