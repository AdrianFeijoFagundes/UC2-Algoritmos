// 3. Faça um programa, seguindo os passos:
    
//     a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
    
//     b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
    
//     c) Imprima o array no console
    
//     d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
    
//     e) Remova da lista o item de índice que o usuário escolheu.
    
//     f) Imprima o array no console
const readlineSync = require('readline-sync')

let toDoList = []

console.log('New tasks:')

toDoList.push(readlineSync.question('Insert task: '));
toDoList.push(readlineSync.question('Insert task: '));
toDoList.push(readlineSync.question('Insert task: '));

console.log(toDoList)

const removeTask = Number(readlineSync.question('Remove task by placing index 0, 1 or 2: '))


// verifica se o usuario digitou um indice válido senão exibe uma mensagem e o programa termina
if (removeTask <= 2) {
    toDoList.splice(removeTask, 1)
    console.log(toDoList)
} else {
    console.log('Invalid number: ')
}
                                        