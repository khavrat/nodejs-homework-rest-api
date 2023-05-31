const { Contact } = require("../../models/contact");
const { HttpError, ctrlWrapper } = require("../../helpers");

const { schemas } = require("../../models/contact");

const add = async (req, res) => {
  //идентификация юзера кот может положить клнтакты
  const { _id: owner } = req.user;
  const { error } = schemas.addSchema.validate(req.body);
  if (error) {
    throw HttpError(400, error.message);
  }
  //и сюда добавим
  const contact = await Contact.create({ ...req.body, owner });
  res.status(201).json(contact);
};

module.exports = {
  add: ctrlWrapper(add),
};
