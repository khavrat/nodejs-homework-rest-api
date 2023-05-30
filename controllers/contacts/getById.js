const { Contact } = require("../../models/contact");
const { HttpError, ctrlWrapper } = require("../../helpers");

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findById(id).populate("owner", "email");
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

module.exports = {
    getById: ctrlWrapper(getById),
}