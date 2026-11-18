// Atividade 5 - Maior de Dois

let numero1 = parseFloat(prompt("Insira o primeiro número:"));
let numero2 = parseFloat(prompt("Insira o segundo número:"));

function numeroMaior(a, b) {
    if (a > b) {
        return a;
    }else{
        return b;
    }
}

console.log(numeroMaior(numero1, numero2));