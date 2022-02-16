const { User } = require("../models");
const argon2 = require("argon2");

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
  // try {
  //   const { username, password } = req.body;
  //   const hashedPassword = await User.hashPassword(password);
  //   res.status(201).json();
  // } catch (err) {
  //   res.status(500).send(err.message);
  // }

  try {
    const { username, password } = req.body;
    const hashedPassword = await User.hashPassword(password);

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
    res.status(204).json(results);
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

const getUserByUserName = async (req, res, next) => {
  const { username } = req.body;
  try {
    const [results] = await User.getOneByUserName(username);
    if (results.length === 0) {
      res.status(404).send("utilisateur non trouvé");
    } else {
      req.user = results[0];
      next();
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const verifyCredentials = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const [results] = await User.getOneByUserName(username);
    if (results.length === 0) {
      res.status(404).send("bad credentials");
    } else {
      const validatePassword = await User.validatePassword(
        results[0].password,
        password
      );
      if (!validatePassword) {
        res.status(401).send("bad credentials");
      } else {
        req.user = results[0];
        next();
      }
    }
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
  getUserByUserName,
  verifyCredentials,
};
