const app = require('./app');

const porta = process.env.PORT || 3333;

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
});