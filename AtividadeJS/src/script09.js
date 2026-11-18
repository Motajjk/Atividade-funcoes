// Atividade 9 - Desconto

let valorProduto = parseFloat(prompt("Informe o valor total do profuto que deseja comprar:"));
let descontoProduto = parseFloat(prompt("Informe o desconto aplicado sobre o produto que deseja comprar:"));

function calcularDesconto(preco, percentual) {
    return preco - (preco * percentual) / 100;
}
console.log(calcularDesconto(valorProduto, descontoProduto));

