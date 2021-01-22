const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

let userType = {
  values: ["ADMIN", "USER"],
  message: '{VALUE} no es un tipo válido'
};

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'El nombre es necesario']
  },
  lastName: {
    type: String,
    required: [true, 'El apellido es necesario']
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'El correo electrónico es necesario']
  },
  password: {
    type: String,
    required: [true, 'La contraseña es necesaria']
  },
  role: {
    type: String,
    default: 'USER',
    required: [true],
    enum: userType
  }
});

userSchema.methods.toJSON = function() {
  let user = this;
  let userObject = user.toObject();
  delete userObject.password;

  return userObject;
};

userSchema.plugin(uniqueValidator, {
  message: '{PATH} debe de ser único'
});

module.exports = mongoose.model('User', userSchema);