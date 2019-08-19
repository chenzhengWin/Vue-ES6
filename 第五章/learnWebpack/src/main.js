// 引入css文件
import './css/style.css';
// 引入scss文件
import './css/blue.scss';
// 
import './css/index.less';

// 命令npm install -jquery 安装jQuery的包，这里引入
import $ from 'jquery';

import Vue from "vue";
import Vue from "../node_modules/vue/dist/vue.js";
// 1.导入包
import VueRouter from 'vue-router'
// 2.手动安装VueRouter
Vue.use(VueRouter)

// 1.导入Mint-UI 基于 Vue.js 的移动端组件库
import MintUI from 'mint-ui'
//2.
Vue.use(MintUI)

// 导入组件 可以专门新建一个router.js，专门存放router组件,在它里面导入入
import login from './login/vue';
// webpack无法打包vue文件，需要安装相关loader：
// cnpm i vue-loader vue-template-compiler -D
// 配置文件加test，use

//在main.js中引入hello.js模块
const hello=require("./hello.js");
document.querySelector("#root").append(hello())

$(function(){
    $("ul li:odd").css("background","lightblue");
    $("ul li:even").css("background",function(){
        return '#'+'fff'
    })
})
// 
class Person{
    // 静态属性，直接通过类名访问的属性；实例属性：只能通过类的实例访问类的属性
    static info={name:'zs',age:"20"}
}
console.log(Person.info)

var vm=new Vue({
    el:"#app",
    data:{
        msg:'123'
    },
    // webpack中，用render渲染 c是参数createElements
    render:c=> c(login)
   
    // render:function(createElements){
    //     return createElements(login);
    // }
})

import aa,{title,content as con,name as nn} from "./test.js"
console.log(aa)//默认导出的
console.log(title,con,nn)