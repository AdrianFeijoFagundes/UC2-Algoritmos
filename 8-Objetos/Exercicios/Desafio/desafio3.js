// Crie uma função a mais pro exercício 3 de escrita de código. Essa função vai auxiliar o controle de estoque do sacolão: ela deve receber por parâmetro uma das frutas e retornar esse mesmo objeto com a propriedade disponibilidade com o valor invertido. 

const carrinho = []

const fruta1 = {
    nome: 'Maça',
    disponibilidade: true
}
const fruta2 = {
    nome: 'Banana',
    disponibilidade: true
}
const fruta3 = {
    nome: 'Laranja',
    disponibilidade: true
}
function colocarNoCarrinho(objeto) {
    carrinho.push(objeto)
}
function controleDeEstoque(objeto) {
    return objeto.disponibilidade = !objeto.disponibilidade
}
colocarNoCarrinho(fruta1)
colocarNoCarrinho(fruta2)
colocarNoCarrinho(fruta3)

controleDeEstoque(fruta1)
console.log(fruta1)
