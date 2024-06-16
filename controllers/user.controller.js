const Promise = require('promise');
const bcrypt = require('bcrypt');
const pool = require('../config/database');
const User = require('../models/user.model');
const {
  errorResponse,
  successResponse,
} = require('../utils/rest');
const Messages = require('../utils/messages');
const httpCodes = require('../utils/httpCodes');
const db = require('../config/database');

// GET

// GET all users
module.exports.getUsers = async (req, res) => {
  await db.connect();
   let dta = await db.query('SELECT * FROM users');
  successResponse(res,'Hi', dta)
  // User.findAll()
  //   .then((result) => {
  //     return res.render('users/index', {
  //       users: result
  //     })
  //   })
  //   .catch((err) => err);
}

// GET create user
module.exports.getCreateUser = (req, res) => {
  res.render('users/create');
};


