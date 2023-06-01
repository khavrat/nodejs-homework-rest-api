const { Contact } = require("../../models/contact");
const { ctrlWrapper } = require("../../helpers");

const getAll = async (req, res) => {
  const { _id: owner } = req.user;

  const { page = 1, limit = 20, favorite } = req.query;
  const skip = (page - 1) * limit;

  const filter = { owner };
  if (favorite) {
    filter.favorite = favorite;
  }

  const result = await Contact.find(filter, "-createdAt -updatedAt", {
    skip,
    limit,
  }).populate("owner", "email");
  res.json(result);
};

module.exports = {
  getAll: ctrlWrapper(getAll),
};
