// exercicio 1
//programa1
const userAge = 21
const friendAge = 20

console.log("\nPrograma 1:\n")
console.log(" Sua idade é maior do que a do seu melhor amigo?", userAge > friendAge ? "Eu sou mais velho" : "Ele é mais velho" )
console.log(" A diferença de idade é:", userAge - friendAge)

// programa2
console.log("\nPrograma 2:\n")

const numeroPar = 20
// Resposta: o resto da divisão de qualquer número dividido por 2 é igual a 0

console.log(" Resto da divisão por 2:", numeroPar % 2)
// Resposta: Se trocarmos por um núnero ímpar, o resto da divisão por 2 será 1s


//programa3
console.log("\nPrograma 3:\n")

const idadeEmAnos = 21
const idadeEmMeses = idadeEmAnos * 12 // meses do ano
const idadeEmDias = idadeEmAnos * 365 // dias do ano
const idadeEmHoras = idadeEmDias * 24 // horas do dia
console.log(" Minha idade em anos:", idadeEmAnos) 
console.log(" Minha idade em meses:", idadeEmMeses)
console.log(" Minha idade em dias:", idadeEmDias)
console.log(" Minha idade em horas:", idadeEmHoras)

//programa4
console.log("\nPrograma 4:\n")

const numero1 = 10 
const numero2 = 2 
const primeiroDivisivel = (numero1 % numero2) === 0 // primeiro divide quando a resultado do modulo for igual a 0 é divisivel, então compara.
const segundoDivisivel = (numero2 % numero1) === 0 
console.log("O primeiro numero é maior que segundo?",numero1 > numero2)
console.log("O primeiro numero é igual ao segundo?",numero1 === numero2)
console.log("O primeiro numero é divisível pelo segundo?",primeiroDivisivel)
console.log("O segundo numero é divisível pelo primeiro?",segundoDivisivel) 
