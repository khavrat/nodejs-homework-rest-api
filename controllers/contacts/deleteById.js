const { Contact } = require("../../models/contact");
const { HttpError, ctrlWrapper } = require("../../helpers");

const deleteById = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndRemove(id).populate("owner", "email");
  if (!result) {
    throw HttpError(404);
  }
  res.json({
    message: "Delete success",
  });
};

module.exports = {
  deleteById: ctrlWrapper(deleteById),
};
