const fs=require('fs')
const requestHandler=(req,res)=>{
    const ar =[]
    const url=req.url
    const method=req.method

    if (url==="/"){
        console.log('hiiii')
        const data=fs.readFileSync('input.txt','utf8')
        res.write('<html>')
        res.write('<head><title>My page</title></head>')
        res.write(`<body> ${data}</body>`)
        res.write('<body><form  action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        res.write('</html>')
        return res.end()
    }
    else if(url==="/message" && method==="POST"){
        console.log('hello')
        
        req.on('data',chunk=>{
            ar.push(chunk)
        })
        req.on('end',()=>{
            console.log("hiii2")
            const inputBody=Buffer.concat(ar).toString()
            const message=inputBody.split('=')[1]
            fs.writeFileSync('input.txt',message)
            console.log(ar)
            console.log('inside fs.file')
            res.statusCode=302;
            res.setHeader('Location','/')
            return res.end()
            
        })
            
    }else{
        res.setHeader('content-type','text/html')
        res.write('<html>')
        res.write('<head><title>My page</title></head>')
        res.write('<body><form  action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        res.write('</html>')
        res.end()
    } 
}
/*module.exports={
    handle:requestHandler,
}
module.handle=requestHandler*/
module.exports=requestHandler;