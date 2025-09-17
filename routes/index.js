const routes = require('express').Router();

routes.get('/', (req, res, next) => {
  res.json('awesome person');
});

module.exports = routes;