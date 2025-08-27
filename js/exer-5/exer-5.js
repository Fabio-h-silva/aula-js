// Ex 4
let numero1 = Number(prompt("Digite o primeiro numero:"))
let operação = prompt("Digite uma operação (+,-,*,/)")
let numero2 = Number(prompt("Digite o segundo numero:"))


if (operação == "+") {
    total = numero1 + numero2
    alert(`O resultado da soma é ${total}`)
} else if (operação == "-") {
    total = numero1 - numero2
    alert(`O resultado da subtração é ${total}`)
} else if (operação == "*") {
    total = numero1 * numero2
    alert(`O resultado da multiplicação é ${total}`)
} else {
    total = numero1 / numero2
    alert(`O resultado da divisão é ${total}`)
}




