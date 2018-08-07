const fs = require('fs')
const http = require('http')
const path = require('path')

let rootPath = path.join(__dirname,'www') 
console.log(rootPath)

// 创建服务器
let server = http.createServer((request,reponse)=>{
    // reponse.setHeader('content-type','text/html;charset=utf-8')

    reponse.end('hello')
})

// 监听
server.listen(3000,'127.0.0.1',()=>{
    console.log('监听成功')
})