const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {//controller/rota
  res.render('index', { message: 'Olá, Mundo! Sou Marina Delrei, um novo cargo eu ganhei!' });
});
app.get('/contatos', (req, res) => {
  res.render('contato', { message: 'Página de contatos' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});