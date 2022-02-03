const kingdomRouter = require("express").Router();
const { kingdomController } = require("../controllers");

kingdomRouter.post("/", kingdomController.createOneKingdom);
kingdomRouter.get("/:id", kingdomController.getkingdomById);
kingdomRouter.delete("/:id", kingdomController.deleteOneKingdom);

module.exports = kingdomRouter;
