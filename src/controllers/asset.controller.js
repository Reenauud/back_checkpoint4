const { Asset } = require("../models");

const createOneAsset = async (req, res) => {
  const { nom, valeur, quantite, kingdom_id } = req.body;
  try {
    const [results] = await Asset.createOne({
      nom,
      valeur,
      quantite,
      kingdom_id,
    });
    res.status(201).json(results);
  } catch (err) {
    res.status(500).send("nop");
  }
};

const deleteOneAsset = async (req, res) => {
  const { id } = req.params;
  try {
    const [results] = await Asset.deleteOne(id);
    res.status(200).json(results);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getAllAsset = async (req, res) => {
  const { asset } = req.params;
  try {
    const [results] = await Asset.getAll(asset);
    res.status(200).json(results);
  } catch (err) {
    res.status(500).send("nop");
  }
};

const getAssetById = async (req, res) => {
  const { id } = req.params;
  try {
    const [results] = await Asset.getById(id);
    res.status(200).json(results);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = { createOneAsset, deleteOneAsset, getAllAsset, getAssetById };
