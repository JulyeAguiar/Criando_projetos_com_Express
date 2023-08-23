const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { message: 'Olá, Mundo! Sou Marina Delrei, um novo cargo eu ganhei!' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});