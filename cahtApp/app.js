const bodyParser = require('body-parser');
const express=require('express');
const fs=require('fs')
const app=express()
const ar=[]
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
       
        res.write(`<body>${data}</body>`); // Display the messages stored in the file
        res.write(`<form action="/message" method="POST"><input type="text" id="message" name="message"><button type="submit">Send</button></form>`);
        res.write('</body>');
        res.write('</html>');
        
    })
})
app.post('/message',(req,res,next)=>{
    const mes=req.body.message
    fs.appendFile('input.txt',mes +'\n',(err)=>{
        if (err){
            res.send(" you caonnot write in the file therei is a problem ")
        }
        res.redirect('/')

    })
    
})
app.listen(3000)