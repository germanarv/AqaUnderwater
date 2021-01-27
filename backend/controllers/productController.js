const mongoose = require('mongoose');
const Product = mongoose.model('Product');


const getPagination = (page, size) => {
  const limit = size ? +size : 10;
  const offset = page ? (page-1) * limit : 0;

  return { limit, offset };
};

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
  const { page, size } = req.body;

  const { limit, offset } = getPagination(page, size);

  Product.paginate({}, { offset, limit })
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      res.send(500, err.message);
    })
};

exports.getOneProduct = (req, res) => {
  Product.findById(req.params.id, function(err, product) {
    if (err) return res.send(500, err.message);

    res.status(200).json(product);
  })
};