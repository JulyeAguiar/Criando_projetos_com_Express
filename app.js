const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {//controller/rota
  res.render('index', { message: 'Rodando index' });
});
app.get('/produto', (req, res) => {
  res.render('produto', { message: 'Rodando produto' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});