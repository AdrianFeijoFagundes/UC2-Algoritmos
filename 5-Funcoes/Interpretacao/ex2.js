let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)


// a. Explique o que essa função faz e qual é sua utilidade

/*
a função ira "pegar" um texto e verificar se inclui a palavra cenoura 

*/ 
// b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
/*
    i.   `Eu gosto de cenoura` 
    o console irá imprimir TRUE
    
    ii.  `CENOURA é bom pra vista`
    o console irá imprimir TRUE
    
    iii. `Cenouras crescem na terra`
    o console irá imprimir TRUE

*/