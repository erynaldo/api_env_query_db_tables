const express = require('express');
const router = require('./router');
const conexao = require('./conexao');
require('./database');
const bodyParser = require('body-parser');


// NAO PRECISA DESSAS LINHAS ABAIXO POIS FOI DECLARADO NO ARQUIVO package.json
// require("dotenv").config();
// esse de cima ou esse de baixo
// const dotenv = require("dotenv")
// dotenv.config()

const app = express();

app.use(router);

// app.get('/', (req, res) => {
//     res.send('Ola, esse vem do arquivo app!');
// })

module.exports = app;