const express=require('express')
const cors=require('cors');
const bodyParser = require('body-parser');
const mysql=require('mysql2/promise');
const app=express()
app.use(cors())
app.use(bodyParser.json())
const pool=mysql.createPool({
    host:'localhost',
    user:'root',
    database:'test',
    password:'20130008890'
});


app.get('/playername/:name',async(req,res)=>{
    console.log(req.params)
    const name=req.params.name;
    try{
        const [row]=await pool.execute("SELECT * FROM info WHERE name=?",[name]);
        console.log(row)
        res.json(row)

        

    }catch(err){console.log(err)

    }
})
app.post('/add',async(req,res)=>{
    console.log(req.body);
    let { name, date, url, birthplace, carrer, match, score, fifties, centuries, wicket, age } = req.body;
    
    match=match || 0;
    score=score || 0;
    fifties = fifties || 15;
    centuries = centuries || 10;
    wicket = wicket || 15;
    age = age || 40;
    try {
        // Corrected SQL query (fixed column names and removed extra comma)
        const [result] = await pool.execute(
            'INSERT INTO info (name, date, url, birthplace, carrer, `match`, score, fifties, centuries, wicket, age) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [name, date, url, birthplace, carrer, match, score, fifties, centuries, wicket, age]
        );
        res.json(result); // Send the inserted result back to the client
    }
    catch(err){console.log(err)}
    
})

app.get('/info',async(req,res)=>{
    try{
        console.log('in infoe req')
        const [resutl]=await pool.execute("SELECT * FROM info")
        
        res.json(resutl)

    }catch(err){console.log(err)}
    
})
app.delete('/remove/:id',async(req,res)=>{
    const id=req.params.id;
    try{
        console.log('done ind deltet')
        const [result]=await pool.execute("DELETE FROM info WHERE id=?",[id])
        res.status(200).json(result);
    }catch(err){
        res.json(err)
    }
})


app.listen(3000);