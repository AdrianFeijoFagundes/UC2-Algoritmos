// Para este exercício, comece criando um array com os valores: 1, 2,
// 3, 4, 5 e 6.
// Determine o tamanho do array
// Adicione o número 7
// Remova os números 4 e 5
// Determine o novo tamanho do array

const numbersList = [1 ,2 ,3 ,4 ,5 ,6]

console.log('O tamanho do array no momento é:', numbersList.length)
console.log(numbersList)

numbersList.push(7)
numbersList.splice(3,2)

console.log('O tamanho do array no momento é:', numbersList.length)
console.log(numbersList)