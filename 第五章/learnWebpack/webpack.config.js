// 手动新建配置文件webpack.config.js
// 入口配置（相当于main.js）和出口配置（相当于打包生成的bundle.js）
const path=require('path');
// 启用热更新的第二步，引入webpack
const webpack=require("webpack");
// 导入在内存中生成 HTML 页面的bundle 插件
// 只要是插件，都一定要 放到 plugins 节点中去
// 这个插件的两个作用：
//  1. 自动在内存中根据指定页面生成一个内存的页面
//  2. 自动，把打包好的 bundle.js 追加到页面中去
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports={
    entry:path.join(__dirname,"./src/main.js"),//入口
    output:{
        path:path.join(__dirname,"./dist"),//出口
        filename:'bundle.js'//指定输出文件的名字
    },
    // 配置选项 --open --port 3000 --contentBase src --hot
    devServer:{
        open:true,//浏览器自动打开
        port:3000,//端口号
        contentBase:"dist",//本地服务器所加载文件的目录
        inline:true,// 文件修改后实时刷新
        hot:true//启用热更新的第一步 
    },
    //配置插件节点 
    plugins:[ 
        new webpack.HotModuleReplacementPlugin(),//new 热更新的模块，第三步，第二步是引入
        // 插件作用，1，根据模板页面，自动生成一个内存的页面 
        // 2.自动生成并在HTML页面中引入了bundle.js,不需要手动引入
        new htmlWebpackPlugin({
            template: path.join(__dirname, './dist/index.html'), // 指定 模板页面，将来会根据指定的页面路径，去生成内存中的页面
            filename: 'index.html' // 指定生成的页面的名称,内存中生成
        }),
    ],
    // 匹配所有第三方模块加载器
    module:{
        // 所有三方模块的匹配规则
        rules:[{
                test:/\.css$/,//正则，以.css结尾的文件
                use:['style-loader','css-loader']//需要用的loader，一定是这个顺序，因为调用loader是从右往左编译的
            },
            {
                test:/\.(scss|sass)$/, // 正则匹配以.scss和.sass结尾的文件
                use:['style-loader','css-loader','sass-loader']
            },
            {
                test:/\.less$/,//正则匹配less文件
                use:['style-loader','css-loader','less-loader']
            },
            {
                test:/\.(png|jpg|jpeg|gif)$/,
                // 图片大小（按字节byte算）小于limit会转化为base64格式，大于等于不转化。
                // hash：8是命名时取哈希值的前8位
                use:'url-loader?limit=43960&name=[hash:8]-[name].[ext]'
            },
            {
                test:/\.js$/,
                use:'babel-loader',
                exclude:/node_modules/ //排除node_modules
            },
            {
                resolve:{
                    alias:{ "vue":"vue/dist/vue.js"}//配置vue的路径
                }
            },
            {
                test:/\.vue$/,
                use:'vue-loader',
            }
        ]
    },
    // devtool:'source-map',//会生成对于调试的完整的.map文件，但同时也会减慢打包速度
}
