// Atividade 8 - Celsius para Fahrenheit

let grausCelsius = parseFloat(prompt("Insira um valor de Graus Celsius desejado para convertê-lo em Fahrenheit:"));

function celsiusParaFahrenheit(c) {
    return c * 1.8 + 32;
}
console.log(celsiusParaFahrenheit(grausCelsius));