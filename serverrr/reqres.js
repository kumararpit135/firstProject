const http=require('http')
const server=http.createServer((req,res)=>{
    if (req.url==='/home'){
        res.setHeader("Content-type",'text.html')
        res.write('<html>')
        res.write('<head><title>My page</title></head>')
        res.write('<body>Welcome home</body>')
        res.write('</html>')
    }
    if (req.url==='/about'){
        res.setHeader("Content-type",'text.html')
        res.write('<html>')
        res.write('<head><title>My page</title></head>')
        res.write('<body> Welcome to About Us page</body>')
        res.write('</html>')
    }
    if (req.url==='/node'){
        res.setHeader("Content-type",'text.html')
        res.write('<html>')
        res.write('<head><title>My page</title></head>')
        res.write('<body>Welcome to my Node Js project</body>')
        res.write('</html>')
    }
})

server.listen(5000)
