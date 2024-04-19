// 2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
    
//     a) Imprima no console o array completo
    
//     b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
    
//     c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no console a nova lista

const readlineSync = require('readline-sync')

const favoriteFoods = ['Pizza','Lasagna','Ice Cream','Chocolate','Coffe']

console.log('These are my favorite foods: ')
favoriteFoods.forEach(item => console.log(item))

const newfood = readlineSync.question('Insert a new food: ')

favoriteFoods[1] = newfood // substitui a segunda comida da lista

console.log('New list:')
console.log(favoriteFoods.join('\n'))