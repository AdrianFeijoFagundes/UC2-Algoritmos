// Calcular a soma dos números ímpares de 1 a 100: Utilize um loop for para calcular a soma dos números ímpares de 1 a 100. Mostre o resultado no console.

let sum = 0
for (let i = 1; i < 100; i+=2) {
    sum += i
}
console.log('the sum of the all odd numbers between 1 and 100 is:', sum)