require("dotenv").config();
const express = require("express");
const app = express();
const mainRouter = require("./routes");
const cors = require("cors");
const multer = require("multer");

app.use(express.json());

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "--" + file.originalname);
  },
});

const upload = multer({ storage: fileStorageEngine });

app.post("/single", upload.single("image"), (req, res) => {
  console.log(req.file);
  res.send("single file as been upload");
});

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello undefined api !" });
});
//on configure cors pour autorisé uniquement le front a communiqué avec notre API
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_ORIGIN,
  })
);
app.use("/api", mainRouter);

module.exports = app;
