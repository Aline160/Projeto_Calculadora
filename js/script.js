var salario = document.querySelector("#ganho-mes");

var horas = document.querySelector("#horas-dia");

var resultado= document.querySelector("#resposta");

function calcularValorHora() {
  var valorSalario = salario.valueAsNumber;
  var valorHoras = horas.valueAsNumber;

  //6 horas trabalhadas por 22 dias
  var horasMes = valorHoras * 22;

  var valorHora = valorSalario / horasMes;

  var valorHoraDuasCasas = valorHora.toFixed(2);

  resultado.textContent = "R$ " + valorHoraDuasCasas;

  salario.value = 0;
  horas.value = 0;
}
