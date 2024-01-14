const User = require('../models/User');
const bcrypt = require('bcrypt');

const registerUser = async (req, res) => {
  try {

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword
    });

    res.redirect('/login');
  } catch (error) {
    res.redirect('/register');
  }
};

const loginUser = (req, res) => {

};

const logoutUser = (req, res) => {
  req.logout();
  res.redirect('/login');
};

module.exports = {
  registerUser,
  loginUser,
  logoutUser
};
