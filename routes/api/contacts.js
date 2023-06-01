const express = require("express");

const ctrl = require("../../controllers/contacts");

const { validateBody, isValidId, authenticate } = require("../../middlewares");

const schemas = require("../../models/contact");

const router = express.Router();

router.get("/", authenticate, ctrl.getAll);

router.get("/:id", authenticate, isValidId, ctrl.getById);

router.post(
  "/",
  authenticate,
  validateBody(schemas.schemas.addSchema),
  ctrl.add
);

router.delete("/:id", authenticate, isValidId, ctrl.deleteById);

router.put(
  "/:id",
  authenticate,
  validateBody(schemas.schemas.addSchema),
  isValidId,
  ctrl.updateById
);

router.patch(
  "/:id/favorite",
  authenticate,
  validateBody(schemas.schemas.updateFavoriteSchema),
  isValidId,
  ctrl.updateFavorite
);

module.exports = router;
