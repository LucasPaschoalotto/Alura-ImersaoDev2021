var lucas =
{
  nome: "Jogador1",
  vitorias: 0,
  derrotas: 0,
  pontos: 0,
  taxa: 0
}

var gaby =
{
  nome: "Jogador2",
  vitorias: 0,
  derrotas: 0,
  pontos: 0,
  taxa: 0
}

lucas.pontos = calculaPontos(lucas)
lucas.taxa = calculaTaxa(lucas)
gaby.pontos = calculaPontos(gaby)
gaby.taxa = calculaTaxa(gaby)

function calculaPontos(jogador)
{
  var pontos = (jogador.vitorias * 3)
  return pontos
}

function calculaTaxa(jogador)
{
  var calcTaxa = jogador.vitorias + jogador.derrotas
  var taxa = ((jogador.vitorias / calcTaxa) * 100).toFixed(1)   
  return taxa
}

var jogadores = [lucas, gaby]
exibirJogadoresNaTela(jogadores)

function exibirJogadoresNaTela(jogadores)
{
  var html = ""
  for(var i = 0; i < jogadores.length; i++)
    {
      html += "<tr><td>" + jogadores[i].nome + "</td>"
      html += "<td>" + jogadores[i].vitorias + "</td>"
      html += "<td>" + jogadores[i].derrotas + "</td>"
      html += "<td>" + jogadores[i].pontos + "</td>"
      html += "<td>" + jogadores[i].taxa + "%</td>"
      html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
      html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"
    }
  var tabelaJogadores = document.getElementById('tabelaJogadores')
  tabelaJogadores.innerHTML = html
}

function adicionarVitoria(i)
{
  var jogador = jogadores[i]
  if (i == 0)
    {
      jogador.vitorias++
      jogador.pontos = calculaPontos(jogador)
      jogador.taxa = calculaTaxa(jogador)
      var jogador = jogadores[i+1]
      jogador.derrotas++
      jogador.pontos = calculaPontos(jogador)
      jogador.taxa = calculaTaxa(jogador)
  exibirJogadoresNaTela(jogadores)
    }
  else if (i == 1)
    {
      jogador.vitorias++
      jogador.pontos = calculaPontos(jogador)
      jogador.taxa = calculaTaxa(jogador)
      var jogador = jogadores[i-1]
      jogador.derrotas++
      jogador.pontos = calculaPontos(jogador)
      jogador.taxa = calculaTaxa(jogador)
  exibirJogadoresNaTela(jogadores)
    }
}

function adicionarDerrota(i)
{
  var jogador = jogadores[i]
  if (i == 0)
    {
      jogador.derrotas++
      jogador.pontos = calculaPontos(jogador)
      jogador.taxa = calculaTaxa(jogador)
      var jogador = jogadores[i+1]
      jogador.vitorias++
      jogador.pontos = calculaPontos(jogador)
      jogador.taxa = calculaTaxa(jogador)
  exibirJogadoresNaTela(jogadores)
    }
  else if (i == 1)
    {
      jogador.derrotas++
      jogador.pontos = calculaPontos(jogador)
      jogador.taxa = calculaTaxa(jogador)
      var jogador = jogadores[i-1]
      jogador.vitorias++
      jogador.pontos = calculaPontos(jogador)
      jogador.taxa = calculaTaxa(jogador)
  exibirJogadoresNaTela(jogadores)
    }
}