// Ex 9
let usuario = String(prompt("Digite o nome do usuário:"))



if (usuario == "admin") {
    let senha = Number(prompt("Digite a senha:"))
    if (senha == 1234) {
        alert("Login bem sucedido")
    } else {
        alert("Senha incorreta")
    }
} else {
    alert("Usuário inválido!")
}