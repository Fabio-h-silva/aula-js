console.log("Hello Word")

// Variáveis
var name = "João" //Antigo evitar
console.log(name)

let age = 25 //Escopo de bloco
console.log(age)

const city = "São Paulo" //Constante
console.log(city)


name = "cachorro"
console.log(name)
age = "choocolate"
console.log(age)

// Tipos de dados - Primitivo
let lastName = "Correa" //String = Texto
let height = 1.90 //Number
let isAproved = true //Boolean = Ligado e Desligado
let nothing = null //Null = nulo
let undefined // Undefined = Não definido

console.log(typeof age) //omo descobrir qual tipo é variável (typeof)
console.log(typeof undefined)

//Operadores
//Matemáticos
let a = 5, b = 2
console.log(a, b) // 5, 2

console.log(`${a} + ${b} = ${a + b} soma`)
console.log(`${a} - ${b} = ${a - b} subtração`)
console.log(`${a} / ${b} = ${a / b} divisão`)
console.log(`${a} * ${b} = ${a * b} multiplicação`)
console.log(`${a} % ${b} = ${a % b} resto da divisão`)
console.log(`${a} ** ${b} = ${a ** b} exponeciação`)

let i = 0
//Incremento
//pré
//i = i + 1
console.log("pré", ++i)

//pos
console.log("pós", i++)
console.log("agora incrementou", i)

let x = 5
//Desincremento
//pré
//x = x - 1
console.log("pré", --x)

//pos
console.log("pós", x--)
console.log("agora desincrementou", x)

let y = 4
// Operação + atribuição
// y = y + 10
y += 10
console.log(y)
y -= 10
console.log(y)
y /= 10
console.log(y)
y *= 10
console.log(y)






