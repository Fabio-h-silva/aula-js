// Ex 4
let valorCompra = Number(prompt("Digite o valor da compra:"))


if (valorCompra > 100) {
    valorCompra = (valorCompra / 100) *90
    alert(`Voce tem um desconto de 10% sua compra é de ${valorCompra}`)
} else {
    alert(`O valor da sua compra é de ${valorCompra}`)
}

