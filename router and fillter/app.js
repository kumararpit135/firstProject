
const express=require('express')

const adminRoutes=require('./routes/admin')

const shop=require('./routes/shop')

const app=express()
const bodyParser=require('body-parser')

app.use(bodyParser.urlencoded({extended:false}))

app.use('/admin',adminRoutes)

app.use(shop)
app.use((req,res,next)=>{
    res.status(404).send("<h1>The page is not avilable<h1>")
})

app.listen(3000)
