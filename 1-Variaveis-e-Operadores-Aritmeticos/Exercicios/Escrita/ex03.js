//Troca de valores

let a = 10
let b = 25


console.log('valor de a:', a, 'valor de b:', b)
//nova váriavel para armazenar temporariamente o valor de a 
let variavelTemporaria = a

// "salvando" o valor de A 
variavelTemporaria = a

a = b
b = variavelTemporaria
console.log('novo valor de a:', a, ' novo valor de b:', b)


