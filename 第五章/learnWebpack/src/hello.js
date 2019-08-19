// 导出模块,main.js里引入了
module.exports=function(){
    let hello=document.createElement("div");
    hello.innerHTML="<p>Hello！Nice to meet you!</p>";
    return hello;
}
