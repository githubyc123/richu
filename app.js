//加载epxress模块
const express=require('express');
//加载CORS模块
const cors=require('cors');
//引入mysql
const mysql=require('mysql');
//创建mysql的连接池
const pool=mysql.createPool({
  host:'81.70.255.252',
  port:3306,
  user:'richu',
  password:'richu',
  // user:'root',
  // password:'',
  database:'richu',
  charset:'utf8',
  connectionLimit:20
})
//创建web服务器实例
const server=express();
//将cors作为Server的中间件
server.use(cors({
  // origin:['http://81.70.255.252:8889']
  origin:['http://127.0.0.1:8080','http://localhost:8080']
}))

//获取HTML
server.get('/html',(req,res)=>{
  let sql='SELECT * FROM html';
  pool.query(sql,(error,results)=>{
    if(error) throw error;
    res.send({message:'查询成功',code:1,results:results})
  });
});

//获取CSS
server.get('/css',(req,res)=>{
  let sql='SELECT * FROM css';
  pool.query(sql,(error,results)=>{
    if(error) throw error;
    res.send({message:'查询成功',code:1,results:results})
  });
});
//获取js
server.get('/js',(req,res)=>{
  let sql='SELECT * FROM js';
  pool.query(sql,(error,results)=>{
    if(error) throw error;
    res.send({message:'查询成功',code:1,results:results})
  });
});

//分页数据
server.get('/articles',(req,res)=>{
  //获取地址栏的cid参数，该参数表示分类的ID
  let cid=req.query.id;
  let sql='SELECT id,bt,zw1,img1,zw2,img2,zw3,img3,zw4,img4,zw5,img5,zw6,img6,zw7,img7,zw8,img8,zw9,img9,zw10 FROM lvyou where id=?';
  pool.query(sql,[cid],(error,results)=>{
    if(error) throw error;
    res.send({message:'查询成功',code:1,results:results[0]});
  })
});

//指定web服务器监听的端口
server.listen(3000);
