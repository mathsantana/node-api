const express = require('express');
const ItemController = require('./controllers/ItemController');

const routes = express.Router();

routes.post('/itens', ItemController.store);
routes.get('/itens', ItemController.list);

module.exports = routes;
