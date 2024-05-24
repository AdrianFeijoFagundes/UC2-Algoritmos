// Mostre o valor "Volvo" do array "cars":

let cars = ["Saab", "Volvo", "BMW"];
console.log(cars[1])

// Mude o primeiro item de "cars" para "Ford":

cars = ["Saab", "Volvo", "BMW"];
cars[0] = 'Ford'

console.log(cars)

// Mostre o número de itens que há no array usando a propriedade certa:

cars = ["Volvo", "Jeep", "Mercedes"];
console.log('O array tem', cars.length, 'itens')



// Use o método correto de Array para remover o último item do array fruits.
const fruits = ["Banana", "Orange", "Apple"];
fruits.pop()


// Use o método correto de Array para adicionar "Kiwi" ao array fruits.
const fruits2 = ["Banana", "Orange", "Apple"];
fruits2.push('Kiwi')

// Use o método splice() para remover "Orange" e "Apple" do array fruits.
const fruits3 = ["Banana", "Orange", "Apple"];
fruits3.splice(1, 2);

console.log(fruits3)