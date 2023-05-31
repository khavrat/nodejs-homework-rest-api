const express = require("express");

const ctrl = require("../../controllers/users");

const { isValidId } = require("../../middlewares");

const router = express.Router();

router.get("/", ctrl.getAllUsers);

router.patch("/:id", isValidId, ctrl.updateSubscription);

module.exports = router;
