const register = require("./register");
const login = require("./login");
const logout = require("./logout");
const getCurrent = require("./getCurrent");
const updateAvatar = require("./updateAvatar");

module.exports = {
  register: register.register,
  login: login.login,
  logout: logout.logout,
  getCurrent: getCurrent.getCurrent,
  updateAvatar: updateAvatar.updateAvatar,
};
