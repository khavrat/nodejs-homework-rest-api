const express = require("express");

const ctrl = require("../../controllers/auth");

const { authenticate, validateBody, upload } = require("../../middlewares");

const schemas = require("../../models/user");

const router = express.Router();

router.post(
  "/register",
  validateBody(schemas.schemas.registerSchema),
  ctrl.register
);

router.get("/verify/:verificationToken", ctrl.verifyEmail);

router.post("/verify", validateBody(schemas.schemas.emailSchema), ctrl.resendVerifyEmail);

router.post("/login", validateBody(schemas.schemas.loginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

router.patch("/avatars", authenticate, upload.single("avatar"), ctrl.updateAvatar );


module.exports = router;
