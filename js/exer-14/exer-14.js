// Ex 14
let numero = Number(prompt("Digite um número:"))

while (numero !== 7) {
    if (numero > 7){
    alert("Muito alto")
    } else {
    alert("Muito baixo")
    }
    numero = Number(prompt("Digite um número:"))
}
alert("Acertou!")