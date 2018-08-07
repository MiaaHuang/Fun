const fs = require('fs')                           
const http = require('http')                           
const path = require('path')    

var rootPath = path.join(__dirname,'www')

// 创建服务器
let server = http.createServer((request,response)=>{
    // 生成地址
    let targetPath = path.join(rootPath, request.url);
    // 判断路径是否存在
    if(fs.existsSync(targetPath)){
        // 存在就判断是文件还是文件夹
        fs.stat(targetPath,(err,stats)=>{
            if(stats.isFile()){
                fs.readFile(targetPath,(err,data)=>{
                    response.end(data)
                })
            }
        })
    }else{
        // 不存在就404
        response.statusCode = 404;
        response.setHeader('content-type','text/html;charset=utf-8')
        response.end(`
        <!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
        <html><head>
        <title>404 Not Found</title>
        </head><body>
        <h1>Not Found</h1>
        <p>你请求的${request.url} 不在服务器上哦,检查一下呗</p>
        </body></html>
    `);
    }
})

//监听
server.listen(3000,'127.0.0.1',()=>{
    console.log('jianting success')
})