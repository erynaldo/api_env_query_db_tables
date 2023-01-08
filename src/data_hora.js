const moment = require('moment'); //HORA


const time = new Date(); //HORA
const parsedDate = moment(time).format('DD/MM/YYYY') //DATA
const parsedTime = moment(time).format('H:mm:ss') //HORA
console.log(parsedDate, parsedTime);


//BANCO DE DADOS
let db = [
    {'1' : {Nome: 'João da Silva', Idade: '25'} },
    {'2' : {Nome: 'Maria Fernandes', Idade: '30'} },
    {'3' : {Nome: 'Antonio Ferreira', Idade: '35'} }
];


module.exports = {
    parsedDate,
    parsedTime,
    db
};