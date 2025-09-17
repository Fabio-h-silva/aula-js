let idade = Number(prompt("Digite sua idade:"))

let media = Number(prompt("Digite sua média de notas (0 a 10):"))

if (idade >= 18 && media >= 7) {
    alert("Voce está aprovado para proxima etapa!")
} else if (idade >= 18 && media < 7) {
    alert("Voce tem idade suficiente, mas precisa melhorar suas notas.")
} else {
    alert("Você ainda não tem a idade mínima necessária.")
}