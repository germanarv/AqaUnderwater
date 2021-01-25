const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const accountController = require('../controllers/accountController');
const cartController = require('../controllers/cartController');

// Do work here
router.get('/', (req, res) => {
  res.send('Hey! It works!');
});

router.post('/add', accountController.isUserLogged, accountController.isUserAdmin, productController.createProduct);
router.get('/products', productController.getProducts);
router.get('/products/:id', productController.getOneProduct);
router.post('/register', accountController.register);
router.post('/login', accountController.login);
router.post('/addtocart', accountController.isUserLogged, cartController.addToCart);
router.post('/placeorder', accountController.isUserLogged, cartController.placeOrder);
router.get('/mycart', accountController.isUserLogged, cartController.getCartItems);

module.exports = router;