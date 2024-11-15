const express=require('express')
const router= express.Router();




router.get('/app-product',(req,res,next)=>{
    res.send('<form action="/admin/product" method="POST"><input type="text" name="title"></input> <h1> select the size</h1><input type="number" name="size"><button type="submit">add</button></form>')
})
router.post('/product',(req,res,next)=>{
    console.log(req.body.title)
    console.log(req.body.size)
    res.redirect('/')
    
})
module.exports=router;