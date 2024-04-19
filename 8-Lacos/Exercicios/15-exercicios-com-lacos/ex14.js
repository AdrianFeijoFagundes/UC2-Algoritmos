// Mostrar a tabuada de todos os números de 1 a 10: Utilize um loop for aninhado
// para mostrar a tabuada de todos os números de 1 a 10 no console.

for (let i=1; i < 11; i++) { 
    console.log(`TABUADA DO ${i}:`)
    for (let j=0; j < 11; j++) {
        console.log(`${i} x ${j} = ${i * j}`)
    }
}