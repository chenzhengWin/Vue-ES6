const fs=require('fs');
const path=require('path');
//封装
// promise中是一个异步操作
function getfileBypath(path){
    return new Promise((resolve,reject)=>{
        fs.readFile(path,'utf-8',(err,datastr)=>{
            if(err){
                reject(err);
            } 
            resolve(datastr)
        })
    })
}

getfileBypath(path.join(__dirname,'./files/1.txt'))
.then(function(datastr){
    console.log(datastr);
    //读取文件2
    return getfileBypath('./files/2.txt')
})
.then(function(data){
    console.log(data)
    return getfileBypath('./files/3.txt')
})
.then(
    function(data){
        console.log(data)
    }
)
.catch(function(err){
    console.log("自己写的报错message:"+err.message)
})


/* catch的作用：如果前面有任何Promise执行失败，则立即终止所有Promise的执行，
并马上进入catch去处理Promise中的异常*/

// function getfile(path,suc,err){
//     fs.readFile(path,'utf-8',(err,datastr)=>{
//         if(err){
//             return err(error);
//         } 
//         suc(datastr)
//     })
// }

// 回调地狱
/* getfile(path.join(__dirname,'./files/1.txt'),function(data){
    console.log(data+"ok");
    getfile(path.join(__dirname,'./files/2.txt'),function(data){
        console.log(data+"ok!");
        getfile(path.join(__dirname,'./files/3.txt'),function(data){
            console.log(data+"ok!!")
        })
    })
},function(err){
    console.log("失败error:"+err.message)
}); */