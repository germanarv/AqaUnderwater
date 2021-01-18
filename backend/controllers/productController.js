const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.json(req.body);
  } catch(err) {
    console.log(err.message);
  }
};

exports.getProducts = (req, res) => {
  Product.find(function(err, products) {
    if (err) return res.send(500, err.message);

    res.status(200).json(products);
  })
};

exports.getOneProduct = (req, res) => {
  Product.findById(req.params.id, function(err, product) {
    if (err) return res.send(500, err.message);

    res.status(200).json(product);
  })
};