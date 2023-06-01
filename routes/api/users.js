const express = require("express");

const ctrl = require("../../controllers/users");

const { validateBody, isValidId } = require("../../middlewares");

const schemas = require('../../models/user')

const router = express.Router();

router.get("/", ctrl.getAllUsers);

router.patch("/:id", validateBody(schemas.schemas.updateSubscriptionSchema), isValidId, ctrl.updateSubscription);


module.exports = router;
