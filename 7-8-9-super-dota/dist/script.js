var carta0 =
{
  nome: "Tinker",
  imagem:"https://artifactwiki.com/images/thumb/a/a8/01_Tinker_10025_card_default.jpg/350px-01_Tinker_10025_card_default.jpg",
  audio:"https://static.wikia.nocookie.net/dota2_gamepedia/images/4/48/Vo_tinker_tink_kill_08.mp3",
  atributos:
  {
    ataque: 7,
    vida: 5
  }
}
var carta1 =
{
  nome: "Lion",
  imagem: "https://artifactwiki.com/images/thumb/5/5a/01_Lion_10060_card_default.jpg/350px-01_Lion_10060_card_default.jpg",
  audio:"https://static.wikia.nocookie.net/dota2_gamepedia/images/f/f8/Vo_lion_lion_kill_09.mp3",
  atributos:
  {
    ataque:6 ,
    vida:5
  }
}
var carta2 =
{
  nome: "Necrophos",
  imagem:"https://artifactwiki.com/images/thumb/a/a9/01_Necrophos_10059_card_default.jpg/350px-01_Necrophos_10059_card_default.jpg",
  audio:"https://static.wikia.nocookie.net/dota2_gamepedia/images/d/d1/Vo_necrolyte_necr_ability_reap_02.mp3",
  atributos:
  {
    ataque:5 ,
    vida:6
  }
}
var carta3 =
{
  nome: "Storm Spirit",
  imagem:"https://artifactwiki.com/images/thumb/5/5b/01_Storm_Spirit_10536_card_default.jpg/350px-01_Storm_Spirit_10536_card_default.jpg",
  audio:"https://static.wikia.nocookie.net/dota2_gamepedia/images/c/c9/Vo_stormspirit_ss_kill_03.mp3",
  atributos:
  {
    ataque:4 ,
    vida:6
  }
}
var carta4 =
{
  nome: "Ogre Magi",
  imagem:"https://artifactwiki.com/images/thumb/e/ed/01_Ogre_Magi_10043_card_default.jpg/350px-01_Ogre_Magi_10043_card_default.jpg",
  audio:"https://static.wikia.nocookie.net/dota2_gamepedia/images/d/d0/Vo_ogre_magi_ogmag_kill_03.mp3",
  atributos:
  {
    ataque:3 ,
    vida:7
  }
}
var carta5 =
{
  nome: "Tidehunter",
  imagem:"https://artifactwiki.com/images/thumb/5/58/01_Tidehunter_10024_card_default.jpg/350px-01_Tidehunter_10024_card_default.jpg",
  audio:"https://static.wikia.nocookie.net/dota2_gamepedia/images/f/f9/Vo_tidehunter_tide_kill_08.mp3",
  atributos:
  {
    ataque:2 ,
    vida:18
  }
}

var carta6 =
{
  nome:"Winter Wyvern",
  imagem:"https://artifactwiki.com/images/thumb/0/0b/01_Winter_Wyvern_10010_card_default.jpg/350px-01_Winter_Wyvern_10010_card_default.jpg",
  audio:"https://static.wikia.nocookie.net/dota2_gamepedia/images/e/e9/Vo_winter_wyvern_winwyv_cast_03.mp3",
  atributos:
  {
    ataque:6,
    vida:6
  }
}

var carta7 =
{
  nome:"Luna",
  imagem:"https://artifactwiki.com/images/thumb/b/b7/01_Luna_10006_card_default.jpg/350px-01_Luna_10006_card_default.jpg",
  audio:"https://static.wikia.nocookie.net/dota2_gamepedia/images/c/ca/Vo_luna_luna_kill_07.mp3",
  atributos:
  {
    ataque:3,
    vida:8
  }
}

var carta8 =
{
  nome:"Abbadon",
  imagem:"https://artifactwiki.com/images/thumb/0/02/01_Abaddon_10016_card_default.jpg/350px-01_Abaddon_10016_card_default.jpg",
  audio:"https://static.wikia.nocookie.net/dota2_gamepedia/images/6/6f/Vo_abaddon_abad_kill_03.mp3",
  atributos:
  {
    ataque:4,
    vida:9
  }
}

var carta9 =
{
  nome:"Earthshaker",
  imagem:"https://artifactwiki.com/images/thumb/e/e1/01_Earthshaker_10033_card_default.jpg/350px-01_Earthshaker_10033_card_default.jpg",
  audio:"https://static.wikia.nocookie.net/dota2_gamepedia/images/9/91/Vo_earthshaker_erth_kill_02.mp3",
  atributos:
  {
    ataque:2,
    vida:7
  }
}

var cartas = [carta0, carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8, carta9]
var cartaMaquina
var numeroCartaMaquina
var cartaJogador
var numeroCartaJogador
var pontosJogador = 0
var pontosMaquina = 0

atualizaPlacar()
atualizaQuantidadeCartas()

function sortearCarta()
{
  var numeroCartaMaquina = parseInt(Math.random() * cartas.length )
  cartaMaquina = cartas[numeroCartaMaquina]
  cartas.splice(numeroCartaMaquina, 1)
  
  var numeroCartaJogador = parseInt(Math.random() * cartas.length )
  cartaJogador = cartas[numeroCartaJogador]
  cartas.splice(numeroCartaJogador, 1)
  
  document.getElementById('btnSortear').disabled = true
  document.getElementById('btnJogar').disabled = false
  
  exibirCartaJogador()
  exibirOpcoes()  
}

function exibirCartaJogador()
{
  var divCartaJogador = document.getElementById("carta-jogador")
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`  
}

function exibirCartaMaquina()
{
  var divCartaMaquina = document.getElementById("carta-maquina")
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`  
}

function exibirOpcoes()
{
  var opcoes = document.getElementById('opcoes')
  var opcoesTexto = ""
  for (var atributo in cartaJogador.atributos)
    {
      opcoesTexto += "<FONT COLOR='white'><input type='radio' name='atributo' value=" + atributo + ">" + atributo
    }
  opcoes.innerHTML = opcoesTexto
}

function obterAtributoSelecionado()
{
  var radioAtributo = document.getElementsByName('atributo')
  for (var i = 0; i < radioAtributo.length; i++)
    {
      if(radioAtributo[i].checked)
        { 
          return radioAtributo[i].value
        }
    }
}

function jogar()
{
  var divResultado = document.getElementById("resultado")
  var atributoSelecionado = obterAtributoSelecionado()
  
  if(cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado])
    {
      var audio = new Audio(`${cartaJogador.audio}`)
      audio.play()
      htmlResultado = '<p class="resultado-final">Venceu</p>'
      pontosJogador++ 
      console.log(numeroCartaMaquina)
    }
  
  else if(cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado])
    {
      var audio = new Audio(`${cartaMaquina.audio}`)
      audio.play()
      htmlResultado = '<p class="resultado-final">Perdeu</p>'
      pontosMaquina++ 
      console.log(numeroCartaJogador)
    }
  
  else if(cartaJogador.atributos[atributoSelecionado] = cartaMaquina.atributos[atributoSelecionado])
  {
    var audio = new Audio("https://static.wikia.nocookie.net/dota2_gamepedia/images/f/fc/Misc_soundboard_rimshot.mp3")
    audio.play()
    htmlResultado = '<p class="resultado-final">Empatou</p>'
  }
  
  if(cartas.length == 0)
    {
      if(pontosJogador > pontosMaquina)
        {
          htmlResultado = '<p class="resultado-final">O jogo acabou. Você venceu!</p>'
        }
      else if (pontosJogador < pontosMaquina)
        {
          htmlResultado = '<p class="resultado-final">O jogo acabou. Você perdeu.</p>'
        }
      else
        {
          htmlResultado = '<p class="resultado-final">O jogo acabou. Empate!</p>'
        }
    }
  else
    {
      document.getElementById('btnProximaRodada').disabled = false
    }
  divResultado.innerHTML = htmlResultado
  exibirCartaMaquina()
  atualizaPlacar()
  atualizaQuantidadeCartas()

  document.getElementById('btnJogar').disabled = true
}

function atualizaPlacar()
{
  var divPlacar = document.getElementById('placar')
  var html = "Jogador " + pontosJogador + "/" + pontosMaquina + " Máquina"
  divPlacar.innerHTML = html
}

function atualizaQuantidadeCartas()
{
  var divQuantidadeCartas = document.getElementById('quantidade-cartas')
  var html = "Quantidade de cartas no jogo: " + cartas.length
  divQuantidadeCartas.innerHTML = html
}

function proximaRodada()
{
  var divCartas = document.getElementById('cartas')
  divCartas.innerHTML = `<div id="carta-jogador"></div><div id="carta-maquina"></div>`
  
  document.getElementById('btnSortear').disabled = false
  document.getElementById('btnJogar').disabled = true
  document.getElementById('btnProximaRodada').disabled = true
  
  var divResultado = document.getElementById('resultado')
  divResultado.innerHTML = ""
}