const assetRouter = require("express").Router();
const { assetController } = require("../controllers");

assetRouter.post("/", assetController.createOneAsset);
assetRouter.delete("/:id", assetController.deleteOneAsset);
assetRouter.get("/", assetController.getAllAsset);
assetRouter.get("/:id", assetController.getAssetById);

module.exports = assetRouter;
