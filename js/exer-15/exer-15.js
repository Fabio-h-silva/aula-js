//ex. 15
let peso = Number(prompt("Digite seu peso:"))
let altura = Number(prompt("Digite sua altura:"))

imc = peso / (altura * altura)

if (imc <= 18.5) {
    alert("Abaixo do peso")
} else if (imc >= 18.6 && imc <= 24.9) {
    alert("Normal")
} else if (imc >= 25 && imc <= 29.9) {
    alert("Sobrepeso")
} else {
    alert("Obesidade")
}