var distALuzTxt = prompt("Insira a distância em anos-luz")

var distALuzNmb = parseFloat(distALuzTxt)
var distKM = distALuzNmb * 9460730472580.8
var distKMFix = distKM.toFixed(4)

var distFinal = "Distância:" + distKMFix + "km"

alert(distFinal)

//