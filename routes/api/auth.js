const express = require('express');

const ctrl = require('../../controllers/auth');

const { schemas } = require('../../models/user');

const router = express.Router();

router.post("/register", ctrl.register);

router.post("/login", ctrl.login);

module.exports = router;
