const personnageRouter = require("express").Router();
const { personnageController } = require("../controllers");

personnageRouter.post("/", personnageController.createOnePersonnage);
personnageRouter.delete("/:id", personnageController.deleteOnePersonnage);
personnageRouter.get("/", personnageController.getAllPersonnage);
personnageRouter.get("/:id", personnageController.getPersonnageById);

module.exports = personnageRouter;
