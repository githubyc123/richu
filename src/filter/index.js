// 全局过滤器

import Vue from "vue";

// 日期过滤器
function date(timestamp) {
  let date = new Date(timestamp * 1);
  let fz='';
  let miao='';
  if(date.getMinutes()<10){
    fz=`0${date.getMinutes()}`;
  }else{
    fz=`${date.getMinutes()}`;
  }
  if(date.getSeconds()<10){
    miao=`0${date.getSeconds()}`;
  }else{
    miao=`${date.getSeconds()}`;
  }
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} 
  ${date.getHours()}:${fz}:${miao}`;
}

// 注册过滤器到vue中
Vue.filter("date", date);
