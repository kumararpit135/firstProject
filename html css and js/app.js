
/*const express=require('express')

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

app.listen(3000)*/
const path=require('path')
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const conRoutes = require('./routes/contact');


app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRoutes);
app.use('/shop',shopRoutes);
app.use(conRoutes);
app.use('/',shopRoutes);

app.use((req, res, next) => {
    console.log("17t2138613");
    
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
});

app.listen(3000);
