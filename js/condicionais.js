let idade = 12
let temDinheiro = false

if (idade >= 18) {
    console.log("Pode tirar habilitação...")
}
else {
    console.log("Não pode tirar habilitação...")
}

// Verifique a nota escolar -> crie uma variável nota, acima de 6 aporvado, abaixo reprovado

// IF - ELSE IF - ELSE

let nota = 6

if (nota >= 6) {
    // bloco de codigo - so é executado dentro dessa condição
    console.log("aprovado")
}

else if (nota >= 4 && nota <= 5.9) {
    console.log("recuperação")
} 

else {
    console.log("reprovado")
}

// Switch
let dia = 1
switch (dia) {
    case 1:
        console.log("Domingo")
        break;
    case 2:
        console.log("Segunda")
        break;
        
    default:
        console.log("Dia inválido")
        break;
}

let opcao = 1
switch (opcao) {
    case 1:
        console.log("Suporte Técnico")
        break;
    case 2:
        console.log("Financeiro")
        break; 
    default:
        console.log("Opção inválida")
        break;
}

// Crie um Switch que de 1 a 7, mostre o dia correspondente
let dias = prompt("Digite um número de 1 a 7")
switch (Number(dias)) {
    case 1:
        console.log("Domingo")
        break;
    case 2:
        console.log("Segunda")
        break; 
    case 3:
        console.log("Terça")
        break; 
    case 4:
        console.log("Quarta")
        break; 
    case 5:
        console.log("Quinta")
        break; 
    case 6:
        console.log("Sexta")
        break; 
    case 7:
        console.log("Sábado")
        break; 
    default:
        console.log("Opção inválida")
        break;
}

// Com Switch defina 5 fristas e mostre o valor para ela
// maça -> R$ 3
let maca = 3.99
let banana = 2.00
let laranja = 5.00
let limao = 7.00
let uva = 10.00

let fruta = maca
switch (fruta) {
    case maca:
        console.log(`Maçã custa R$ ${maca.toFixed(2)} Kg`)
        break;
    case banana:
        console.log(`Banana custa R$ ${banana} Kg`)
        break;
    case laranja:
        console.log(`Laranja custa R$ ${laranja} Kg`)
        break;
    case limao:
        console.log(`Limão custa R$ ${limao} Kg`)
        break;
    case uva:
        console.log(`Uva custa R$ ${uva} Kg`)
        break;
    default:
        console.log("Opção inválida")
        break;
}