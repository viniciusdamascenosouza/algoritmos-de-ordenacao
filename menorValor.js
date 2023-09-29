const livros = require("./listaLivros");

function menorValor(arrProdutos, posicaoInicial) {
  let livroMaisBarato = posicaoInicial;

  for (let atual = posicaoInicial; atual < arrProdutos.length; atual++) {
    if (arrProdutos[atual].preco < arrProdutos[livroMaisBarato].preco) {
      livroMaisBarato = atual;
    }
  }
  return livroMaisBarato;
}

// console.log(
//   `O livro mais barato é o ${livros[livroMaisBarato].titulo}, custando ${livros[livroMaisBarato].preco} reais.`
// );

module.exports = menorValor;
