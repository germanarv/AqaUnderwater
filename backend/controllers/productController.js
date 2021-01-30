const mongoose = require('mongoose');
const Product = mongoose.model('Product');


const getPagination = (page, size, sortBy, searchParam) => {
  const limit = size ? +size : 10;
  const offset = page ? (page-1) * limit : 0;
  const sort = sortBy ? sortBy : null;
  const regex = searchParam ? {name: { $regex: `.*${searchParam}.*` }} : {};

  return { limit, offset, sort, regex };
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
  const { page, size, sortBy, searchParam } = req.body;

  const { limit, offset, sort, regex } = getPagination(page, size, sortBy, searchParam);

  const options = { offset, limit, sort };

  Product.paginate(regex, options)
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