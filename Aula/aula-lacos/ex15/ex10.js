// 10. Mostrar a sequência de Fibonacci até o 10º termo: Utilize um loop for para
// calcular e mostrar os 10 primeiros termos da sequência de Fibonacci no console

let fistN = 0
let lastN = 1
let result = 0
for (let i = 1; i < 11; i++) {
    result = fistN + lastN
    console.log(fistN, '+', lastN, '=', result)
    fistN = lastN
    lastN = result    
}