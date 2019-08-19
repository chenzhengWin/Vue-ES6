### MVVM
data:是MVVM中的M，保存要用的数据
new 的Vue实例，是VM
el:表示要控制的页面上的区域
methods 虽然带个s后缀，但是是个对象，这里可以自定义了方法 
在 VM 实例中，如果要访问 data 上的数据，或者要访问 methods 中的方法， 必须带 this

指令 (Directives) 是带有 v- 前缀的特殊特性
+ 在Vue中，一个核心的概念，就是让用户不再操作DOM元素，解放了用户的双手，让程序员可以更多的时间去关注业务逻辑；
+ MVVM是前端视图层的概念，主要专注于视图层分离。MVVM把视图层分为了三部分。Model，View，ViewModel

### vue自定义全局按键修饰符：
Vue.config.keyCodes.键名=键符
eg: Vue.config.keyCodes.f2=113




#### vscode自定义的快捷键
- ctrl+alt+/ 注释块代码

#### webstorm快捷键
格式化代码：Ctrl+alt+L
### 问题 vue-resource的接口不能访问 无法验证 第二章5 6

+ 模块化
 相对于代码来说，代码逻辑的角度来说的。代码分层开发，每个模块的功能单一，复用性强。

+ 组件化
从UI界面来说，组件化方便UI组件的重用。

### Vue官方提供的标签
1. transition 把需要进行动画的元素包裹起来
2. transition-group 包裹用v-for渲染出来的元素，同时给v-for渲染出来的元素添加:key属性
3. component 组件 <component :is="组件变量名（在data中）"> </component>
var vm = new Vue({
        el:"#app",
        data:{
            flag:true,
        },
        methods:{

        }
    })

#### vscode中的vue编辑器插件：
Vue 2Snippets：vue 的代码片段插件，快速生成代码块
Vetur：含语法高亮，代码片段snippet，编辑器插件emmet,formatting等