module.exports={
    devServer:{
        // server:{
            // host:'localhost',
            // port:3000,
            proxy:{
                '/api':{
                    target:'http://81.70.255.252:3000',
                    // secure:false,
                    ////    // 是否开启
                    changeOrigin:true,
                    pathRewrite:{
                        '^/api':'',
                    }
                }
            }
        // }
    }
}