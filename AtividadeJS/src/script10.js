// Atividade 10 - Maioridade

let idade = parseFloat(prompt("Informe a sua idade:"));

function verificarIdade(idade) {
    if (idade >= 18) {
        return "Você é maior de idade."
    }else{
        return "Você é menor de idade."
    }
}
console.log(verificarIdade(idade));