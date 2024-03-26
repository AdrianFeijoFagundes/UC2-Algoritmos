



var a = 11
var b = 5 
var c = 9
var d = 10

// 1) Imprima “True” se a variável a for maior que 10 e menor que 20, ou se a variável b for igual
// a 5;
var r1 = (a < 10 && 20 > a) || (b === 5)

// 2) Imprima “True” se a variável a for maior que 10 ou se a variável b for igual a 5.
var r2 = a > 10 || b === 5

// 3) Imprima “True” se a variável a for maior que 10 e menor que 20, ou se a variável b for igual
// a 5, ou se a variável c for igual a 10.

var r3 = (a > 10 && 20 > a) || (b === 5) || (c === 10)

// 4)Imprima “True” se a variável a for maior que 10 ou se a variável b for igual a 5, mas não se a
// variável c for igual a 10.
var r4 = (a === 10 || b === 5) && !(c === 10)   
//  5)Imprima “True” se a variável a for maior que 10 ou se a variável b for igual a 5, mas não se a
// variável c for igual a 10 e nem se a variável d for igual a 20;
var r5 = (a > 10 || b === 5) && !(c === 10)  && !(d === 20)

console.log(r1)
console.log(r2)
console.log(r3)
console.log(r4)
console.log(r5)