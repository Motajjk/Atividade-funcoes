// Exercício 4 - Par ou Ímpar

let numero = parseFloat(prompt("Informe um número aqui e descubra se ele é par:"));

function ehPar(numero) {
    return numero % 2 === 0;
}
console.log(ehPar(numero));