const { Personnage } = require("../models");

const createOnePersonnage = async (req, res) => {
  const { name, biographie, image } = req.body;
  try {
    const [results] = await Personnage.createOne({
      name,
      biographie,
      image,
    });
    res.status(201).json(results);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteOnePersonnage = async (req, res) => {
  const { id } = req.params;
  try {
    const [results] = await Personnage.deleteOne(id);
    res.status(200).json(results);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getAllPersonnage = async (req, res) => {
  const { personnage } = req.params;
  try {
    const [results] = await Personnage.getAll(personnage);
    res.status(200).json(results);
  } catch (err) {
    res.status(500).send("nop");
  }
};

const getPersonnageById = async (req, res) => {
  const { id } = req.params;
  try {
    const [results] = await Personnage.getById(id);
    res.status(200).json(results);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
module.exports = {
  createOnePersonnage,
  deleteOnePersonnage,
  getAllPersonnage,
  getPersonnageById,
};
