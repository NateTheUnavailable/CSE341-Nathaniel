const routes = require('express').Router();

const myController = require('../controllers')

routes.get('/', myController.coolfunction);
routes.get('/cool', myController.coolperson);

module.exports = routes;