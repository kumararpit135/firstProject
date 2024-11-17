const path = require('path');

const express = require('express');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    console.log('1')
  res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
});
router.get('/', (req, res, next) => {
    console.log('2')
  res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  
  res.redirect('/admin');
});


module.exports = router;