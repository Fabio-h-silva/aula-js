// Ex 4
let numero1 = number(prompt("Digite o primeiro numero:"))
let operação = prompt("Digite uma operação (+,-,*,/)")
let numero2 = number(prompt("Digite o segundo numero:"))


switch (operação) {
    case ("+"):
        total = numero1 + numero2
        alert(`O resultado da soma é ${total}`)
        break;
    case ("-"):
        total = numero1 - numero2
        alert(`O resultado da subtração é ${total}`)
        break;
    case ("*"):
        total = numero1 * numero2
        alert(`O resultado da multiplicação é ${total}`)
        break;
    case ("/"):
        total = numero1 / numero2
        alert(`O resultado da divisão é ${total}`)
        break;
    
}



