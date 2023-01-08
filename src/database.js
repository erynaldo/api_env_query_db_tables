const conexao = require('./conexao');

// cria um banco de dados
const cria_database = `CREATE DATABASE IF NOT EXISTS db_faculdade;`;

    conexao.query(cria_database, (err, result) => {
        if(err) throw err;
        console.log('Banco criado no MySQL');
    });
 
 
// cria uma tabela no banco de dados
const cria_tabela = `CREATE TABLE IF NOT EXISTS alunos_novos(
    id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(15) NOT NULL,
    created_at VARCHAR(45) NOT NULL,
    PRIMARY KEY (id));`;

    conexao.query(cria_tabela, (err, result) => {
        if(err) throw err;
        console.log('Tabela criada');
    });


module.exports = {
    cria_database,
    cria_tabela
};