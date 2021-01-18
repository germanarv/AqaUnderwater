const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Do work here
router.get('/', (req, res) => {
  res.send('Hey! It works!');
});

router.post('/add', productController.createProduct);
router.get('/products', productController.getProducts);
router.get('/products/:id', productController.getOneProduct);

module.exports = router;