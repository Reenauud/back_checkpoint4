const kingdomRouter = require("express").Router();
const { kingdomController } = require("../controllers");

kingdomRouter.post("/", kingdomController.createOneKingdom);

module.exports = kingdomRouter;
