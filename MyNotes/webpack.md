
打包工具：可以很好的处理js模块之间的依赖关系，打包js,css,image,less, sass等文件.
  可以处理es6新语法，使浏览器可以解析。
## 安装node.js,安装webpack，webpack-cli
  npm i webpack -g 全局安装 （cmd中运行，安装过程会提示安装webpack-cli）
  npm i webpack --save-dev 本地项目中安装
  cnpm i webpack webpack-cli -D
  注：install可简写为i,--save-dev可以简写为-D
  参考网址：https://blog.51cto.com/14047134/2310246?tdsourcetag=s_pcqq_aiomsg
## 用npm init 命令生成 package.json
  然后输入name等各个属性的信息
  如果有默认，回车即可
## 安装包，用npm install 名
 安装jQuery包：npm install jquery
  
## 打包命令：
在项目中运行命令：
+ 方法一：webpack 要打包的文件路径 目的文件路径
+ 方法二：设置配置文件webpack.config.js，自己手写。
因为项目可能需要修改，所以，经常用方法二。
```
const path=require('path');
module.exports={
    entry:path.join(__dirname,"./src/main.js"),//入口
    output:{
        path:path.join(__dirname,"./dist"),//出口
        filename:'bundle.js'//指定输出文件的名字
    }
}
```
  写好后只需要在命令行输入：webpack就可以了。
  webpack做的事情：因为没有通过命令指定入口，出口，它会去找配置文件webpack.config.js,
  找到后会解析这个文件，解析完得到配置对象，就得到了入口和出口。
+ 方法三：修改package.json文件

把"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1" //JSON文件不支持注释，引用时请清除注释
  },
  修改为：
  "scripts": {
    "start":"webpack"
  },
  修改之后，直接运行 `npm start` 就可以打包好

+ 方法四：webpack-dev-server配置本地服务器
  webpack-dev-server 可以自动打包编译,自动刷新浏览器
  安装命令： `cnpm i webpack-dev-server -D`
 可以在服务器运行
  webpack-dev-server 把打包好的bundle.js文件，以一种虚拟形式，放到了电脑内存中，
  与dist,src 同级，在物理路径上看不见，不是dist里面那个。
  #### package.json文件中   修改"scripts"中的"dev"
      --open可以自动打开浏览器
      --port 3000 设置了端口
      --contentBase src 设置默认主页
      --hot 不用重新生成bundle.js，只生成了修改文件，减少了开销  
  运行：`npm run dev` 
  ```
  "dev":"webpack-dev-server --open --port 3000 --contentBase src --hot"
  ```

 ### 上述设置也可以在config配置文件中设置

 配置选项:
  - contentBase ：设置服务器所读取文件的目录，当前我们设置为"./dist"
  - port ：设置端口号，如果省略，默认为8080
  - inline ：设置为true，当源文件改变时会自动刷新页面
  - historyApiFallback ：设置为true，所有的跳转将指向index.html 
运行：`npm run dev` 
退出服务器，在终端按ctrl+c，再按y确认，即可退出服务器运行 
###### 缺少一个模块就会报错，如果发生错误，可以删除modules文件夹，再安装所有用到的依赖。麻烦
+ 安装插件 html-webpack-plugin  
  输入命令cnpm i html-webpack-plugin -D
### 打包处理非js文件，需要安装loader加载器
+ 如果我们要加载一个css文件，需要安装配置style-loader和css-loader:
cnpm i style-loader css-loader -D 
  之后，在配置文件的module中增加rules
+ 如果我们要编译scss文件，需要安装配置sass-loader node-sass：
 cnpm i sass-loader node-sass -D // 因为sass-loader依赖于node-sass，所以还要安装node-sass
  之后，在配置文件的module中增加rules
+ 如果我们要编译less文件，需要安装配置less-loader less：
cnpm i less-loader less -D // 因为sass-loader依赖于less，所以还要安装less
  之后，在配置文件的module中增加rules
  最后，再运行npm run dev

 记住：
 1. 安装服务器运行文件命令：
 (1) 安装 `cnpm i webpack-dev-server -D`
 (2) 运行 `npm run dev`
 2. 安装插件包 html-webpack-plugin，会在内存中生成一份，同时会自动把bundle.js文件插入到内存页面中：
 (1) 运行 `cnpm i webpack html-webpack-plugin`
 (2) src下的main.js ，引入包
 ```
  const plugin= require("html-webpack-plugin")
 ```
 3. 安装css中url插件，`cnpm i url-loader file-loader -D`
 URL通过`limit`指定进行base64编码的图片大小；只有小于指定字节（byte）的图片才会进行base64编码：
```
{ test: /\.(png|jpg|gif|jpeg)$/, use: 'url-loader?limit=43960&name=[hash:8]-[name].[ext]' },
```
4. bootstrap包，`cnpm i bootstrap -D`
```

```
5. 解析es6+的代码
<!-- 安装最新的版本 -->
`cnpm i babel-loader @babel/core @babel/preset-env webpack -D`
//安装 Babel
`npm install --save-dev @babel/core`
//最新转码规则
`cnpm install --save-dev @babel/preset-env`
//react 转码规则
`cnpm install --save-dev @babel/preset-react`
// babel-preset-env的env表示是对当前环境的预处理，而不是像以前使用babel-preset-es2015只能针对某个环境
6. 安装vue
导入 import Vue from 'vue'
`npm i vue`
`cnpm i vue-loader vue-template-compiler -D`
7. vue router
import VueRouter from 'vue-router'
`npm i vue-router -S`

8. 创建`main.js`入口文件：

```

    // 导入 Vue 组件

    import Vue from 'vue'

    // 导入 App组件

    import App from './components/App.vue'


    // 创建一个 Vue 实例，使用 render 函数，渲染指定的组件

    var vm = new Vue({

      el: '#app',

      render: c => c(App)

    });

```

## 在使用webpack构建的Vue项目中使用模板对象？
1. 在`webpack.config.js`中添加`resolve`属性：
```
resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
```



## ES6中语法使用总结

1. 使用 `export default` 和 `export` 导出模块中的成员; 对应ES5中的 `module.exports` 和 `export`

2. 使用 `import ** from **` 和 `import '路径'` 还有 `import {a, b} from '模块标识'` 导入其他模块

3. 使用箭头函数：`(a, b)=> { return a-b; }`


## `nrm`的安装使用
作用：提供了一些最常用的NPM包镜像地址，能够让我们快速的切换安装包时候的服务器地址；
什么是镜像：原来包刚一开始是只存在于国外的NPM服务器，但是由于网络原因，经常访问不到，这时候，我们可以在国内，创建一个和官网完全一样的NPM服务器，只不过，数据都是从人家那里拿过来的，除此之外，使用方式完全一样；
1. 运行`npm i nrm -g`全局安装`nrm`包；
2. 使用`nrm ls`查看当前所有可用的镜像源地址以及当前所使用的镜像源地址；
3. 使用`nrm use npm`或`nrm use taobao`切换不同的镜像源地址；

> 注意： nrm 只是单纯的提供了几个常用的 下载包的 URL地址，并能够让我们在 这几个 地址之间，很方便的进行切换，但是，我们每次装包的时候，使用的装包工具，都是  npm
## 组件中style:
```
<style lang="less" scoped>
//只给本组件添加样式。scoped原理：自动为组件的标签设置了指定的CSS属性，通过CSS属性选择器实现
<style>
```
###安装Mint-UI
 Vue 2.0：`npm install mint-ui -S`
 官网 https://mint-ui.github.io/#!/zh-cn