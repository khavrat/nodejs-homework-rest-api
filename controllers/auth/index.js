const register = require("./register");
const login = require("./login");
const logout = require("./logout");
const getCurrent = require("./getCurrent");
const updateAvatar = require("./updateAvatar");
const verifyEmail = require("./verifyEmail");
const resendVerifyEmail = require("./resendVerifyEmail");

module.exports = {
  register: register.register,
  login: login.login,
  logout: logout.logout,
  getCurrent: getCurrent.getCurrent,
  updateAvatar: updateAvatar.updateAvatar,
  verifyEmail: verifyEmail.verifyEmail,
  resendVerifyEmail: resendVerifyEmail.resendVerifyEmail,
};
