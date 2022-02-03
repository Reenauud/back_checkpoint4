const { User } = require("../models");

const validateDataCreateUser = async (req, res, next) => {
  const { username, password } = req.body;
  if (await User.userNameAlreadyExists(username)) {
    res.status(400).send("l'utilisateur existe déja");
  } else if (!User.validatePassword(password)) {
    res.status(400).send("le mot de passe n'est pas correcte");
  } else {
    next();
  }
};

const createOneUser = async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await User.hashPassword(password);

  try {
    const [results] = await User.createOne({
      username,
      password: hashedPassword,
    });
    res.status(201).json(results);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteOneUser = async (req, res) => {
  const { id } = req.params;
  try {
    const [results] = await User.deleteOne(id);
    res.status(200).json(results);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getAllUser = async (req, res) => {
  const { user } = req.params;
  try {
    const [results] = await User.getAll(user);
    res.status(200).json(results);
  } catch (err) {
    res.status(500).send("nop");
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const [results] = await User.getById(id);
    res.status(200).json(results);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
module.exports = {
  createOneUser,
  deleteOneUser,
  getAllUser,
  getUserById,
  validateDataCreateUser,
};
