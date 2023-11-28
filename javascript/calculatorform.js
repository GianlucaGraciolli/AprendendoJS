function calcular(){
const primeiroNumero = parseFloat(document.formCalculator.num1.value);
const segundoNumero = parseFloat(document.formCalculator.num2.value);
const operacao = document.formCalculator.op.value;
let resultado;

if (operacao == "+") {
    resultado = primeiroNumero + segundoNumero;    
} else if (operacao == "-") {
    resultado = primeiroNumero - segundoNumero;    
} else if (operacao == "/") {
    resultado = primeiroNumero / segundoNumero;    
} else if (operacao == "x") {
    resultado = primeiroNumero * segundoNumero;    
}

//alert('O resultado da operação é: ' +    resultado);

//console.log('O resultado da operação é: ', resultado);

//document.write('O resultado da operação é: ', resultado);

const caixaResultado = document.getElementById('resultado');
caixaResultado.value = resultado

const pcaixaResultado = document.getElementById('presultado');
pcaixaResultado.innerHTML = resultado
}