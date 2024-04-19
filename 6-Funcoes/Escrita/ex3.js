const readline = require('readline-sync')

const n1 = Number(readline.question('insira um numero: '));
const n2 = Number(readline.question('insira outro numero: '));


// cada função retorna uma string o tipo de calculo realizado +  o resultado
// tbm poderia ser retornado apenas o resultado
const somar = (x,y) => `Soma: ${x + y}`;
const subtrair = (x,y) => `Subtração: ${x - y}`;
const multiplicar = (x,y) => `Multiplicação: ${x * y}`;
const dividir = (x,y) => `Divisão:${x / y}`;

console.log('Numeros inseridos:', n1, n2)
console.log(somar(n1,n2))
console.log(subtrair(n1,n2))
console.log(multiplicar(n1,n2))
console.log(dividir(n1,n2))