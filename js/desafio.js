var valor = document.querySelector("#valor-hora");

var horas_projeto = document.querySelector("#horas-projeto");

var resultado= document.querySelector("#resposta");

function calcular() {
  var valorHora = valor.valueAsNumber;
  var valorProjeto = horas_projeto.valueAsNumber;
 

  
  var valortotal = valorHora * valorProjeto;

  var valortotalDuasCasas = valortotal.toFixed(2);

  resultado.textContent = "R$ " + valortotalDuasCasas;

  valor.value = 0;
  horas_projeto.value = 0;

  console.log (resultado)
}