const recebeParametro = p => console.log(p)

const somar = (x, y) => {
    const resposta = x + y
    recebeParametro(resposta) // chamando a função dentro da funcão somar() criamos um "falso retorno"
}

somar(10,10)