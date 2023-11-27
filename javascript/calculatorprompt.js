//1- Solicitar dois números
//2- Solicitar a operação
//3- Realizar o cálculo
//4- Mostrar resultado

let resultado;//declarando variável, não tipada
let num1 = parseFloat(prompt("Digite o primeiro número:"));//declarando e atribuindo ao que for digitado. (Neste caso, um número digitado)
let num2 = parseFloat(prompt("Digite o segundo número:"));//mesmo de cima
let operacao = prompt("Escolha a operação: [+] para Adição | [-] para Subtração | [x] para Multiplicação | [/] para Divisão.");//

if ( isNaN(num1) == true || isNaN(num2) == true) { //"isNaN" - (IS NOT A NUMBER? | Validação booleana pra saber se é ou não um número.)
    resultado = 'Operação Inválida. Tente novamente.';
} else if (operacao == '+') {
    resultado = num1 + num2;
} else if (operacao == '-') {
    resultado = num1 - num2;
} else if (operacao == 'x') {
    resultado = num1 * num2;
} else if (operacao == '/') {
    resultado = num1 / num2;
} else {
    resultado = 'Operação Inválida. Tente novamente.';
}

    document.write('<p class="resultado">',resultado);
    document.write('</p>')


