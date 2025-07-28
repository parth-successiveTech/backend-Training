const users = require('../MOCK_DATA.json');

const getAllUsers = () => users;

const addUser = (newUser) => {
  users.push(newUser);
  return newUser;
};

module.exports = { getAllUsers, addUser };
