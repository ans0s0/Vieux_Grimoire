const express = require("express");

const router = express.Router();
const bookCtrl = require("../controllers/book");

//Création d'un book
router.post("/", bookCtrl.createBook);

//Modification d'un book
router.put("/:id", bookCtrl.modifyBook);

//Affichage du book créé
router.get("/:id", bookCtrl.getOneBook);

router.get("/", bookCtrl.getAllBooks);

//Suppression d'un book
router.delete("/:id", bookCtrl.deleteBook);

module.exports = router;
