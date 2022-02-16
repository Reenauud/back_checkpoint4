// un middleware pour créer un token
require("dotenv").config();
const jwt = require("jsonwebtoken");

const createToken = (req, res) => {
  const { id } = req.user;
  const token = jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "15m" });
  const refreshToken = jwt.sign({ id }, process.env.REFRESH_JWT, {
    expiresIn: "1h",
  });
  res
    .status(200)
    .cookie("token", token, { httpOnly: true, maxAge: 3600000 })
    .cookie("refreshToken", refreshToken, { httpOnly: true, maxAge: 3600000 })
    .json({ id });
};

const verifyToken = async (req, res, next) => {
  const token = req.cookies;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        res.sendStatus(403);
      }
      req.user.id = decoded.id;
      return next();
    });
  }
  return res.status(403).send("unothorized");
};

const refreshToken = (req, res) => {
  // Je récupère mon token dans la requete
  const { token } = req.cookies;
  let payload;
  // Je vérifie la validité de mon token et attribue le résultat dans ma variable payload.
  //   Je traite les différents types d'erreurs.
  try {
    payload = jwt.verify(token, process.env.JWT_SECRET);
  } catch (e) {
    if (e instanceof jwt.jsonWebTokenError) {
      return res.status(401).send("your jwt is unauthorized");
    }
    return res.status(400).send("bad request");
  }
  //   Je prend la date actuelle de la requete en for;at seconde ?
  const nowUnixSeconds = Math.round(Number(new Date()) / 1000);
  console.log("seconds ?", nowUnixSeconds);
  //   Si je suis à plus de 2 min déxpiration de mon token, je ne fais rien

  if (payload.exp - nowUnixSeconds < 120) {
    return res.status(500).json({ token });
  }
  //   Je créé un nouveau token et l'envoi dans mon cookie
  const newToken = jwt.sign({ id: payload.id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  return res
    .status(200)
    .cookie("token", newToken, { httpOnly: true, maxAge: 3600000 })
    .send({ id: payload.id });
};

module.exports = {
  createToken,
  verifyToken,
  refreshToken,
};
