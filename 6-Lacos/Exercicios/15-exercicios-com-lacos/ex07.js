// Mostrar os números de 1 a 100, mas substitua os múltiplos de 3 por "Fizz", os
// múltiplos de 5 por "Buzz" e os múltiplos de 3 e 5 por "FizzBuzz": Utilize um loop
// for para implementar a lógica do FizzBuzz.


for (let i = 1; i <= 100; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
        console.log(i,'FizzBuzz')
    } else if (i % 5 === 0) {
        console.log(i,'Buzz')
    } else if (i % 3 === 0)  {
        console.log(i,'Fizz')
    } else {
        console.log(i)
    }
}