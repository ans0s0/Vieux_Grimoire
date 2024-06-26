const express = require("express");
const app = express();

mongoose
  .connect(
    "mongodb+srv://ans0s0:Ans0s0@cluster0-pme76.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use(express.json());
const bookRoutes = require("../BackEnd/routes/book");
const mongoose = require("mongoose");

//Erreur CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

//creation des routes authentification et livre
app.use("/api/auth", (req, res, next) => {
  const auth = [
    {
      email: "string",
      password: "string",
    },
  ];
  res.status(200).json(auth);
  next();
});

app.use("/api/book", bookRoutes);
module.exports = app;
