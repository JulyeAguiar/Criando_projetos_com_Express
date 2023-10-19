const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {//controller/rota
  res.render('index', { message: 'Rodando index' });
});

const produtos =[
  {id: 1, titulo: "Chuck Taylor All Star Seasonal Colors Verde", preco:"preco", descricao: "descricao", imagem:""},
  {id: 2, titulo: "Chuck 70 Seasonal Colors Azul", preco:"preco", descricao: "descricao", imagem:""},
  {id: 3, titulo: "Run Star Hike Seasonal Colors Verde", preco:"preco", descricao: "descricao", imagem:""},
  {id: 4, titulo: "Chuck 70 Plus Preto", preco:"preco", descricao: "descricao", imagem:""},
  {id: 5, titulo: "Chuck 70 Prism Glitter Amarelo", preco:"preco", descricao: "descricao", imagem:""},
  {id: 6, titulo: "Chuck Taylor All Star Seasonal Colors Verde", preco:"preco", descricao: "descricao", imagem:""},
  {id: 7, titulo: "Chuck 70 Plus Pride Branco", preco:"preco", descricao: "descricao", imagem:""},
  {id: 8, titulo: "Chuck Taylor All Star Preto", preco:"preco", descricao: "descricao", imagem:""},
  {id: 9, titulo: "titulo", preco:"preco", descricao: "descricao", imagem:""},
  {id: 10, titulo: "titulo", preco:"preco", descricao: "descricao", imagem:""}
]

app.get('/produto', (req, res) => {
  res.render('produto', { message: 'Rodando produto' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});