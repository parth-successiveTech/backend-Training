const { addUser } = require('../models/userModel');

const addNewUser = (req, res) => {
  const { id, first_name, last_name, email, gender, ip_address } = req.body;

  const newUser = { id, first_name, last_name, email, gender, ip_address };
  addUser(newUser);

  res.status(201).json({
    message: "New user added successfully!",
    user: newUser,
  });
};

module.exports = { addNewUser };
