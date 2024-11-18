const expressModule = require('express');

const expressAppMiddleware = expressModule();

expressAppMiddleware.use((req, res, next) => {
  console.log('Requête reçue !');
  next();
});

expressAppMiddleware.use((req, res, next) => {
  res.status(201);
  next();
});

expressAppMiddleware.use((req, res, next) => {
  res.json({ message: 'Votre requête a bien été reçue !' });
  next();
});

expressAppMiddleware.use((req, res, next) => {
  console.log('Réponse envoyée avec succès !');
});

module.exports = expressAppMiddleware;