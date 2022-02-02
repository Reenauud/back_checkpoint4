const mainRouter = require("express").Router();
const kingdomRouter = require("./kingdom.route");
const assetRouter = require("./asset.route");

mainRouter.use("/kingdom", kingdomRouter);
mainRouter.use("/asset", assetRouter);

module.exports = mainRouter;
