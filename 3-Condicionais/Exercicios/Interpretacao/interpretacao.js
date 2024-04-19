// 1. Leia o código abaixo:
    
 
    const respostaDoUsuario = "90"
    const numero = Number(respostaDoUsuario)
    
    if (numero % 2 === 0) {
      console.log("Passou no teste.")
    } else {
      console.log("Não passou no teste.")
    }

    
/*
    a) Explique o que o código faz. Qual o teste que ele realiza? 
        variavel com uma string,
        varivel que converte string em number

        O código verifica se o número é par ou impar 

    
    b) Para que tipos de números ele imprime no console "Passou no teste"? 
        Ele imprime essa frase para numeros pares     
        
    c) Para que tipos de números a mensagem é "Não passou no teste"?
        Ele imprime essa frase para numeros impares     

    // 2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:
    */    
    let fruta
    let preco
    switch (fruta) {
      case "Laranja":
        preco = 3.5
        break;
      case "Maçã":
        preco = 2.25
        break;
      case "Uva":
        preco = 0.30
        break;
      case "Pêra":
        preco = 5.5
        break; // BREAK PARA O ITEM c.
      default:
        preco = 5
        break;
    }
    console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

/*    
    a) Para que serve o código acima?
        Para informar o valor de uma fruta
    
    
    b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
        a frase impresa será    "o preço da fruta Maçã é R$2.25"

    c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?

        o programa iria imprimir no console seguinte mensagem "O preço da fruta Pêra é R$5"

    3. Leia o código abaixo:
    
*/
    const numero2 = Number(("50"))
    
    if(numero2 > 0) {
      console.log("Esse número passou no teste")
    	let mensagem = "Essa mensagem é secreta!!!"
    }
    
    console.log(mensagem)

/*    
    a) O que a primeira linha está fazendo?
        está recebendo o numero 50, porem devido as aspas é usado o método Number() para converter a string para number
    b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
         se fosse o número 10 seria essa mensagem: "Esse número passou no teste"
  
        não iria imprimir nenhuma frase, porém vai dar erro
    c) Haverá algum erro no console?

*/