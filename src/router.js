const express = require('express');
const testeController = require('./testeController');
const data_hora = require('./data_hora');


const router = express.Router();

// router.get('/teste', (req, res) => {
//     res.status(200).send('O router está funcionando!')
// });

router.get('/curso', testeController.getAll);

router.get('/', (req, res) => {
    return res.send('Página Inicial!');
});

router.get('/hora', (req, res) => {
    return res.send(`<h1>${data_hora.parsedDate}<br />${data_hora.parsedTime}</h1>`); //HORA
})

router.get('/db', (req, res) => {
    return res.json(data_hora.db);
})

module.exports = router;