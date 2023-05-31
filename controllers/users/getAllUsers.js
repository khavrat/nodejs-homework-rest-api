const { User } = require("../../models/user");
const { ctrlWrapper } = require("../../helpers");

const getAllUsers = async (req, res) => {
    const users = await User.find({}, "-createdAt -updatedAt -token");
    res.json(users);
};

module.exports = {
  getAllUsers: ctrlWrapper(getAllUsers),
};
