var numSecret = parseInt(Math.random() * 20)
var tentativas = 5
console.log ("Número secreto: " + numSecret)

while (tentativas != 0)
  {
    var chute = parseInt(prompt("Digite um número entre 0 e 20."))
    
    if (chute == numSecret)
      {
        break
      }
    else if (chute < numSecret) 
      {
        tentativas = tentativas - 1
        alert('Errou! O número é maior. Tentativas restantes: ' + tentativas )
      }
    else if (chute > numSecret) 
      {
        tentativas = tentativas - 1
        alert('Errou! O número é menor. Tentativas restantes: ' + tentativas)
      }
  }
  document.write('<h2> Número secreto: ' + numSecret + '. Pontuação: ' + tentativas * 2 + "</h2>")
//