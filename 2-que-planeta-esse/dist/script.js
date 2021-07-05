var perguntaInicial = prompt("Você sabe qual planeta é esse? 1=Sim 2=Não")

if(perguntaInicial == 1)
  {
    var perguntaPlaneta = prompt("3=Mercúrio | 4=Vênus | 5=Terra | 6=Marte | 7=Júpter | 8=Saturno | 9=Urano | 10=Netuno")
    if(perguntaPlaneta == 9)
      {
        document.write ('<FONT COLOR="white"><h2> Correto: esse é o planeta Urano!</h2>')       
      }
    else if(perguntaPlaneta == 3)
      {
        document.write ('<FONT COLOR="white"><h2> Resposta errada :/ </h2>')
      }
    else if(perguntaPlaneta == 4)
      {
        document.write ('<FONT COLOR="white"><h2> Resposta errada :/ </h2>')
      }
    else if(perguntaPlaneta == 5)
      {
        document.write ('<FONT COLOR="white"><h2> Resposta errada :/ </h2>')
      }
    else if(perguntaPlaneta == 6)
      {
        document.write ('<FONT COLOR="white"><h2> Resposta errada :/ </h2>')
      }
    else if(perguntaPlaneta == 7)
      {
        document.write ('<FONT COLOR="white"><h2> Resposta errada :/ </h2>')
      }
    else if(perguntaPlaneta == 8)
      {
        document.write ('<FONT COLOR="white"><h2> Resposta errada :/ </h2>')
      }
    else if(perguntaPlaneta == 10)
      {
        document.write ('<FONT COLOR="white"><h2> Resposta errada :/ </h2>')
      }
    else
      {
        document.write ('<FONT COLOR="white"><h2> Resposta inválida </h2>')
      }  
    
  }
else if(perguntaInicial == 2) 
  {
    document.write ('<FONT COLOR="white"><h2> Vamos lá, tente descobrir!</h2>')
  }

else
  {
    document.write ('<FONT COLOR="white"><h2> Resposta inválida </h2>')      
  }

//