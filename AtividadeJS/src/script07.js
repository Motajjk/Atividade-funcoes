// Atividade 7 - Área do Retângulo

let larguraRetangulo = parseFloat(prompt("Informe a largura do retângulo:"));
let alturaRetangulo = parseFloat(prompt("Informe a altura do retângulo:"));

function areaRetangulo(base, altura) {
    return base * altura;
}
console.log(areaRetangulo(larguraRetangulo, alturaRetangulo));