const livros = require("./listaLivros");

let livroMaisBarato = 0;

for (let atual = 0; atual < livros.length; atual++) {
  if (livros[atual].preco < livros[livroMaisBarato].preco) {
    livroMaisBarato = atual;
  }
}

console.log(
  `O livro mais barato é o ${livros[livroMaisBarato].titulo}, custando ${livros[livroMaisBarato].preco} reais.`
);
