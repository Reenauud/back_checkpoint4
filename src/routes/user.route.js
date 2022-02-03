const userRouter = require("express").Router();
const { userController } = require("../controllers");

userRouter.post(
  "/",
  userController.validateDataCreateUser,
  userController.createOneUser
);
userRouter.delete("/:id", userController.deleteOneUser);
userRouter.get("/", userController.getAllUser);
userRouter.get("/:id", userController.getUserById);

module.exports = userRouter;
