// Atividade 6 - Média de notas

let nota1 = parseFloat(prompt("Insira a primeira nota:"));
let nota2 = parseFloat(prompt("Insira a segunda nota:"));
let nota3 = parseFloat(prompt("Insira a terceira nota:"));

function calcularMedia (n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}

console.log(calcularMedia(nota1, nota2, nota3));