const bodyParser = require('body-parser');
const express=require('express');
const fs=require('fs')
const app=express()
app.use(bodyParser.urlencoded({extended:false}))
app.get('/login',(req,res,next)=>{
    res.write('<html>')
    res.write('<head><title>dfkhasdhf</title></head>')
    res.write('<body>')
    res.write(`<form action="/chat" method="POST"><input type="text" id="username" name ="username"><button type="submit">login</button></input></form>
        <script>
            
            document.querySelector('form').onsubmit = function(event) {
                const username = document.getElementById('username').value; 
                localStorage.setItem('username', username);
            }
        </script>`)
    
    res.write('</body>')
    res.write('<html>')
    
})
app.post('/chat',(req,res,next)=>{
    
    console.log('jiii')
    res.redirect('/')
})

app.get('/',(req,res,next)=>{
    console.log("hii")
        fs.readFile('input.txt','utf8', (err,data)=>{
        if (err){
            return res.send('fadsjgfadsgfjk')
        }
        console.log(data)
        res.write('<html>');
        res.write('<head><title>Chat Room</title></head>');
        res.write('<body>');
        res.write('<h1>Welcome to the Chat Room</h1>');
       
        res.write(`<body> ${data}<h4>=><h4></body>`); 
        res.write(`
            <form action="/message" method="POST">
            <input type="text" id="message" name="message">
            <input type="hidden" id="username" name="username">
            <button type="submit">Send</button></form>
            <script> 
                document.querySelector('form').onsubmit = function(event){
                    const username = localStorage.getItem('username');
                    document.getElementById('username').value = username;
                }
            </script>`);
        res.write('</body>');
        res.write('</html>');
        
    })
})
app.post('/message',(req,res,next)=>{
    const mes=req.body.message
    const name=req.body.username
    console.log(name,'hiiiiiiiii')
    fs.appendFile('input.txt',`${name}:${mes}`,(err)=>{
        if (err){
            res.send(" you caonnot write in the file therei is a problem ")
        }
        console.log(name,mes)
        res.redirect('/')

    })
    
})
app.listen(3000)