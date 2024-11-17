const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});
router.get('/take', (req, res, next) => {
//   res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
res.send("inside take");
});

module.exports = router;