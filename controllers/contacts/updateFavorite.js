
const {Contact} = require("../../models/contact");
const { HttpError, ctrlWrapper } = require("../../helpers");

const { schemas } = require('../../models/contact')


const updateFavorite = async (req, res) => {
  const { error } = schemas.updateFavoriteSchema.validate(req.body);
  if (error) {
    throw HttpError(400, error.message);
  }
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, {
    new: true,
  }).populate("owner", "email");
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};


module.exports = {
  updateFavorite: ctrlWrapper(updateFavorite),
};
