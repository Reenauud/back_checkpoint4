const { Personnage } = require("../models");
const multer = require("multer");

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
    res.status(204).json(results);
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

const uploadFile = (req, res, next) => {
  //configuration du dossier ou stocké l'image, le nom et la bio
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./images");
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  });
  const upload = multer({ store: storage }).single("file");
  upload(req, res, (err) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(201).json({ filename: req.file.filename });
    }
  });
};

module.exports = {
  createOnePersonnage,
  deleteOnePersonnage,
  getAllPersonnage,
  getPersonnageById,
  uploadFile,
};
