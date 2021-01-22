const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.login = async (req, res) => {
  let body = req.body;

  User.findOne({ email: body.email }, (err, userDB) => {
    if(err) {
      return res.send(500, err.message);
    }

    if(!userDB) {
      return res.status(400).json({
        ok: false,
        err: {
          message: "Usuario o contraseña incorrectos"
        }
      })
    }

    if(!bcrypt.compareSync(body.password, userDB.password)) {
      return res.status(400).json({
        ok: false,
        err: {
          message: "Usuario o contraseña incorrectos"
        }
      })
    }

    let token = jwt.sign({
      user: userDB
    }, process.env.SEED_AUTHENTICATION, {
      expiresIn: process.env.EXPIRATION_TOKEN
    });

    res.status(200).json({
      ok: true,
      user: userDB,
      token
    });

  });

};

exports.register = async (req, res) => {
  let body = req.body;
  let { firstName, lastName, email, password, role } = body;

  let user = new User({
    firstName,
    lastName,
    email,
    password: bcrypt.hashSync(password, 10),
    role
  });

  user.save((err, userDB) => {
    if(err) {
      return res.send(400, err.message);
    }

    res.status(200).json({
      ok: true,
      user: userDB
    });
  });

};