const testeModel = require('./testeModel');

const getAll = async (req, res) => {

    // comentar essa linha abaixo e colocar as outras depois
    // return res.status(200).json({ message: 'controller está funcionando!' });

    const curso = await testeModel.getAll();
    return res.status(200).json(curso);

};
 
module.exports = {
    getAll
};