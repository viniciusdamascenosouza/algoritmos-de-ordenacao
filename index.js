const precoLivros = [25, 15, 30, 50, 45, 30];

let livroMaisBarato = 0;

for (let atual = 0; atual < precoLivros.length; atual++) {
  if (precoLivros[atual] < precoLivros[livroMaisBarato]) {
    livroMaisBarato = atual;
  }
}

console.log(`O livro mais barato custa ${precoLivros[livroMaisBarato]} reais.`)
