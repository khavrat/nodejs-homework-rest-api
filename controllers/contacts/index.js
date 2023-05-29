const getAll = require("./getAll");
const getById = require("./getById");
const add = require("./add");
const deleteById = require("./deleteById");
const updateById = require("./updateById");
const updateFavorite = require("./updateFavorite");

module.exports = {
  getAll: getAll.getAll,
  getById: getById.getById,
  add: add.add,
  deleteById: deleteById.deleteById,
  updateById: updateById.updateById,
  updateFavorite: updateFavorite.updateFavorite,
};
