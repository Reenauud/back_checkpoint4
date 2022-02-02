const { Asset } = require("../models");

const createOneAsset = async (req, res) => {
  const { nom, valeur, quantite, kingdom_id } = req.body;
  try {
    const [results] = await asset.createOne({
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

module.exports = { createOneAsset };
