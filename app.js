const http = require('http')
const express=require('express')

const app=express()
app.use((req,res,next)=>{
    console.log("i am in muddfbasdhf");
    next()
    
})
app.use((req,res,next)=>{
    console.log("fkjsgfjkgfgs")
    res.send('<h1>fudhfhsdfohsodghosdhgofhsdoghfoghoshgohfodh</h1>')
})
app.listen(3000)