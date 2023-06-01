const { User } = require("../../models/user");
const { HttpError, ctrlWrapper } = require("../../helpers");

const updateSubscription = async (req, res) => {
  const { id } = req.params;

  const updateUser = await User.findByIdAndUpdate(id, req.body, {
    new: true,
  }).select('id email subscription');
  if (!updateUser) {
    throw HttpError(404);
  }

  res.json(updateUser);
};

module.exports = {
  updateSubscription: ctrlWrapper(updateSubscription),
};
