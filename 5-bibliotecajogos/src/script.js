function adicionarJogo()
{
  var campoJogoFavorito = document.querySelector('#jogo')
  var jogoFavorito = campoJogoFavorito.value
  if (jogoFavorito.endsWith('.jpg'))
    {
      listarJogosNaTela(jogoFavorito)
    }
  else
    {
      alert("Imagem Inválida")
    }
  campoJogoFavorito.value = ""
}

function listarJogosNaTela(jogo)
{
  var listaJogos = document.querySelector('#listaJogos')
  var elementoJogos = "<img src=" + jogo + ">"
  listaJogos.innerHTML = listaJogos.innerHTML + elementoJogos
}