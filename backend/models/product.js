const mongoose = require('mongoose');
const { TRUE } = require('node-sass');
// mongoose.Promise = global.Promise;
const slug = require('slugs');

const productSchema = new mongoose.Schema({
  name: {
    type: String, 
    trim: true, 
    required: 'Please enter a name'
  },
  slug: {
    type: String
  },
  price: {
    type: Number
  },
  img: { 
    type: String
  },
  description: {
    type: String, 
    trim: true
  }

});

productSchema.pre('save', function(next) {
  if (!this.isModified('name')) {
    next();
    return;
  }
  this.slug = slug(this.name);
  next();
});

module.exports = mongoose.model('Product', productSchema);