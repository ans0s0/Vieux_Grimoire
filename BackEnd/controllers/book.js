const Thing = require("../model/Thing");

exports.createBook = (req, res, next) => {
  delete req.body._id;
  const book = new Thing({
    ...req.body,
  });
  thing
    .save()
    .then((books) => res.status(201).json({ message: "Livre enregistré" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.modifyBook = (req, res, next) => {
  Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: "Livre modifié !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.deleteBook = (req, res, next) => {
  Thing.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Livre supprimé !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.getOneBook = (req, res, next) => {
  Thing.findOne({ _id: req.params.id })
    .then((book) => res.status(200).json(book))
    .catch((error) => res.status(404).json({ error }));
};

exports.getAllBooks = (req, res, next) => {
  Thing.find({ _id: req.params.id })
    .then((books) => res.status(200).json(books))
    .catch((error) => res.status(404).json({ error }));
};
