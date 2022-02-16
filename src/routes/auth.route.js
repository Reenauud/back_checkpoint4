const authRouter = require("express").Router();
const { userController, authController } = require("../controllers");

authRouter.get("/", authController.verifyToken, userController.getUserById);
authRouter.post(
  "/login",
  userController.verifyCredentials,
  authController.createToken
);

authRouter.post(
  "/refreshToken",
  authController.verifyToken,
  authController.refreshToken
);

module.exports = authRouter;
