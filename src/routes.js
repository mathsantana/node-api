const express = require('express');
const ItemController = require('./controllers/ItemController');

const routes = express.Router();

routes.get('/', (req, res) => {
  return res.send({Hello: 'World'});
});
routes.post('/itens', ItemController.store);
routes.get('/itens', ItemController.list);

module.exports = routes;
