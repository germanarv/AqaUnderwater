const mongoose = require('mongoose');
const Cart = mongoose.model('Cart');
const User = mongoose.model('User');
const Product = mongoose.model('Product');

exports.addToCart = async (req, res) => {
  const { userID, productId, quantity } = req.body;

  try {
    let cart = await Cart.findOne({ userID, active: true });
    let product = await Product.findOne({ '_id': productId });
    const name = product.name;
    const price = product.price;

    if (cart) {
      let itemIndex = cart.products.findIndex(p => p.productId == productId);

      if (itemIndex > -1) {
        let productItem = cart.products[itemIndex];
        productItem.quantity += quantity;
        cart.products[itemIndex] = productItem;
      } else {
        cart.products.push({ productId, quantity, name, price });
      }
      cart = await cart.save();
      return res.status(201).send(cart);
    } else {
      let user = await User.findOne({ '_id': userID });
      let userString = user.firstName + ' ' + user.lastName;
      const newCart = await Cart.create({
        userID,
        name: userString,
        products: [{ productId, quantity, name, price }]
      });

      return res.status(201).send(newCart);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
};

exports.placeOrder = async (req, res) => {
  const { userID } = req.body;

  try {
    let cart = await Cart.findOne({ userID, active: true });

    if (cart) {
      if (cart.active) {
        cart.active = false;
        cart = await cart.save();
        return res.status(200).send(cart);
      } else {
        return res.status(500).send("No active cart");
      }
    } else {
      return res.status(500).send("There is no cart");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
};

exports.getCartItems = async (req, res) => {
  const { userID } = req.body;

  try {
    let cart = await Cart.findOne({ userID, active: true });

    if (cart) {
      let products = cart.products;
      return res.status(200).send(products);
    } else {
      return res.status(500).send("There is no cart");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
};