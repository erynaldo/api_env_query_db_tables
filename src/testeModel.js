const conexao = require('./conexao');

const getAll = async () => {
    const [curso] = await conexao.execute('SELECT * FROM curso');
    return curso;
};

module.exports = {
    getAll
};