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
    res.status(500).send(err.message);
  }
};
const getkingdomById = async (req, res) => {
  const { id } = req.params;
  try {
    const [results] = await Kingdom.getOneById(id);
    res.status(200).json(results);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteOneKingdom = async (req, res) => {
  const { id } = req.params;
  try {
    const [results] = await Kingdom.deleteOne(id);
    res.status(204).json(results);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = { createOneKingdom, getkingdomById, deleteOneKingdom };
