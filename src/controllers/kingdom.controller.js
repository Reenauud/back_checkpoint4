const { Kingdom } = require("../models");

const createOneKingdom = async (req, res) => {
  const { image, nom, description } = req.body;
  try {
    const [results] = await Kingdom.createOne({
      image,
      nom,
      description,
    });
    res.status(201).json(results);
  } catch (err) {
    res.status(500).send("nop");
  }
};

module.exports = { createOneKingdom };
