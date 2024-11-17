const path = require('path');

const express = require('express');

const router = express.Router();
router.post('/contact',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','contact.html'))
    // res.send("you. sdfjklsdioj");

})
router.get('/contact',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','contact.html'))
    // res.send("you. sdfjklsdioj");

})
router.post("/contact/success",(req,res,next)=>{
    res.send("you have success fully fill you  information ")
})

router.post("/",(req,res,next)=>{
    res.send("contact post")
})

module.exports = router;