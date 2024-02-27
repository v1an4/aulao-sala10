function calcular() {

var n1 = document.getElementById("num1").valueAsNumber;
var n2 = document.getElementById("num2").valueAsNumber;
var res = document.getElementById("res")

var a = true
if(isNaN (n1)){
    alert("Digite numeros validos")
     return;
}

console.log(n1, n2, res)

res.innerHTML = n1 + n2
//res.textContent = n1 + n2
}
function media(){
var n1 = parseFloat(document.getElementById(nota1)).valueAsNumber
var n2 = parseFloat(document.getElementById(nota2)).valueAsNumber
var n3 = parseFloat(document.getElementById(nota3)).valueAsNumber
var res =
res.textContent = ((n1 + n2 + n3) / 3).toFixed(2)

if(res >=7){
      mediaTexto.innerHTML = res.toFixed(2)
        res.style.color = "green";
}else{
    mediaTexto.innerHTML = res.toFixed(2)
    res.style.color = "red";
}

}