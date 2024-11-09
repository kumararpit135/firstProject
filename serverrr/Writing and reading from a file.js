const http=require('http')
const fs=require('fs')
function read(){

    const data=fs.readFileSync('input.txt','utf8')
    console.log(data)
    return data.split('=')[1]
    
}

const server=http.createServer((req,res)=>{
    function showOnScreen(message){
        console.log(message)
        res.write('<html>')
        res.write('<head><title>My page</title></head>')
        res.write('<body>')
        res.write(message)
        res.write('</body>')
        res.write('</html>')
        //console.log(message,"hihfdsihfishfia")
        return res.end()

    } 
    res.write('<html>')
    res.write('<head><title>My page</title></head>')
    res.write('<body><form  method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
    res.write('</html>')
    //console.log(message,"hihfdsihfishfia")
   
    req.on('data',(chunk)=>{
        fs.writeFileSync('input.txt',chunk)
        const mes=read()
        console.log(mes)
        showOnScreen(mes)

    })
    /*req.on('end',()=>{
        const buf=Buffer.concat(ar).toString()
        console.log(buf)
        const message=buf.split('=')[1]
        console.log(message)
        fs.writeFileSync('input.txt',message)
        //const read=read()
        console.log(read)

    })*/
    
    
})
server.listen(4000)