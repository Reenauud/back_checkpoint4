const mainRouter = require("express").Router();
const kingdomRouter = require("./kingdom.route");
const assetRouter = require("./asset.route");
const personnageRouter = require("./personnage.route");
const userRouter = require("./user.route");

mainRouter.use("/kingdom", kingdomRouter);
mainRouter.use("/asset", assetRouter);
mainRouter.use("/personnage", personnageRouter);
mainRouter.use("/user", userRouter);

module.exports = mainRouter;
