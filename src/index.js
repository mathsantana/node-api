const express = require('express');
const routes = require('./routes');

require('./database/');
const PORT = 8080;

// Criando um instacia do Express
const app = express();

// Necessario para o Express receber o formato JSON
app.use(express.json());
// Carregar o arquivo rotas
app.use(routes);

// Fazer o node ouvir a porta 3000, esperando requisicoes
app.listen(PORT);
