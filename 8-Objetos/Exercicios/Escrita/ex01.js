// 1. Resolva os passos a seguir: 
    
//     a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente **três apelidos**). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo**:**

// Exemplo de entrada
//  const pessoa = {
//      nome: "Vitor Hugo", 
//      apelidos: ["Vitinho", "Vitão", "Vit"]
//  }
 
// Exemplo de saída
//  "Eu sou Vitor, mas pode me chamar de: Vitinho, Vitão ou Vit"



//     b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto

function introducePeople(people) {
    console.log( `Eu sou ${people.nome}, mas pode me chamar de: ${people.apelidos[0]}, ${people.apelidos[1]} ou ${people.apelidos[2]}`)

}



const pessoa = {
    nome: 'Adrian', 
    apelidos: ['Mano','Agrião','Adri']
}
const newPeople = {
    ...pessoa,
    apelidos: ['Depre', 'Anemico', 'Bolo de Feijão']
}



introducePeople(pessoa)
introducePeople(newPeople)