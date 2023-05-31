const { User } = require("../../models/user");
const { HttpError, ctrlWrapper } = require("../../helpers");

const { schemas } = require("../../models/user");

const updateSubscription = async (req, res) => {
  const { error } = schemas.updateSubscriptionSchema.validate(req.body);
  if (error) {
    throw HttpError(400, error.message);
  }
  const { id } = req.params;

  const updateUser = await User.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!updateUser) {
    throw HttpError(404);
  }

  res.json(updateUser);
};

module.exports = {
  updateSubscription: ctrlWrapper(updateSubscription),
};
