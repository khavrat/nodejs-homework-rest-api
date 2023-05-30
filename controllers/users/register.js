const bcrypt = require("bcrypt");

const { User, schemas } = require("../../models/user");

const { HttpError, ctrlWrapper } = require("../../helpers");

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(409, "Email in use");
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const { error } = schemas.registerSchema.validate(req.body);

  if (error) {
    throw HttpError(400, error.message);
  }

  const newUser = await User.create({ ...req.body, password: hashPassword });
  res.status(201).json({
    user: {
      email: newUser.email,
      subscription: newUser.subscription,
    },
  });
};

module.exports = {
    register: ctrlWrapper(register),
}
