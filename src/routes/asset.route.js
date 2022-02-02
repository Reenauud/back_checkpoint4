const assetRouter = require("express").Router();
const { assetController } = require("../controllers");

assetRouter.post("/", assetController.createOneAsset);

module.exports = assetRouter;
