function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

// a) O que vai ser impresso no console?
//    false
//    undefinded
// b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
/*
    imprime undefined pois a propriedade altura não foi definida
*/