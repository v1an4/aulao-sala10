function calcular() {

var n1 = document.getElementById("num1").valueAsNumber;
var n2 = document.getElementById("num2").valueAsNumber;
var res = document.getElementById("res");

var a = true
if(isNaN (n1) && isNaN(n2)){
    alert("Digite numeros validos");
     return;
}

res.innerHTML = n1 + n2;
}
function media(){
var n1 = parseFloat(document.getElementById(nota1)).valueAsNumber;
var n2 = parseFloat(document.getElementById(nota2)).valueAsNumber;
var n3 = parseFloat(document.getElementById(nota3)).valueAsNumber;
var mediaTexto = document.getElementById("resposta");
var res = (n1 + n2 + n3) / 3;

if(res >=7){
      mediaTexto.innerHTML = res.toFixed(2)
        res.style.color = "green";
}else{
    mediaTexto.innerHTML = res.toFixed(2)
    res.style.color = "red";
}

}
 function contar(){
    const num = parseInt($("#numeroInput").val());

    if(isNaN(num)){
        $("#result").text("Por favor,informe um número válido")
        return;
    }

    var resultadoStr = ""
    //digitou 3
    if(num <= 10000){
        for(var cont = 1; cont <=num; cont++){
            resultadStr = resultadStr + cont;
            1
    }
    $("result").html(resultadoStr)
    }else{
        $("#result").text("Vai travar se você digitar este número");
    }



    }

 